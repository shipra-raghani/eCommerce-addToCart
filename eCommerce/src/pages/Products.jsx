import { useProducts } from "../contexts/ProductProvider";
import AddToCartButton from "../components/Button";
import Loader from "../components/Loader";
import QuantityControl from "../components/QuantityControl";
import { useCart } from "../contexts/CartContext";
import { useMemo, useState } from "react";
function Products() {
  const { products, loading } = useProducts();
  const [searchProduct, setSearchProduct] = useState("");
  const { cart } = useCart();
  // console.log("PRODUCTS COMPONENT:", products);
  // console.log("LOADING:", loading);

  const filterProduct = useMemo(() => {
    if (!searchProduct) products;
    return products.filter((product) => {
      product.name.toLowerCase().includes(searchProduct.toLowerCase());
    });
  }, [products, searchProduct]);
  console.log(filterProduct);

  return (
    <>
      <input
        type="text"
        id="search"
        placeholder="Search Products"
        value={searchProduct}
        onChange={(e) => {
          setSearchProduct(e.target.value);
        }}
      />
      <div className="products">
        {loading ? (
          <Loader />
        ) : (
          products.map((product) => (
            <div key={product._id} className="product">
              <div className="photos">
                <img src={product.url} alt={product.name} />
              </div>
              <div className="content">
                <h3>{product.name}</h3>
                <p className="price">{product.price}</p>
                {cart.some((item) => item._id === product._id) ? (
                  <QuantityControl product={product} />
                ) : (
                  <AddToCartButton product={product} />
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Products;
