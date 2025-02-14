/* eslint-disable react/prop-types */
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../Form/CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const PurchaseModal = ({ closeModal, isOpen, plant, refetch }) => {
  const { category, name, price, quantity, _id, seller } = plant;
  const { user } = useAuth();
  const [totalQuantity, setTotalQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);
  const [purchaseInfo, setPurchaseInfo] = useState({
    customer: {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
    },
    plantId: _id,
    price: totalPrice,
    quantity: totalQuantity,
    seller: seller?.email,
    address: "",
    status: "Pending",
  });

  useEffect(() => {
    if (user) {
      setPurchaseInfo((prev) => ({
        ...prev,
        customer: {
          name: user.displayName || "",
          email: user.email || "",
          image: user.photoURL || "",
        },
      }));
    }
  }, [user]);

  useEffect(() => {
    setPurchaseInfo((prev) => ({
      ...prev,
      price: totalPrice,
      quantity: totalQuantity,
    }));
  }, [totalPrice, totalQuantity]);

  const handleQuantityChange = (value) => {
    if (value === "") {
      setTotalQuantity("");
      return;
    }

    const numValue = parseInt(value);
    if (isNaN(numValue) || numValue < 1) {
      setTotalQuantity(1);
      setTotalPrice(price);
      return;
    }

    if (numValue > quantity) {
      setTotalQuantity(quantity);
      return toast.error("Quantity exceeds available stock!");
    }

    setTotalQuantity(numValue);
    setTotalPrice(numValue * price);
  };

  const incrementQuantity = () => {
    if (totalQuantity < quantity) {
      setTotalQuantity((prev) => prev + 1);
      setTotalPrice((prev) => prev + price);
    }
  };

  const decrementQuantity = () => {
    if (totalQuantity > 1) {
      setTotalQuantity((prev) => prev - 1);
      setTotalPrice((prev) => prev - price);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment} className="font-Poppins">
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-lg font-medium text-center leading-6 text-gray-900"
                >
                  Review Info Before Purchase
                </DialogTitle>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">Plant: {name}</p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">Category: {category}</p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Customer: {user?.displayName}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Available: {quantity} units
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Price: ${price} per unit
                  </p>
                </div>

                {/* Quantity input field with buttons */}
                <div className="flex items-center space-x-2 mt-3">
                  <label htmlFor="quantity" className="text-sm text-gray-600">
                    Quantity:
                  </label>
                  <button
                    onClick={decrementQuantity}
                    disabled={totalQuantity <= 1}
                    className="px-3 py-1 text-lg bg-gray-200 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    −
                  </button>
                  <input
                    value={totalQuantity}
                    onChange={(e) => handleQuantityChange(e.target.value)}
                    onBlur={() => {
                      if (totalQuantity === "") setTotalQuantity(1);
                    }}
                    className="w-14 text-center p-2 border border-lightBlue outline-lightBlue rounded-md bg-white"
                    name="quantity"
                    id="quantity"
                    type="number"
                    required
                  />
                  <button
                    onClick={incrementQuantity}
                    disabled={totalQuantity >= quantity}
                    className="px-3 py-1 text-lg bg-gray-200 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    +
                  </button>
                </div>

                {/* Address input field */}
                <div className="text-sm mt-4">
                  <label htmlFor="address" className="text-gray-600">
                    Address:
                  </label>
                  <input
                    className="px-4 py-2 mt-1 text-gray-800 border border-lightBlue outline-lightBlue rounded-md bg-white w-full"
                    name="address"
                    id="address"
                    onChange={(e) =>
                      setPurchaseInfo((prev) => ({
                        ...prev,
                        address: e.target.value,
                      }))
                    }
                    type="text"
                    placeholder="Shipping address"
                    required
                  />
                </div>

                {/* Checkout form */}
                <Elements stripe={stripePromise}>
                  <CheckoutForm
                    closeModal={closeModal}
                    purchaseInfo={purchaseInfo}
                    refetch={refetch}
                    totalQuantity={totalQuantity}
                  />
                </Elements>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default PurchaseModal;
