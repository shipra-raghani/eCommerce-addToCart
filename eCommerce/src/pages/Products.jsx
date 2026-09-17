import { useProducts } from "../contexts/ProductProvider";
import AddToCartButton from "../components/Button";
import Loader from "../components/Loader";
import QuantityControl from "../components/QuantityControl";
import { useCart } from "../contexts/CartContext";
function Products() {
  const { products, loading } = useProducts();
  const { cart } = useCart();
  console.log("PRODUCTS COMPONENT:", products);
  console.log("LOADING:", loading);
  return (
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
  );
}

export default Products;
