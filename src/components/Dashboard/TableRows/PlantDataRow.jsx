import { useState } from "react";
import DeleteModal from "../../Modal/DeleteModal";
import UpdatePlantModal from "../../Modal/UpdatePlantModal";
import PropTypes from "prop-types";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const PlantDataRow = ({ refetch, plant }) => {
  let [isOpen, setIsOpen] = useState(false);
  const axiosSecure = useAxiosSecure();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const { category, image, name, price, quantity, _id } = plant || {};

  const handlePlantDelete = async () => {
    try {
      await axiosSecure.delete(`/plants/${_id}`);
      toast.success("Plant deleted successfully");
      refetch();
    } catch (error) {
      console.log(error);
      toast.error(error.response.data);
    } finally {
      setIsOpen(false);
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
                className="mx-auto object-cover rounded h-14 w-14"
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
        <span
          onClick={openModal}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-gray-700 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">Delete</span>
        </span>
        <DeleteModal
          isOpen={isOpen}
          closeModal={closeModal}
          handleDelete={handlePlantDelete}
        />
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span
          onClick={() => setIsEditModalOpen(true)}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-gray-700 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-lightBlue opacity-50 rounded-full"
          ></span>
          <span className="relative">Update</span>
        </span>
        <UpdatePlantModal
          isOpen={isEditModalOpen}
          setIsEditModalOpen={setIsEditModalOpen}
        />
      </td>
    </motion.tr>
  );
};

export default PlantDataRow;

PlantDataRow.propTypes = {
  refetch: PropTypes.func.isRequired,
  plant: PropTypes.shape({
    category: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
  }).isRequired,
};
