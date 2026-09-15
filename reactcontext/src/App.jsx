import { createBrowserRouter, RouterProvider } from "react-router-dom";
import First from "./pages/First";
import Home from "./pages/Home";
import ProductProvider from "./contexts/ProductProvider";
import CartProvider from "./contexts/CartProvider";
import AuthProvider from "./contexts/AuthProvider";
import "./style.css";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <First />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <ProductProvider>
          <RouterProvider router={routes}></RouterProvider>
        </ProductProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
