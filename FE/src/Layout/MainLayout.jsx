import React from "react";
import Navbar from "../Components/UserNavbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/UserFooter/Footer";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
