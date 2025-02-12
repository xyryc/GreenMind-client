import { Helmet } from "react-helmet-async";
import Plants from "../../components/Home/Plants";
import Banner from "./Banner";
import About from "./About";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> PlantNet | Buy Your Desired Plant</title>
      </Helmet>

      <div className="container mx-auto px-4 space-y-28">
        <Banner />

        <About />
      </div>

      

      {/* <Plants /> */}
    </div>
  );
};

export default Home;
