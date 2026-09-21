import "./style.css";
import ProductProvider from "./contexts/ProductProvider";
import First from "./pages/First";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartContext } from "./contexts/CartContext";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <First />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <CartContext>
        <ProductProvider>
          <RouterProvider router={routes}></RouterProvider>
        </ProductProvider>
      </CartContext>
    </div>
  );
}

export default App;
