import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import RegisterPage from "./pages/register.jsx";
// import Login from "./components/organism/Login/index.jsx";
import LoginPage from "./pages/login.jsx";
import ProductPage from "./pages/product.jsx";
import ProductSale from "./pages/product-sale.jsx";
import DashboardPage from "./pages/dashboard-page";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  },
  {
    path: "/product-sale",
    element: <ProductSale />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
