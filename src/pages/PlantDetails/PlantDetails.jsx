import Container from "../../components/Shared/Container";
import { Helmet } from "react-helmet-async";
import Button from "../../components/Shared/Button/Button";
import PurchaseModal from "../../components/Modal/PurchaseModal";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import useRole from "../../hooks/useRole";
import useAuth from "../../hooks/useAuth";
import { RiPlantLine } from "react-icons/ri";

const PlantDetails = () => {
  const [role] = useRole();
  const { user } = useAuth();
  const { id } = useParams();
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const {
    data: plant = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["plant", id],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/plants/${id}`
      );
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  const { category, description, image, name, price, quantity, seller } = plant;

  return (
    <Container>
      <Helmet>
        <title>{name} | GreenMind</title>
      </Helmet>

      <div className="flex flex-col max-w-screen-md 2xl:max-w-screen-xl mx-auto md:flex-row justify-center gap-10 p-6 bg-lightBlue rounded-xl">
        {/* image */}
        <div className="h-[70vh] md:w-1/2">
          <img
            className="duration-700 object-cover w-full mx-auto h-full rounded-xl"
            src={image}
            alt="Plant Image"
          />
        </div>

        {/* Plant Info */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1 text-sm mb-1">
              <RiPlantLine /> {category}
            </div>

            <h1 className="text-2xl font-bold mb-2">{name}</h1>

            <p className="font-bold text-3xl text-gray-500 mb-2">${price}</p>

            <div className="text-colorSecondary">
              {description.length > 320
                ? description.slice(0, 320) + "..."
                : description}
            </div>
          </div>

          <div className="flex justify-between items-center gap-4 mt-4">
            <div className="flex flex-col gap-2 font-light text-sm">
              <p>Stock: {quantity} Units Left</p>
              <div className="flex items-center gap-2">
                <img
                  className="w-10 h-10 object-cover rounded-xl"
                  src={seller?.image}
                  alt={seller.name}
                />

                <p className="capitalize">{seller?.name}</p>
              </div>
            </div>

            <div>
              <Button
                outline
                disabled={
                  !user ||
                  user?.email === seller?.email ||
                  role != "customer" ||
                  quantity === 0
                }
                onClick={() => setIsOpen(true)}
                label={`${quantity > 0 ? "Purchase" : "Out Of Stock"}`}
              />
            </div>
          </div>
        </div>

        <PurchaseModal
          plant={plant}
          closeModal={closeModal}
          isOpen={isOpen}
          refetch={refetch}
        />
      </div>
    </Container>
  );
};

export default PlantDetails;
