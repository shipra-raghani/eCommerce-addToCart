import React, { useState } from "react";
import { useOutletContext, Link } from "react-router-dom";
import QuantityControl from "../components/QuantityControl";

function Cart() {
  const { cart, setCart } = useOutletContext();
  const [orderPlaced, setOrderPlaced] = useState(false);
  console.log("showCart", cart);

  //Order Placed
  if (orderPlaced) {
    return (
      <div className="mainOrderPlaced">
        <div className="orderPlaced">
          <h2>Order Placed 🎉</h2>
          <Link to="/">Continue Shopping!🛒</Link>
        </div>
      </div>
    );
  }

  if (cart === null || cart.length === 0) {
    return (
      <>
        <div className="emptyContainer">
          <div className="emptyCart">
            <h1>Your Cart is Empty!🥺</h1>
            <p>Start shopping and add something you love!🥳</p>
          </div>
        </div>
      </>
    );
  }

  function proceedToBuy() {
    setOrderPlaced(true);
    setCart([]);
  }

  return (
    <>
      {!orderPlaced && (
        <div className="mainCart">
          <div className="cartBox">
            {cart.map((item) => (
              <div className="cartProduct" key={item.id}>
                <div className="cartContainer">
                  <img id="singleCartImage" src={item.image} alt={item.title} />
                </div>

                <div className="cartWrapper">
                  <h1 id="cartHead">{item.title}</h1>
                  <h2 id="cartPrice">${item.price}</h2>
                  <QuantityControl product={item} />
                </div>
              </div>
            ))}
          </div>

          <div className="totalProducts">
            <h3>Yaya!Your Products🥳</h3>
            <p>
              Subtotal<span className="subtotalItems"></span>: $
              <span className="subtotalPrice">
                {cart
                  .reduce((sum, item) => (sum += item.price * item.quantity), 0)
                  .toFixed(2)}
              </span>
            </p>
            <input
              type="text"
              name="discount"
              id="discount"
              placeholder="Enter the coupan"
            />
            <button className="proceedTo" onClick={proceedToBuy}>
              Proceed To Buy
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
