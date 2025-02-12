const About = () => {
  return (
    <section className="mx-auto max-w-screen-xl">
      <div className="text-center mb-12">
        <h2 className="text-[2rem] font-bold mb-3">About Us</h2>
        <p className="text-lg font-medium text-colorSecondary">
          Order now and appreciate the beauty of nature
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 justify-self-center">
        <div className="flex flex-col items-center text-center max-w-96">
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
        </div>

        <div className="flex flex-col items-center text-center max-w-96">
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
        </div>

        <div className="flex flex-col items-center text-center max-w-96">
          <div className="w-24 h-24 bg-lightBlue rounded-full flex justify-center items-center">
            <img src="/about-3.png" alt="" />
          </div>
          <h3 className="text-black text-lg font-bold mt-6 mb-3">
            24/7 Support
          </h3>
          <p className="text-colorSecondary text-lg font-medium">
            answers to any business related inquiry 24/7 and in real-time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
