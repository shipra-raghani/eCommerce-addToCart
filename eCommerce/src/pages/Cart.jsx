import { useCart } from "../contexts/CartContext";
import QuantityControl from "../components/QuantityControl";

function Cart() {
  const { cart } = useCart();
  if (cart === null || cart.length === 0) {
    return (
      <>
        <div className="emptyContainer">
          <div className="emptyCart">
            <h1>Your Cart is Empty!🥺</h1>
            <p>Start shopping and add something you love!🥳</p>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="mainCart">
      <div className="cartBox">
        {cart.map((item) => (
          <div className="cartProduct" key={item._id}>
            <div className="cartContainer">
              <img id="singleCartImage" src={item.url} alt={item.name} />
            </div>

            <div className="cartWrapper">
              <h1 id="cartHead">{item.name}</h1>
              <h2 id="cartPrice">${item.price}</h2>
              <QuantityControl product={item} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
