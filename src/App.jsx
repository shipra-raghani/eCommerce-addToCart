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
      <RouterProvider router={router}></RouterProvider>

      {/* <div className="main">
        <HeaderFile />
        {id ? <SingleProduct /> : <Products />}
        <Footer />
      </div> */}
    </>
  );
}

export default App;
