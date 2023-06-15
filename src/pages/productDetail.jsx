import React from "react";
import Navbar from "../components/organism/Navbar";
import Footer from "../components/organism/Footer";
import logo from "../../public/images/bg6.jpg";
import ProductDetail from "../components/molecules/ProductDetail";

export default function productDetail() {
  return (
    <div>
      <Navbar />

      <ProductDetail />

      <Footer />
    </div>
  );
}
