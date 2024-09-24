import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="overflow-hidden bg-third">
      <Navbar />
      <div className="min-h-screen ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
