import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import HeaderFile from "../components/Header";
import { useState } from "react";

function First() {
  return (
    <>
      <HeaderFile/>
      <Outlet />
      <Footer />
    </>
  );
}

export default First;
