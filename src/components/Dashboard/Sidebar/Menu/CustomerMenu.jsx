import { GrUserAdmin } from "react-icons/gr";
import MenuItem from "./MenuItem";
import { useState } from "react";
import BecomeSellerModal from "../../../Modal/BecomeSellerModal";
import useAxiosSecure from "./../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import { toast } from "react-hot-toast";
import { RiSeedlingLine } from "react-icons/ri";

const CustomerMenu = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const axiosSecure = useAxiosSecure();

  const closeModal = () => {
    setIsOpen(false);
  };

  const requestHandler = async () => {
    try {
      // send a request to server
      await axiosSecure.patch(`/users/${user?.email}`);

      toast.success("Successfully requested to become a seller.");
    } catch (error) {
      toast.error(error.response.data);
    } finally {
      closeModal();
    }
  };

  return (
    <>
      <MenuItem icon={RiSeedlingLine} label="My Orders" address="my-orders" />

      <div
        onClick={() => setIsOpen(true)}
        className="flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer"
      >
        <GrUserAdmin className="w-5 h-5" />

        <span className="mx-4 font-medium">Become A Seller</span>
      </div>

      <BecomeSellerModal
        closeModal={closeModal}
        isOpen={isOpen}
        requestHandler={requestHandler}
      />
    </>
  );
};

export default CustomerMenu;
