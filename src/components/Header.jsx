import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

function HeaderFile() {
  const { cart } = useCart();
  const [showMenu, setShowMenu] = useState(false);
  function handleMenu() {
    setShowMenu(true);
  }
  function handleClose() {
    setShowMenu(false);
  }
  function getCartValue() {
    const value = cart.length;
    return value;
  }
  return (
    <>
      <header>
        <h1>
          <Link to="/">Ecommerce</Link>
        </h1>

        <main>
          <button className="icon" onClick={handleMenu}>
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className={showMenu ? "newList" : "list"}>
            <button className="closeIcon" onClick={handleClose}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>

              <li className="dropdownMain">
                <Link to="#">Categories</Link>

                <ul className="dropdown">
                  <li>
                    <Link to="#">Category 1</Link>
                  </li>
                  <li>
                    <Link to="#">Category 2</Link>
                  </li>
                  <li>
                    <Link to="#">Category 3</Link>
                  </li>
                  <li>
                    <Link to="#">Category 4</Link>
                  </li>
                </ul>
              </li>
              <li className="dropdownMain">
                <Link to="#">Our Stores</Link>

                <ul className="dropdown">
                  <li>
                    <Link to="#">Store 1</Link>
                  </li>
                  <li>
                    <Link to="#">Store 2</Link>
                  </li>
                  <li>
                    <Link to="#">Store 3</Link>
                  </li>
                  <li>
                    <Link to="#">Store 4</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
          <div className="cartValue">
            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping"></i>
              <p className="numberInCart">{getCartValue()}</p>
            </Link>
          </div>
        </main>
      </header>
    </>
  );
}

export default HeaderFile;
