import { createContext, useContext, useEffect, useState } from "react";
import instance from "../axios.js";

const productContext = createContext({});

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      setLoading(true);
      const response = await instance.get("/product");
      setLoading(false);
      setProducts(response.data);
    } catch (error) {
      setProducts(null);
    }
  }

  return (
    <>
      <productContext.Provider value={{ products, setProducts, loading }}>
        {children}
      </productContext.Provider>
    </>
  );
}

export function useProducts() {
  return useContext(productContext);
}

export default ProductProvider;
