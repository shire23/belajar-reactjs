import React, { useEffect, useState } from "react";
import CardProduct from "../components/organism/CardProduct";
import Button from "../components/atoms/Button";
import { getMemes } from "../services/memes.service";

export default function MemesPage() {
  // state = data/penyimpanan private yg dipake buat menghandle komponen yang berubah2
  const [data, setData] = useState([]);

  const handleLogout = () => {
    // localStorage.removeItem("email");
    // localStorage.removeItem("password");
    // localStorage.removeItem("token");
    localStorage.clear();
    setCart([]);
    window.location.href = "/login";
  };

  //get data using useEffect
  useEffect(() => {
    getMemes((data) => {
      console.log(data);
      setData(data.data.memes);
    });
  }, []);

  return (
    <>
      <div className="flex justify-between items-center bg-gray-800 text-white font-semibold px-4 py-4">
        <div className="w-[10%]">
          <h1 className="text-3xl"> the Shop</h1>
        </div>
      </div>
      <div className="flex ">
        <div className="w-4/6 flex flex-wrap justify-center items-center min-h-screen gap-6 py-8  pb-4">
          {/* .map digunakan untuk mengambil data dari array dan melakukan looping pada setiap elemen dan menampilkannya ke dalam cardProduct */}
          {data.length > 0 &&
            data.map((data) => (
              <CardProduct key={data.id}>
                <CardProduct.Header image={data.url} id={data.id} />
                <CardProduct.Body title={data.name}>Description</CardProduct.Body>
              </CardProduct>
            ))}
        </div>
      </div>
    </>
  );
}
