import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

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
            <span className="text-lg font-bold">Information</span>
            <Link to="/" className="text-lg font-normal text-colorSecondary">
              Home
            </Link>
            <Link
              to="/plants"
              className="text-lg font-normal text-colorSecondary"
            >
              Plants
            </Link>
            <Link
              to="/dashboard"
              className="text-lg font-normal text-colorSecondary"
            >
              Dashboard
            </Link>
          </div>

          {/* <!-- Container 2 --> */}
          <div className="flex flex-col gap-6">
            <span className="text-lg font-bold">Seller</span>
            <Link
              to="/dashboard/add-plant"
              className="text-lg font-normal text-colorSecondary"
            >
              Plant
            </Link>
            <Link
              to="/dashboard/my-inventory"
              className="text-lg font-normal text-colorSecondary"
              href=""
            >
              Inventory
            </Link>
            <Link
              to="/dashboard/manage-orders"
              className="text-lg font-normal text-colorSecondary"
            >
              Orders
            </Link>
          </div>

          {/* <!-- Container 3 --> */}
          <div className="flex flex-col gap-6">
            <span className="text-lg font-bold" href="">
              Profile
            </span>
            <Link
              to="/login"
              className="text-lg font-normal text-colorSecondary"
              href=""
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-lg font-normal text-colorSecondary"
              href=""
            >
              Sign Up
            </Link>
            <Link
              to="/dashboard/profile"
              className="text-lg font-normal text-colorSecondary"
            >
              Profile
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
