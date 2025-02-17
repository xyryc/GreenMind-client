import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";
import ScrollToTop from "../components/Shared/ScrollToTop";
const MainLayout = () => {
  return (
    <div className="bg-white font-Poppins text-colorPrimary">
      <Navbar />

      <ScrollToTop />
      <div className="py-24 min-h-[calc(100vh-68px)]">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
