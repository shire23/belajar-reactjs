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
  // state / useState = data/penyimpanan/memori yang dipake buat menghandle/menangani komponen ynag berubah-ubah
  const [cart, setCart] = useState([
    {
      id: "1",
      qty: "1",
    },
  ]);
  const handLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.localtion.href = "/login";
  };

  // kalo ada id yang sama maka akan menambahkan qty +1
  const handleToCart = (id) => {
    // dia akan mappinh dan membongkar itemnya
    if (cart.find((item) => item.id === id)) {
      // kalo datanya cuma 1 maka cuma akan di set satu
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

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
      <div className="w-2/6 py-8 px-5">
        <h1>Cart</h1>
        <ul>
          <li key={item.id} className=""></li>
        </ul>
      </div>
    </>
  );
}
