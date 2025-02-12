import { Helmet } from "react-helmet-async";
import Plants from "../../components/Home/Plants";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> PlantNet | Buy Your Desired Plant</title>
      </Helmet>


    <div className="container mx-auto px-4">
    <Banner/>
    </div>


      <Plants />
    </div>
  );
};

export default Home;
