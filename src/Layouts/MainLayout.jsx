import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="pt-20">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
