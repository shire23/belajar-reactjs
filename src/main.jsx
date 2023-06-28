import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import TambahData from "./pages/tambahData";
import EditData from "./pages/edit";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/tambahdata",
    element: <TambahData />,
  },
  {
    path: "/editdata/:id",
    element: <EditData />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
