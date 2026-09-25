import { useProducts } from "../contexts/ProductProvider";
import AddToCartButton from "../components/Button";
import Loader from "../components/Loader";
import QuantityControl from "../components/QuantityControl";
import { useCart } from "../contexts/CartContext";
import { useMemo, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
function Products() {
  // const { products, loading } = useProducts();
  const [searchProduct, setSearchProduct] = useState("");
  const { cart } = useCart();
  // console.log("PRODUCTS COMPONENT:", products);
  // console.log("LOADING:", loading);

  const products = useSelector((state) => {state.products.items;});
  const loading = useSelector((state) => { state.products.loading;});

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  console.log(dispatch);
  console.log(products);
  const filterProduct = useMemo(() => {
    if (!searchProduct) return products;

    return products.filter((product) =>
      product.name.toLowerCase().includes(searchProduct.toLowerCase())
    );
  }, [products, searchProduct]);

  return (
    <>
      <div className="input">
        <input
          type="text"
          id="search"
          placeholder="Search Products"
          value={searchProduct}
          onChange={(e) => {
            setSearchProduct(e.target.value);
          }}
        />
      </div>
      <div className="products">
        {loading ? (
          <Loader />
        ) : filterProduct.length === 0 ? (
          <h1>Product Not Found</h1>
        ) : (
          filterProduct.map((product) => (
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
