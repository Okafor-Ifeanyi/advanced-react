import { Outlet } from "react-router-dom";
import Navbar from "./nav.component";

const Layout = () => {
  return (
    <section className="layout">
      <div className="main-screen">
        <Outlet />
      </div>
      <div className="navbar-wrapper">
        <Navbar />
      </div>
    </section>
  );
};

export default Layout;
