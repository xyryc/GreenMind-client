import Card from "./Card";
import Container from "../Shared/Container";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../Shared/LoadingSpinner";
import { Helmet } from "react-helmet-async";

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

  if (isLoading) return <LoadingSpinner />;
  // console.log(plants);

  return (
    <Container>
      <Helmet>
        <title>Plants | GreenMind</title>
      </Helmet>

      {plants && plants.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {plants.map((plant) => (
            <Card key={plant._id} plant={plant} />
          ))}
        </div>
      ) : (
        <p>No data available</p>
      )}
    </Container>
  );
};

export default Plants;
