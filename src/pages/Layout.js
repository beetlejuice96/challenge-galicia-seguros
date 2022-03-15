import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar";

const Layout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet />
    </div>
  );
};

export default Layout;
