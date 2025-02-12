import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-lightBlue">
      <div className="mx-auto max-w-screen-xl py-12 flex flex-col md:flex-row gap-10 px-6 justify-between md:items-center">
        {/* <!-- left --> */}
        <div>
          <div className="w-48">
            <h3 className="font-Quella text-black font-normal text-lg">
              GREENMIND
            </h3>
            <p className="text-lg text-colorSecondary font-medium my-5">
              We help you find your dream plant
            </p>
            {/* <!-- socials  try: grid-flow-col --> */}
            <div className="grid grid-cols-3 justify-center place-items-center gap-6">
              <span className="p-4 border border-colorSecondary rounded-full cursor-pointer">
                <FaFacebookF />
              </span>
              <span className="p-4 border border-colorSecondary rounded-full cursor-pointer">
                <FaInstagram />
              </span>
              <span className="p-4 border border-colorSecondary rounded-full cursor-pointer">
                <FaTwitter />
              </span>
            </div>
          </div>
          <p className="mt-24 text-lg text-colorSecondary font-medium">
            &copy; 2024 - {new Date().getFullYear()} All Right Reserved
          </p>
        </div>

        {/* <!-- right --> */}
        <div className="flex flex-col sm:flex-row gap-12">
          {/* <!-- container 1 --> */}
          <div className="flex flex-col gap-6">
            <a className="text-lg font-bold" href="">
              Information
            </a>
            <a className="text-lg font-normal text-colorSecondary" href="">
              About
            </a>
            <a className="text-lg font-normal text-colorSecondary" href="">
              Product
            </a>
            <a className="text-lg font-normal text-colorSecondary" href="">
              Blog
            </a>
          </div>

          {/* <!-- Container 2 --> */}
          <div className="flex flex-col gap-6">
            <a className="text-lg font-bold" href="">
              Company
            </a>
            <a className="text-lg font-normal text-colorSecondary" href="">
              Community
            </a>
            <a className="text-lg font-normal text-colorSecondary" href="">
              Career
            </a>
            <a className="text-lg font-normal text-colorSecondary" href="">
              Our story
            </a>
          </div>

          {/* <!-- Container 3 --> */}
          <div className="flex flex-col gap-6">
            <a className="text-lg font-bold" href="">
              Contact
            </a>
            <a className="text-lg font-normal text-colorSecondary" href="">
              Getting Started
            </a>
            <a className="text-lg font-normal text-colorSecondary" href="">
              Pricing
            </a>
            <a className="text-lg font-normal text-colorSecondary" href="">
              Resources
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
