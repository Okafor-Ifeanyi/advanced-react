import { Outlet } from "react-router-dom";
import Navbar from "./Nav.";

const Layout = () => {
  return (
    <section className="layout">
      {/* <div className="navbar-wrapper"> */}
        <Navbar />
      {/* </div> */}
      <div className="main-screen">
        <Outlet />
      </div>
      
    </section>
  );
};

export default Layout;
