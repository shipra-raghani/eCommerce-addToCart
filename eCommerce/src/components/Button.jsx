import { useCart } from "../contexts/CartContext";
function Button({ product }) {
  const { cartValue } = useCart();

  return (
    <div>
      <button
        className="addToCart"
        onClick={() => {
          cartValue(product);
        }}
      >
        Add To Cart
      </button>
    </div>
  );
}

export default Button;
