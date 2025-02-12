import Marquee from "react-fast-marquee";

const Reviews = () => {
  return (
    <section className="relative overflow-x-hidden">
      <div className="">
        {/* <!-- title container --> */}
        <div className="container mx-auto px-4 flex justify-between items-center mb-10">
          <h1 className="text-[32px] font-bold w-[40%] 2xl:w-2/6">
            What customers say about GREEMIND?
          </h1>
          <img src="icons/vector_dots.png" alt="" />
        </div>

        {/* <!-- horizontal scroll --> */}
        <div className="overflow-hidden relative">
          <Marquee pauseOnClick={true}>
            {/* <!-- card 1 --> */}
            <div className="w-96 sm:w-[800px] h-[400px] sm:h-[330px] bg-lightBlue rounded-xl p-12 relative flex-shrink-0 mx-10">
              <p className="text-lg font-medium text-colorTartiary">
                GreenMind has completely transformed my living space! The plants
                arrived fresh and well-packaged. I especially loved the variety
                and care tips provided. Highly recommended!
              </p>
              <img
                className="absolute bottom-[101px] left-[48px]"
                src="/vector_quote.png"
                alt=""
              />
              <img
                className="absolute bottom-0 left-[13px] h-[150px]"
                src="/reviewer-3.png"
                alt=""
              />
              {/* <!-- designation --> */}
              <div className="absolute bottom-[102px] left-[170px]">
                <h2 className="text-colorPrimary text-lg font-bold">
                  Sarah Ahmed
                </h2>
                <small className="text-colorSecondary text-xs font-medium">
                  Interior Designer
                </small>
              </div>
              {/* <!-- rating --> */}
              <div className="absolute right-12 bottom-[120px] text-colorPrimary text-lg font-bold">
                <i className="fa-solid fa-star"></i> 4.9
              </div>
            </div>

            {/* <!-- card 2 --> */}
            <div className="w-96 sm:w-[800px] h-[400px] sm:h-[330px] bg-lightBlue rounded-xl p-12 relative flex-shrink-0 mx-10">
              <p className="text-lg font-medium text-colorTartiary">
                As someone who spends hours at a desk, I needed low-maintenance
                plants. GreenMind made it easy to find the perfect ones, and
                their service was excellent!
              </p>
              <img
                className="absolute bottom-[101px] left-[48px]"
                src="/vector_quote.png"
                alt=""
              />
              <img
                className="absolute bottom-0 left-[13px] h-[150px]"
                src="/reviewer-4.png"
                alt=""
              />
              {/* <!-- designation --> */}
              <div className="absolute bottom-[102px] left-[170px]">
                <h2 className="text-colorPrimary text-lg font-bold">
                  Rafiq Hasan
                </h2>
                <small className="text-colorSecondary text-xs font-medium">
                  Tech Entrepreneur
                </small>
              </div>
              {/* <!-- rating --> */}
              <div className="absolute right-12 bottom-[120px] text-colorPrimary text-lg font-bold">
                <i className="fa-solid fa-star"></i> 4.5
              </div>
            </div>

            {/* <!-- card 3 --> */}
            <div className="w-96 sm:w-[800px] h-[400px] sm:h-[330px] bg-lightBlue rounded-xl p-12 relative flex-shrink-0 mx-10">
              <p className="text-lg font-medium text-colorTartiary">
                I’ve ordered from multiple plant shops, but GreenMind stands out
                with its quality and customer support. My fiddle leaf fig is
                thriving, and I’ll be back for more!
              </p>
              <img
                className="absolute bottom-[101px] left-[48px]"
                src="/vector_quote.png"
                alt=""
              />
              <img
                className="absolute bottom-0 left-[13px]"
                src="/reviewer-2.png"
                alt=""
              />
              {/* <!-- designation --> */}
              <div className="absolute bottom-[102px] left-[170px]">
                <h2 className="text-colorPrimary text-lg font-bold">
                  Maya Chowdhury
                </h2>
                <small className="text-colorSecondary text-xs font-medium">
                  Freelance Writer
                </small>
              </div>
              {/* <!-- rating --> */}
              <div className="absolute right-12 bottom-[120px] text-colorPrimary text-lg font-bold">
                <i className="fa-solid fa-star"></i> 4.7
              </div>
            </div>

            {/* <!-- card 4 --> */}
            <div className="w-96 sm:w-[800px] h-[400px] sm:h-[330px] bg-lightBlue rounded-xl p-12 relative flex-shrink-0 mx-10">
              <p className="text-lg font-medium text-colorTartiary">
                The plants from GreenMind added the perfect touch of greenery to
                my café. My customers love the fresh vibe, and I appreciate the
                hassle-free delivery!
              </p>
              <img
                className="absolute bottom-[101px] left-[48px]"
                src="/vector_quote.png"
                alt=""
              />
              <img
                className="absolute bottom-0 left-[13px]"
                src="/reviewer-1.png"
                alt=""
              />
              {/* <!-- designation --> */}
              <div className="absolute bottom-[102px] left-[170px]">
                <h2 className="text-colorPrimary text-lg font-bold">Obaid</h2>
                <small className="text-colorSecondary text-xs font-medium">
                  Cafe Owner
                </small>
              </div>
              {/* <!-- rating --> */}
              <div className="absolute right-12 bottom-[120px] text-colorPrimary text-lg font-bold">
                <i className="fa-solid fa-star"></i> 4.5
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
