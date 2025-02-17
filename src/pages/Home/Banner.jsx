import { LuSearch } from "react-icons/lu";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Counter = ({ from, to }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let start = from;
    const end = to;
    if (start === end) return;

    const increment = Math.ceil((end - start) / 100);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, 20);

    return () => clearInterval(timer);
  }, [from, to]);

  return <span>{count}+</span>;
};

const Banner = () => {
  const text = "Buy your dream plants";

  return (
    <section>
      <div className="bg-lightBlue rounded-3xl flex">
        <div className="p-6 sm:pt-12 sm:pl-12 mb-10 xl:mb-32 h-fit">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                className="text-[3.8rem] 2xl:text-[4rem] font-extrabold text-black capitalize"
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

          {/* Stats Section with Count-Up Effect */}
          <div className="inline-flex justify-center items-center gap-12 mb-12 mt-6">
            <div>
              <h3 className="text-[2rem] font-medium">
                <Counter from={0} to={70} />
              </h3>
              <p className="text-lg font-medium">Plant Species</p>
            </div>

            <div className="h-16 w-[1px] bg-colorPrimary"></div>

            <div>
              <h3 className="text-[2rem] font-medium">
                <Counter from={0} to={100} />
              </h3>
              <p className="text-lg font-medium">Customers</p>
            </div>
          </div>

          <div>
            <Link to="/plants" className="btn btn-wide">
              Buy Now
            </Link>
          </div>

          <div className="flex sm:w-[449px] rounded-xl bg-white hidden">
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
          <motion.img
            className="absolute right-6 top-3"
            src="/rounded_arrow.png"
            alt=""
            animate={{ y: [0, -10, 0] }} // Bouncing effect
            transition={{
              duration: 2.2, // Smooth timing
              repeat: Infinity, // Keeps bouncing
              ease: "easeInOut",
            }}
          />
          <motion.img
            className="absolute bottom-12 left-14"
            src="/rounded_arrow-2.png"
            alt=""
            animate={{ x: [0, -10, 0] }}
            transition={{
              duration: 2.5, // Slightly different timing for natural feel
              repeat: Infinity,
              ease: "easeInOut",
            }}
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

Counter.propTypes = {
  from: PropTypes.number.isRequired,
  to: PropTypes.number.isRequired,
};
