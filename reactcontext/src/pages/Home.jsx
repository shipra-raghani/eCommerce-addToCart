import Loader from "../components/Loader";
import Products from "../pages/Products";
import { useProducts } from "../contexts/ProductProvider";

function Home() {
  const { products, loading } = useProducts();
  console.log("loading", loading);
  return (
    <section id="products">
      {loading ? <Loader /> : <Products products={products} />}
    </section>
  );
}

export default Home;
