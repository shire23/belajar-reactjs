import React from "react";
import Button from "../../atoms/Button";
import { Link } from "react-router-dom";

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
      <img src={image} alt="{gambar}" className="p-4 object-contain h-48 w-96 " />
      <h5 className="text-3xl font-bold text-slate-900">{title}</h5>
      <p className="mt-3 text-slate-300 text-base-text-justify">{children}</p>
    </div>
  );
};

const Body = (props) => {
  const { title, children } = props;
  return (
    <>
      <div className=" px-4 flex-row">
        <a href="#">
          <h5 className="text-3xl font-bold text-slate-900 text-center">{title}</h5>
          <p className="mt-3 text-slate-500\ text-base-text-justify">{children}</p>
        </a>
      </div>
    </>
  );
};

const Footer = (props) => {
  const { children } = props;
  return (
    <>
      <div className="flex flex-row p-6 text-center font-bold ">
        {children}
        <Link to=""></Link>
      </div>
    </>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
