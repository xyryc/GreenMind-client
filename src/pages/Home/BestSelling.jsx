import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import { motion } from "framer-motion";

const BestSelling = () => {
  // Queries
  const { data: topPlants = [], isLoading } = useQuery({
    queryKey: ["topPlants"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/top-selling-plants`
      );
      return data;
    },
  });

  const text = "Best Selling Plants";

  return (
    <section className="mx-auto max-w-screen-xl mt-24">
      <div className="flex flex-col xl:flex-row gap-14">
        {/* <!-- Text Content --> */}
        <div className="xl:w-2/12">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                className="text-[2rem] font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.05,
                }}
                viewport={{ once: false, amount: 0.5 }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

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
        {isLoading ? (
          <div className="w-full mx-auto">
            <LoadingSpinner />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* <!-- Card --> */}
            {topPlants.map((plants, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <Link
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
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BestSelling;
