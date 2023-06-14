import React from "react";
import CardProduct from "../components/organism/CardProduct";

const data = [
  {
    id: 1,
    image: "public/images/bg3.jpg",
    title: "Keyboard",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, animi quam quasi placeat distinctio voluptatem repellat",
    price: "150.000",
  },
  {
    id: 2,
    image: "public/images/bg3.jpg",
    title: " Keyboard",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, animi quam quasi placeat distinctio voluptatem repellat",
    price: "200.000",
  },
];

export default function ProductPage() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <CardProduct>
          <CardProduct.Header image="public/images/bg3.jpg" />
          <CardProduct.Body title="Keyboard">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, animi quam quasi placeat distinctio
            voluptatem repellat
          </CardProduct.Body>
          <CardProduct.Footer></CardProduct.Footer>
        </CardProduct>

        {data.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body title={product.title}>{product.desc}</CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
    </>
  );
}
