/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckoutForm.css";
import Button from "../Shared/Button/Button";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ closeModal, purchaseInfo, refetch, totalQuantity }) => {
  const [clientSecret, setClientSecret] = useState("");
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  useEffect(() => {
    getPaymentIntent();
  }, [purchaseInfo]);

  const getPaymentIntent = async () => {
    try {
      const { data } = await axiosSecure.post("/create-payment-intent", {
        quantity: purchaseInfo?.quantity,
        plantId: purchaseInfo?.plantId,
      });
      setClientSecret(data.clientSecret);
    } catch (error) {
      console.log(error);
    }
  };

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
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
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
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
        toast.success("Order successful!");

        // decrease quantity from plants collection
        await axiosSecure.patch(`/plants/quantity/${purchaseInfo?.plantId}`, {
          quantityToUpdate: totalQuantity,
          status: "decrease",
        });
        refetch();
        navigate("/dashboard/my-orders");
      } catch (error) {
        console.log(error);
      } finally {
        closeModal();
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
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
          label={`Pay $${purchaseInfo?.price}`}
          disabled={!stripe}
        />
        <Button onClick={closeModal} label={"Cancel"} outline={true} />
      </div>
    </form>
  );
};

export default CheckoutForm;
