import { useState } from "react";
import CardProduct from "../components/organism/CardProduct";
import Modal from "../components/atoms/Modal";

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
  // const handLogout = () => {
  //   localStorage.removeItem("email");
  //   localStorage.removeItem("password");
  //   window.localtion.href = "/login";
  // };

  const [showWindow, setShowWindow] = useState(false);

  console.log("datass", data);

  // kalo ada id yang sama maka akan menambahkan qty +1
  const handleAddToCart = (id) => {
    // setCart([
    // cara manual ngeSet/definisiin data ke dalam state
    // ...cart,
    // {
    //   // name: 'new name',
    //   // qty: 1,
    // }
    // ])
    if (cart.find((item) => item.id === id)) {
      // dia akan mapping dan membongkar itemnya
      setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      // kalo datanya cuma 1 maka cma akan di set satu
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  return (
    <div>
      <Modal showPopup={showWindow} setShowWindow={setShowWindow} />
      <div className={showWindow ? "blur-sm bg-white/30" : " blur-none"}>
        <div className="flex justify-center items-center min-h-screen">
          {data.map((product, item) => (
            <CardProduct key={item.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body title={product.title}>{product.desc}</CardProduct.Body>
              <CardProduct.Footer price={product.price} />
              <CardProduct.Beli id={product.id} handleToCart={handleAddToCart} />
            </CardProduct>
          ))}
        </div>
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
            <div>
              {cart.map((item) => {
                // mencari id dalam var data, kalo id yang di data sama dengan id yang ada di cart maka ambil product nya
                const datas = data.find((data) => data.id === item.id);
                if (!datas) {
                  console.log("data tidak ada", item.qty);
                  return null;
                }
                const total = item.qty * data.price;
                console.log("tess", total);
                return (
                  <tr key={item.id}>
                    <td>{datas.name}</td>
                    <td>{datas.price}</td>
                    <td>{item.qty}</td>
                    <td>{item.qty * datas.price}</td>
                  </tr>
                );
              })}
            </div>
          </tbody>
        </table>
      </div>
    </div>
  );
}
