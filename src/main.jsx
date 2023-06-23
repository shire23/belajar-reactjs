import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import RegisterPage from "./pages/register.jsx";
import Login from "./components/organism/Login/index.jsx";
import LoginPage from "./pages/login.jsx";
import ProductPage from "./pages/product.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Counter from "./belajar/Lifecycle/Counter/index.jsx";
import { ProfilePage } from "./pages/profile.jsx";
import DetailProductPage from "./pages/detailProduct.jsx";
import MemesPage from "./pages/memes.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Counter />,
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
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/product/:id",
    element: <DetailProductPage />,
  },
  {
    path: "/memes",
    element: <MemesPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
