import PropTypes from "prop-types";
import { useState } from "react";
import DeleteModal from "../../Modal/DeleteModal";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const SellerOrderDataRow = ({ orderData, refetch }) => {
  const axiosSecure = useAxiosSecure();
  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  const { name, customer, address, quantity, status, price, _id, plantId } =
    orderData || {};

  // handle order delete order
  const handleDelete = async () => {
    try {
      // delete req
      await axiosSecure.delete(`/orders/delete/${_id}`);

      // increase quantity from plants collection
      await axiosSecure.patch(`/plants/quantity/${plantId}`, {
        quantityToUpdate: quantity,
        status: "increase",
      });

      // call refetch for UI refresh
      refetch();

      toast.success("Order cancellled!");
    } catch (error) {
      toast.error(error.response.data);
    } finally {
      closeModal();
    }
  };

  // handle status change
  const handleStatusChange = async (newStatus) => {
    // if status is same, dont send req
    if (status === newStatus) return;

    // send status update req
    try {
      // update req
      await axiosSecure.patch(`/orders/${_id}`, {
        status: newStatus,
      });

      // call refetch for UI refresh
      refetch();

      toast.success("Status updated");
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  return (
    <motion.tr
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    viewport={{ once: true }} // Animate only once when it enters the viewport
  >
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{name}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{customer?.email}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">${price}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{quantity}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{address}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{status}</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center gap-2">
          <select
            required
            defaultValue={status}
            onChange={(e) => handleStatusChange(e.target.value)}
            disabled={status === "Delivered"}
            className="p-1 border-2 border-lightBlue focus:outline-lightBlue rounded-md text-gray-900 whitespace-no-wrap bg-white"
            name="category"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">Start Processing</option>
            <option value="Delivered">Deliver</option>
          </select>
          <button
            onClick={() => setIsOpen(true)}
            className="relative disabled:cursor-not-allowed cursor-pointer inline-block px-3 py-1 font-semibold text-gray-900 leading-tight"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-lightBlue opacity-50 rounded-full"
            ></span>
            <span className="relative">Cancel</span>
          </button>
        </div>
        <DeleteModal
          handleDelete={handleDelete}
          isOpen={isOpen}
          closeModal={closeModal}
        />
      </td>
    </motion.tr>
  );
};

export default SellerOrderDataRow;

SellerOrderDataRow.propTypes = {
  orderData: PropTypes.object,
  refetch: PropTypes.func,
};
