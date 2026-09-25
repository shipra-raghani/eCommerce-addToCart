import "./style.css";
import First from "./pages/First";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartContext } from "./contexts/CartContext";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";

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
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <CartContext>
        <RouterProvider router={routes}></RouterProvider>
      </CartContext>
    </div>
  );
}

export default App;
