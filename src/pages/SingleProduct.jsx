import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import QuantityControl from "../components/QuantityControl";
import { useCart } from "../Context/CartContext";
import api from "../api/axios";
// State changes in batches
function SingleProduct() {
  const { cart, cartValue } = useCart();
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  console.log("id:", id);
  useEffect(() => {
    // const params = new URLSearchParams(window.location.search);
    // console.log("params:", params);
    // const id = params.get("id");
    async function getSingleProduct() {
      if (Number(id) > 20 || isNaN(Number(id))) {
        setProduct(false);
        return;
      }
      const data = await api.get("/products/" + id);

      console.log("====================================");
      console.log(data.data);
      console.log("====================================");

      setProduct(data.data);
    }
    getSingleProduct();
  }, []);

  if (product === null) {
    return <h2>Loading...</h2>;
  }

  if (product === false) {
    return (
      <div className="notFound">
        <h2>Sorry This Product Doesn't Exist! 😕</h2>
      </div>
    );
  }

  return (
    <>
      <div className="product">
        <div className="container">
          <img id="singleImage" src={product.image} alt={product.title} />
        </div>
        <div className="wrapper">
          <h1 id="head">{product.title}</h1>
          <h2 id="singleprice">${product.price}</h2>
          <p id="description">{product.description}</p>
          <h3 id="category">{product.category}</h3>
          <h3 id="rating">⭐ {product.rating.rate}</h3>
          {cart.some((item) => item.id === product.id) ? (
            <QuantityControl product={product} />
          ) : (
            <button className="addToCart" onClick={() => cartValue(product)}>
              Add To Cart
            </button>
          )}{" "}
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
