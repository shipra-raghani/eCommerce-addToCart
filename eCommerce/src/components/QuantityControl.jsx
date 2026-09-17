import { useCart } from "../contexts/CartContext";
function QuantityControl({ product }) {
  const { cart, decreaseQuantity, increaseQuantity } = useCart();

  const existingProduct = cart.find((item) => item._id === product._id);

  return (
    <>
      <div className="addToCart">
        <button className="added">
          <span onClick={() => decreaseQuantity(product)}>-</span>
          <span>{existingProduct?.quantity}</span>
          <span onClick={() => increaseQuantity(product)}>+</span>
        </button>
      </div>
    </>
  );
}

export default QuantityControl;
