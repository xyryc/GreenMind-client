import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const BestSelling = () => {
  // Queries
  const { data: topPlants = [] } = useQuery({
    queryKey: ["topPlants"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/top-selling-plants`
      );
      return data;
    },
  });

  return (
    <section className="mx-auto max-w-screen-xl mt-24">
      <div className="flex flex-col xl:flex-row gap-14">
        {/* <!-- Text Content --> */}
        <div className="xl:w-2/12">
          <h2 className="text-[2rem] font-bold">Best Selling Plants</h2>
          <p className="text-colorSecondary text-lg font-medium mt-3 mb-6 w-11/12">
            Easiest way to healthy life by buying your favorite plants
          </p>
          <Link
            to={"/plants"}
            className="btn text-lg font-medium bg-lightBlue rounded-lg"
          >
            See more <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>

        {/* <!-- Card Container --> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* <!-- Card --> */}
          {topPlants.map((plants) => (
            <Link
              key={plants._id}
              to={`/plant/${plants._id}`}
              className="group overflow-hidden"
            >
              <div className="h-[363px] w-full relative overflow-hidden rounded-xl">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-in-out"
                  src={plants.image}
                  alt={plants.name}
                />
              </div>
              <p className="text-lg font-medium mt-3 mb-2">{plants.name}</p>
              <p className="text-colorSecondary text-lg font-medium">
                $ {plants.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
