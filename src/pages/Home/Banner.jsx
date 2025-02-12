import { LuSearch } from "react-icons/lu";

const Banner = () => {
  return (
    <section>
      <div className="bg-lightBlue rounded-3xl flex">
        <div className="p-6 sm:pt-12 sm:pl-12 mb-10 xl:mb-32">
          <h1 className="text-[3.9rem] 2xl:text-[4rem] font-extrabold text-black capitalize">
            Buy your dream plants
          </h1>

          <div className="inline-flex justify-center items-center gap-12 mb-12 mt-6">
            <div>
              <h3 className="text-[2rem] font-medium">50+</h3>
              <p className="text-lg font-medium">Plant Species</p>
            </div>

            <div className="h-16 w-[1px] bg-colorPrimary"></div>

            <div>
              <h3 className="text-[2rem] font-medium">100+</h3>
              <p className="text-lg font-medium">Customers</p>
            </div>
          </div>

          <div className="flex sm:w-[449px] rounded-xl bg-white">
            <input
              className="w-full border-none bg-transparent p-[18px] outline-none"
              type="text"
              placeholder="What are you looking for?"
            />
            <span className="hover:scale-105 hover:bg-slate-300 duration-300 ease-in-out p-[14px] bg-[#C1DCDC] m-2 rounded-xl cursor-pointer">
              <LuSearch />
            </span>
          </div>
        </div>

        <div className="hidden xl:block relative w-full">
          <img
            className="absolute right-6 top-3"
            src="/rounded_arrow.png"
            alt=""
          />
          <img
            className="absolute bottom-12 left-14"
            src="/rounded_arrow-2.png"
            alt=""
          />
          <img
            className="absolute bottom-0 right-16"
            src="/bg_round.png"
            alt=""
          />
          <img
            className="absolute bottom-0 right-14"
            src="/unsplash_bg_plant.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
