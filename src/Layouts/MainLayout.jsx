import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"; // if you have one
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
