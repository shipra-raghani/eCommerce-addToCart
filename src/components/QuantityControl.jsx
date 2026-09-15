import React, { useContext } from "react";
import { useOutletContext } from "react-router-dom";
import { useCart } from "../Context/CartContext";

function QuantityControl({ product }) {
  const { cart, decreaseQuantity, increateQuantity } = useCart();

  const existingProduct = cart.find((item) => item.id === product.id);

  return (
    <>
      <div className="addToCart">
        <button className="added">
          <span onClick={() => decreaseQuantity(product)}>-</span>
          <span>{existingProduct?.quantity}</span>
          <span onClick={() => increateQuantity(product)}>+</span>
        </button>
      </div>
    </>
  );
}

export default QuantityControl;
