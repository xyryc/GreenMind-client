import { LuArrowRight } from "react-icons/lu";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <section className="mt-40">
      <div>
        <div className="text-center">
          <h1 className="text-[2rem] font-bold mb-3">Categories</h1>
          <p className="text-colorSecondary font-medium text-lg">
            Find what you are looking for
          </p>
        </div>

        <div className="text-center px-4 flex flex-col sm:flex-row gap-10 justify-center items-center py-10 xl:relative xl:h-[841px] bg-lightBlue mt-24">
          <div className="xl:absolute xl:-top-12 left-[5%] 2xl:left-[12%] hover:scale-105 duration-500 hover:drop-shadow-md ease-in-out">
            <img src="/plant-4.png" alt="" />
            <h3 className="text-lg font-bold mt-3">Natural Plants</h3>
          </div>

          <div className="xl:absolute xl:top-12 xl:left-[37.5%] 2xl:left-[40%] hover:scale-105 duration-500 hover:drop-shadow-md ease-in-out">
            <img src="/plant-5.png" alt="" />
            <h3 className="text-lg font-bold mt-3">Plant Accessories</h3>
            <p className="text-colorSecondary text-lg font-medium w-[352px] sm:w-fit lg:w-[352px] mt-3 mb-6">
              Horem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Link to="/plants" className="btn btn-ghost text-lg font-medium bg-white rounded-lg ">
              Explore <LuArrowRight />
            </Link>
          </div>

          <div className="xl:absolute xl:-top-12 right-[5%] 2xl:right-[12%] hover:scale-105 duration-500 hover:drop-shadow-md ease-in-out">
            <img src="/plant-6.png" alt="" />
            <h3 className="text-lg font-bold mt-3">Artificial Plants</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
