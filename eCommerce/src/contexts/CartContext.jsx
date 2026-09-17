import { useState, createContext, useContext } from "react";

const cartContext = createContext();

export function CartContext({ children }) {
  const [cart, setCart] = useState([]);

  function cartValue(product) {
    const existingProduct = cart.find((item) => item._id === product._id);

    if (existingProduct) {
      return;
    }

    setCart([
      ...cart,
      {
        ...product,
        quantity: 1,
      },
    ]);
  }

  function increaseQuantity(product) {
    const updatedCart = cart.map((item) => {
      if (item._id === product._id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }

      return item;
    });

    setCart(updatedCart);
  }

  function decreaseQuantity(product) {
    const updatedCart = cart
      .map((item) => {
        if (item._id === product._id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }

        return item;
      })
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
  }

  return (
    <cartContext.Provider
      value={{
        cart,
        setCart,
        cartValue,
        decreaseQuantity,
        increaseQuantity,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export function useCart() {
  return useContext(cartContext);
}
