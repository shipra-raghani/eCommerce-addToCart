import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
function Header() {
  const { cart } = useCart();
  return (
    <>
      <header>
        <h1>
          <Link to="/">Ecommerce</Link>
        </h1>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <div className="cartValue">
              <Link to="/cart">
                <i className="fa-solid fa-cart-shopping"></i>
                <p className="numberInCart">{cart.length}</p>
              </Link>
            </div>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
