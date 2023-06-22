import React, { useEffect, useState } from "react";
import CardProduct from "../components/organism/CardProduct";
import Button from "../components/atoms/Button";
import { getProduct } from "../services/product.service";
import { getUsername } from "../services/auth.service";

export default function ProductPage() {
  // state = data/penyimpanan private yg dipake buat menghandle komponen yang berubah2
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [data, setData] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUsername(getUsername(token));
    } else {
      window.location.href = "/login";
    }
  });

  //(componentDidMount) useEffect = sebuah hooks yg dipake buat memanipulasi komponen, fungsinya untuk membuat sinkronisasi antar komponen
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []); //depedencies array(array kosong)=untuk menghentikan looping(warning)

  // (componentDidUpdate)
  useEffect(() => {
    // fungsi reduce buat eksekusi setiap elemen dlm array trus nampilin ke dlm 1/sebuah nilai aja
    if (data.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = data.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      // opsional: ubah data json ke string krna localstorage cma bisa nympen data string
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, data]); //cart sbagai depedencies array yg mana untuk memantau perubahan state

  const handleLogout = () => {
    // localStorage.removeItem("email");
    // localStorage.removeItem("password");
    // localStorage.removeItem("token");
    localStorage.clear();
    setCart([]);
    window.location.href = "/login";
  };

  const handleToCart = (id) => {
    // kalo ada id yg sama maka akan menambahkan qty +1
    if (cart.find((item) => item.id === id)) {
      //dy akan mapping dan membongkar itemnya
      setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      // kalo data nya cma 1 maka cma akan di set satu
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  //get data using useEffect
  useEffect(() => {
    getProduct((data) => {
      console.log(data);
      setData(data);
    });
  }, []);

  return (
    <>
      <div className="flex justify-between items-center bg-gray-800 text-white font-semibold px-4 py-4">
        <div className="w-[10%]">
          <h1 className="text-3xl"> the Shop</h1>
        </div>
        <div className="w-[10%]">
          <Button color="bg-red-500" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>
      <div className="flex ">
        <div className="w-4/6 flex flex-wrap justify-center items-center min-h-screen gap-6 py-8  pb-4">
          {/* .map digunakan untuk mengambil data dari array dan melakukan looping pada setiap elemen dan menampilkannya ke dalam cardProduct */}
          {data.length > 0 &&
            data.map((data) => (
              <CardProduct key={data.id}>
                <CardProduct.Header image={data.image} />
                <CardProduct.Body title={data.title}>{data.description}</CardProduct.Body>
                <CardProduct.Footer price={data.price} id={data.id} handleToCart={handleToCart} />
                <CardProduct.Beli id={data.id} handleToCart={handleToCart} />
              </CardProduct>
            ))}
        </div>
        <div className="w-2/6 py-8">
          <h1 className="text-2xl font-bold text-blue-500">Cart</h1>
          {/* <ul>
            {cart.map((item) => (
              <li key={item.id} className="text-lg font-semibold">
                {item.id}
              </li>
            ))}
          </ul> */}
          <table className="border px-2 py-4 rounded-lg table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 &&
                cart.map((item) => {
                  // mencari id dlm var. data, kalo id yg di data sama dengan id yg ada di cart maka ambil produknya
                  const datas = data.find((data) => data.id === item.id);
                  return (
                    <tr key={item.id}>
                      <td className="text-center">{datas.title.substring(0, 20)}</td>
                      <td> {datas.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</td>
                      <td className="text-center">{item.qty}</td>
                      <td>
                        {(item.qty * datas.price).toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
                      </td>
                    </tr>
                  );
                })}
              <tr className="font-bold">
                <td colSpan={3}>Total Price</td>
                <td>{totalPrice.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
