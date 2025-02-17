import Card from "./Card";
import Container from "../Shared/Container";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../Shared/LoadingSpinner";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const Plants = () => {
  const { data: plants, isLoading } = useQuery({
    queryKey: ["plants"],
    queryFn: async () => {
      // fetch
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/plants`
      );
      return data;
    },
  });

  const text = "Explore Our Green Collection";

  return (
    <Container>
      <Helmet>
        <title>Plants | GreenMind</title>
      </Helmet>

      <div className="text-center mb-12">
        <div>
          {text.split("").map((letter, index) => (
            <motion.span
              key={index}
              className="text-[2rem] font-bold mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
                delay: index * 0.05,
              }}
              viewport={{ once: false, amount: 0.5 }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        <p className="text-lg font-medium text-colorSecondary">
          Discover a variety of vibrant plants to bring nature into your home
        </p>
      </div>

      {isLoading ? (
        <LoadingSpinner />
      ) : plants && plants.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
          {plants.map((plant, index) => (
            <Card key={plant._id} plant={plant} index={index} />
          ))}
        </div>
      ) : (
        <p>No data available</p>
      )}
    </Container>
  );
};

export default Plants;
