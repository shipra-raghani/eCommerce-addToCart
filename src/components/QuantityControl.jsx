import React from "react";
import { useOutletContext } from "react-router-dom";

function QuantityControl({ product }) {
  const { cart, setCart } = useOutletContext();

  const existingProduct = cart.find((item) => item.id === product.id);
  function increateQuantity() {
    const updatedCart = cart.map((item) => {
      if (item.id === product.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCart(updatedCart);
  }

  function decreaseQuantity() {
    const updatedCart = cart
      .map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);
    setCart(updatedCart);
  }
  return (
    <>
      <div className="addToCart">
        <button className="added">
          <span onClick={decreaseQuantity}>-</span>
          <span>{existingProduct?.quantity}</span>
          <span onClick={increateQuantity}>+</span>
        </button>
      </div>
    </>
  );
}

export default QuantityControl;
