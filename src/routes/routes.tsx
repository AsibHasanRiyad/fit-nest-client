import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import MainLayout from "../components/layout/MainLayout";
import Products from "@/pages/Products";
import ProductDetails from "@/pages/ProductDetails";
import Checkout from "@/pages/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

export default router;
