import { createContext, useContext, useState } from "react";

const cartContext = createContext({});

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function handleAddToCart(){
    
  }

  return (
    <cartContext.Provider
      value={{
        cart,
        setCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export function useCart() {
  return useContext(cartContext);
}

export default CartProvider;
