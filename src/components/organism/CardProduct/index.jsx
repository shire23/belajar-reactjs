import React from "react";
import Button from "../../atoms/Button";

// .map berfungsi membaca data dalam array

export default function CardProduct(props) {
  const { children } = props;
  return (
    <>
      <div className="rounded-lg bg-gradient-to-r from-violet-500 via-blue-500 to-sky-500 p-1 shadow-x1">
        <div className="w-full max-w-xs bg-white rounded-lg">{children}</div>
      </div>
    </>
  );
}

const Header = (props) => {
  const { image, title, children } = props;
  return (
    <div className="flex flex-col">
      <img src={image} alt="{gambar}" className="p-4 " />
      <h5 className="text-3xl font-bold text-slate-900">{title}</h5>
      <p className="mt-3 text-slate-300\ text-base-text-justify">{children}</p>
    </div>
  );
};

const Body = (props) => {
  const { title, children } = props;
  return (
    <>
      <div className=" px-4 ">
        <a href="#">
          <h5 className="text-3xl font-bold text-slate-900 text-center">{title}</h5>
          <p className="mt-3 text-slate-500\ text-base-text-justify">{children}</p>
        </a>
      </div>
    </>
  );
};

const Footer = (props) => {
  const { price } = props;
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
