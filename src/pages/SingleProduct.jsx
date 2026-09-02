import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// State changes in batches
function SingleProduct() {
  const [product, setProduct] = useState(null);
  const url = "https://fakestoreapi.com/products";
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

      const response = await fetch(url + "/" + id);

      const result = await response.json();
      console.log(result);

      setProduct(result);
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
          <button className="addToCart">Add to Cart</button>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
