import PropTypes from "prop-types";
import { useState } from "react";
import DeleteModal from "../../Modal/DeleteModal";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";

const CustomerOrderDataRow = ({ order, refetch }) => {
  const axiosSecure = useAxiosSecure();
  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  const { image, name, category, price, quantity, status, _id, plantId } =
    order;

  // handle order delete/ cancellation
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

  return (
    <motion.tr
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    viewport={{ once: true }} // Animate only once when it enters the viewport
  >
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="block relative">
              <img
                alt={name}
                src={image}
                className="mx-auto object-cover rounded h-10 w-10"
              />
            </div>
          </div>
        </div>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{name}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{category}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">${price}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{quantity}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{status}</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button
          onClick={() => setIsOpen(true)}
          className="relative disabled:cursor-not-allowed cursor-pointer inline-block px-3 py-1 font-semibold leading-tight text-gray-800"
        >
          <span className="absolute cursor-pointer inset-0 bg-lightBlue opacity-50 rounded-full"></span>
          <span className="relative cursor-pointer">Cancel</span>
        </button>

        <DeleteModal
          isOpen={isOpen}
          closeModal={closeModal}
          handleDelete={handleDelete}
        />
      </td>
    </motion.tr>
  );
};

CustomerOrderDataRow.propTypes = {
  order: PropTypes.object,
  refetch: PropTypes.func,
};

export default CustomerOrderDataRow;
