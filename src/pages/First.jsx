import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import HeaderFile from "../components/Header";
import { useState } from "react";

function First() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <HeaderFile cart={cart} />
      <Outlet context={{ cart, setCart }} />
      <Footer />
    </>
  );
}

export default First;
