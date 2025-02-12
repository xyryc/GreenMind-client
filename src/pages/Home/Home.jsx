import { Helmet } from "react-helmet-async";
import Plants from "../../components/Home/Plants";
import Banner from "./Banner";
import About from "./About";
import Categories from "./Categories";
import Reviews from "./Reviews";
import BestSelling from "./BestSelling";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>GreenMind</title>
      </Helmet>

      <div className="container mx-auto px-4 space-y-28">
        <Banner />

        <BestSelling />

        <About />
      </div>

      <div className="space-y-24">
        <Categories />

        <Reviews />
      </div>
    </div>
  );
};

export default Home;
