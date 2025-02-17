import { motion } from "framer-motion";

const About = () => {
  const text = "About Us";

  return (
    <section className="mx-auto max-w-screen-xl">
      <div className="text-center mb-12">
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

        <p className="text-lg font-medium text-colorSecondary">
          Order now and appreciate the beauty of nature
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 justify-self-center">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.1,
          }}
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-col items-center text-center max-w-96"
        >
          <div className="w-24 h-24 bg-lightBlue rounded-full flex justify-center items-center">
            <img src="/about-1.png" alt="" />
          </div>
          <h3 className="text-black text-lg font-bold mt-6 mb-3">
            Large Assortment
          </h3>
          <p className="text-colorSecondary text-lg font-medium">
            we offer many different types of products with fewer variations in
            each category.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.3,
          }}
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-col items-center text-center max-w-96"
        >
          <div className="w-24 h-24 bg-lightBlue rounded-full flex justify-center items-center">
            <img src="/about-2.png" alt="" />
          </div>
          <h3 className="text-black text-lg font-bold mt-6 mb-3">
            Fast & Free Shipping
          </h3>
          <p className="text-colorSecondary text-lg font-medium">
            4-day or less delivery time, free shipping and an expedited delivery
            option.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.5,
          }}
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-col items-center text-center max-w-96"
        >
          <div className="w-24 h-24 bg-lightBlue rounded-full flex justify-center items-center">
            <img src="/about-3.png" alt="" />
          </div>
          <h3 className="text-black text-lg font-bold mt-6 mb-3">
            24/7 Support
          </h3>
          <p className="text-colorSecondary text-lg font-medium">
            answers to any business related inquiry 24/7 and in real-time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
