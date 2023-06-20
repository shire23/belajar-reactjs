import { useState } from "react";
import CardProduct from "../components/organism/CardProduct";

const data = [
  {
    id: 1,
    image: "public/images/bg3.jpg",
    title: "Keyboard",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, animi quam quasi placeat distinctio voluptatem repellat",
    price: 150.0,
  },
  {
    id: 2,
    image: "public/images/bg3.jpg",
    title: " Keyboard",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, animi quam quasi placeat distinctio voluptatem repellat",
    price: 200.0,
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
      setCart([...cart, { id, qty: 3 }]);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        {data.map((product, item) => (
          <CardProduct key={item.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body title={product.title}>{product.desc}</CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
      {/* <div className="w-2/6 py-8 px-5"> */}
      <table className="border px-2 py-4 rounded-lg table-auto border-separate border-spacing-5">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {/* mencari id di dalam var data kalo id data yang sama dengan id yang ada di cart maka diambil produknya  */}
          {/* {cart.map((item) => (
          const datas = data.find((data) => data.id === item.id)
          return(
            <tr>
              <td className="text-center">{datas.name}</td>
              <td>{datas.price.toLocalString("id-ID,"){ style :"currency", currency:"IDR"}}</td>
              <td className="text-center">{item.qty}</td>
              <td>{(item.qty *datas.price).toLocalString("id-ID"){ style:"currency", currency:"IDR"}}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </>
  );
}
