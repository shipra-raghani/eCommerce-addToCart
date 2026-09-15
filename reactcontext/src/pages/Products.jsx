import { useCart } from "../contexts/CartProvider";

function Products({ products }) {
  const { handleAddToCart } = useCart();
  return products.map((product) => {
    return (
      <div key={product._id} className="product">
        <div className="photos">
          <img src={product.url} alt={product.name} />
        </div>
        <div className="content">
          <h3>{product.name}</h3>
          <p className="price">{product.price}</p>
          <button onClick={() => handleAddToCart(product._id)}>
            Add to cart
          </button>
        </div>
      </div>
    );
  });
}

export default Products;
