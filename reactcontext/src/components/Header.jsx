import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartProvider";

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
            <Link to="/cart">
              Cart <span className="cartLength">{cart.length}</span>
            </Link>
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
