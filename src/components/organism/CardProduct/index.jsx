import React from "react";
import Button from "../../atoms/Button";
import { Link } from "react-router-dom";

// .map berfungsi membaca data dalam array

export default function CardProduct(props) {
  const { children } = props;
  return (
    <>
      <div className="rounded-lg bg-gradient-to-r from-violet-500 via-blue-500 to-sky-500 p-1 shadow-x1">
        <div className="w-96 h-[] bg-white rounded-lg">{children}</div>
      </div>
    </>
  );
}

const Header = (props) => {
  const { image, id } = props;
  return (
    <Link to={`/product/${id}`}>
      <div className="overflow-y-hidden text-clip h-80">
        <img src={image} alt="{gambar}" className="px-28 py-10 rounded-t-lg " />
      </div>
    </Link>
  );
};

const Body = (props) => {
  const { title, children } = props;
  return (
    <>
      <div className=" px-4 ">
        <a href="#">
          <h5 className="overflow-y truncate text-3xl px-4 font-bold text-black">{title}</h5>
          <div className="overflow-y-hidden text-clip h-24">
            <p className="mt-3 text-slate-500\ text-base-text-justify">{children}</p>
          </div>
        </a>
      </div>
    </>
  );
};

const Footer = (props) => {
  const { price, handleToCart, id } = props;
  return (
    <div className="flex flex-col p-6 text-center font-bold ">
      <span> price : {price?.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</span>
    </div>
  );
};

const Beli = (props) => {
  const { handleToCart, id } = props;
  return (
    <div className="flex flex-col p-6 mt-[-50px] text-center font-bold ">
      <Button size="w-full color=bg-blue-500 " onClick={() => handleToCart(id)}>
        Beli
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
CardProduct.Beli = Beli;
