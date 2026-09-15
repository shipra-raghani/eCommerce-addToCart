import React, { useEffect } from "react";
import { useState, useContext } from "react";
import QuantityControl from "./QuantityControl";
import api from "../api/axios";

import { useCart } from "../Context/CartContext";
function Products() {
  const { cart, cartValue } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const result = await api.get("/products");
      console.log("result:", result);
      setProducts(result.data);
    }
    getData();
  }, []);
  function trimLength(sample) {
    const words = sample.split(" ");
    return words.length > 4 ? words.slice(0, 2).join(" ") + "..." : sample;
  }
  // function getCart(product) {
  //   setCart([...cart, { ...product, quantity: 1 }]);
  // }
  return (
    <>
      <div id="container">
        <div id="images">
          {products.map((product) => (
            <div className="image" key={product.id}>
              <a href={`/product/${product.id}`}>
                <img src={product.image} alt={product.title} />
              </a>
              <p className="title">{trimLength(product.title)}</p>
              <p className="price">${product.price}</p>
              {cart.some((item) => item.id === product.id) ? (
                <QuantityControl product={product} />
              ) : (
                <button
                  className="addToCart"
                  onClick={() => cartValue(product)}
                >
                  Add To Cart
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
