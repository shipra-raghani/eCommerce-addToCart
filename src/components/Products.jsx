import React, { useEffect } from "react";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import QuantityControl from "./QuantityControl";

function Products() {
  const { cart, setCart } = useOutletContext();
  const [products, setProducts] = useState([]);
  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      const result = await response.json();
      // console.log("result:", result);
      setProducts(result);
    }
    getData();
  }, []);
  function trimLength(sample) {
    const words = sample.split(" ");
    return words.length > 4 ? words.slice(0, 2).join(" ") + "..." : sample;
  }
  function getCart(product) {
    setCart([...cart, { ...product, quantity: 1 }]);
  }
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
                <button className="addToCart" onClick={() => getCart(product)}>
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
