/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckoutForm.css";
import Button from "../Shared/Button/Button";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const CheckoutForm = ({ closeModal, purchaseInfo, refetch, totalQuantity }) => {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [processing, setProcessing] = useState(false);

  const { data: clientSecret = "" } = useQuery({
    queryKey: ["createPaymentIntent"],
    enabled: purchaseInfo.quantity > 0,
    queryFn: async () => {
      const { data } = await axiosSecure.post("/create-payment-intent", {
        quantity: purchaseInfo?.quantity,
        plantId: purchaseInfo?.plantId,
      });

      return data.clientSecret;
    },
  });

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    setProcessing(true);
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      setProcessing(false);
      return;
    }

    // Use your card Element with other Stripe.js APIs
    // eslint-disable-next-line no-unused-vars
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setProcessing(false);
      return console.log("[error]", error);
    } else {
      // console.log("[PaymentMethod]", paymentMethod);
    }

    // confirm payment
    const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: purchaseInfo?.customer?.name,
          email: purchaseInfo?.customer?.email,
        },
      },
    });

    if (paymentIntent.status === "succeeded") {
      // post req to db
      try {
        // save order to db
        await axiosSecure.post("/orders", {
          ...purchaseInfo,
          transactionId: paymentIntent?.id,
        });

        // decrease quantity from plants collection
        await axiosSecure.patch(`/plants/quantity/${purchaseInfo?.plantId}`, {
          quantityToUpdate: totalQuantity,
          status: "decrease",
        });

        refetch();
        toast.success("Order successful!");
        navigate("/dashboard/my-orders");
        setProcessing(false);
      } catch (error) {
        setProcessing(false);
        console.log(error);
      } finally {
        setProcessing(false);
        closeModal();
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        className="border-lightBlue border"
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />

      <div className="flex justify-around mt-2 gap-2">
        <Button
          type="submit"
          label={processing ? "Processing..." : `Pay $${purchaseInfo?.price}`}
          disabled={!stripe || !clientSecret || processing}
          icon={processing ? AiOutlineLoading3Quarters : null}
        />

        <Button
          onClick={closeModal}
          label={"Cancel"}
          outline={true}
          disabled={processing}
        />
      </div>
    </form>
  );
};

export default CheckoutForm;
