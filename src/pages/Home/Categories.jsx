import { LuArrowRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Categories = () => {
  const text = "Categories";

  return (
    <section className="mt-40">
      <div>
        <div className="text-center">
          {text.split("").map((letter, index) => (
            <motion.span
              key={index}
              className="text-[2rem] font-bold mb-3"
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

          <p className="text-colorSecondary font-medium text-lg">
            Find what you are looking for
          </p>
        </div>

        <div className="text-center px-4 flex flex-col sm:flex-row gap-10 justify-center items-center py-10 xl:relative xl:h-[841px] bg-lightBlue mt-24">
          {/* First Card */}
          <motion.div
            className="xl:absolute xl:-top-12 left-[5%] 2xl:left-[12%] hover:scale-105 duration-500 hover:drop-shadow-md ease-in-out"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <img src="/plant-4.png" alt="" />
            <h3 className="text-lg font-bold mt-3">Natural Plants</h3>
          </motion.div>

          {/* Second Card */}
          <motion.div
            className="xl:absolute xl:top-12 xl:left-[37.5%] 2xl:left-[40%] hover:scale-105 duration-500 hover:drop-shadow-md ease-in-out"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <img src="/plant-5.png" alt="" />
            <h3 className="text-lg font-bold mt-3">Plant Accessories</h3>
            <p className="text-colorSecondary text-lg font-medium w-[352px] sm:w-fit lg:w-[352px] mt-3 mb-6">
              Enhance your plants with premium tools and stylish decorative
              pieces.
            </p>
            <Link
              to="/plants"
              className="btn btn-ghost text-lg font-medium bg-white rounded-lg"
            >
              Explore <LuArrowRight />
            </Link>
          </motion.div>

          {/* Third Card */}
          <motion.div
            className="xl:absolute xl:-top-12 right-[5%] 2xl:right-[12%] hover:scale-105 duration-500 hover:drop-shadow-md ease-in-out"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <img src="/plant-6.png" alt="" />
            <h3 className="text-lg font-bold mt-3">Artificial Plants</h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
