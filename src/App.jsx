import "./App.css";
import HeaderFile from "./components/Header";
import Footer from "./components/Footer";
import "./media.css";
import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import SingleProduct from "./pages/SingleProduct";
import NotFound from "./pages/NotFound";
import First from "./pages/First";
import Cart from "./pages/Cart";
import {CartContext} from "./Context/CartContext";

let router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <First />
      </>
    ),
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: "/about",
        element: (
          <>
            <About />
          </>
        ),
      },
      {
        path: "/product/:id",
        element: (
          <>
            <SingleProduct />
          </>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
function App() {
  return (
    <>
    <CartContext>
      <RouterProvider router={router}></RouterProvider>
      </CartContext>
    </>
  );
}

export default App;
