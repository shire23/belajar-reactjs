import React, { useState } from "react";
import axios from "axios";

const TambahData = () => {
  const [name, setName] = useState("");
  const [tempatLahir, setTempatLahir] = useState("");
  const [umur, setUmur] = useState("");
  const [alamat, setAlamat] = useState("");
  const [noHp, setNoHp] = useState("");

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3009/post", {
        name: name,
        tempatLahir: tempatLahir,
        umur: umur,
        alamat: alamat,
        noHp: noHp,
      });
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="max-w-screen max-h-screen">
        <div className="bg-gray-50">
          <div className="flex flex-col w-full">
            <div className="flex justify-between items-center bg-blue-900 px-10 py-6 w-full">
              <a href="#">
                <h1 className="text-white text-xl font-bold">FORM TAMBAH DATA</h1>
              </a>
            </div>
            <div className="flex flex-col justify-center w-full h-full p-20">
              <form onSubmit={saveUser} className="flex flex-col justify-center w-full">
                <div className="flex flex-col justify-center items-center w-full px-44 space-y-8">
                  <div className="flex flex-col w-full space-y-2">
                    <label htmlFor="name" className="text-md font-semibold text-gray-700">
                      Nama:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="py-2 px-4 rounded-md bg-gray-100"
                    ></input>
                  </div>

                  <div className="flex flex-col w-full space-y-2">
                    <label htmlFor="tempatLahir" className="text-md font-semibold text-gray-700">
                      Tempat Lahir:
                    </label>
                    <input
                      type="text"
                      id="tempatLahir"
                      name="tempatLahir"
                      placeholder="Tempat Lahir"
                      value={tempatLahir}
                      onChange={(e) => setTempatLahir(e.target.value)}
                      required
                      className="py-2 px-4 rounded-md bg-gray-100"
                    ></input>
                  </div>

                  <div className="flex flex-col w-full space-y-2">
                    <label htmlFor="umur" className="text-md font-semibold text-gray-700">
                      Umur:
                    </label>
                    <input
                      type="text"
                      id="umur"
                      name="umur"
                      placeholder="umur"
                      value={umur}
                      onChange={(e) => setUmur(e.target.value)}
                      required
                      className="py-2 px-4 rounded-md bg-gray-100"
                    ></input>
                  </div>

                  <div className="flex flex-col w-full space-y-2">
                    <label htmlFor="alamat" className="text-md font-semibold text-gray-700">
                      Alamat:
                    </label>
                    <input
                      type="text"
                      id="alamat"
                      name="alamat"
                      placeholder="Alamat"
                      value={alamat}
                      onChange={(e) => setAlamat(e.target.value)}
                      required
                      className="py-2 px-4 rounded-md bg-gray-100"
                    ></input>
                  </div>

                  <div className="flex flex-col w-full space-y-2">
                    <label htmlFor="noHp" className="text-md font-semibold text-gray-700">
                      no Hp:
                    </label>
                    <input
                      type="text"
                      id="noHp"
                      name="noHp"
                      placeholder="no Hp"
                      value={noHp}
                      onChange={(e) => setNoHp(e.target.value)}
                      required
                      className="py-2 px-4 rounded-md bg-gray-100"
                    ></input>
                  </div>

                  <button
                    type="submit"
                    className="bg-gray-900 text-lg font-semibold text-gray-100 px-4 py-2 rounded-md w-1/2"
                  >
                    TAMBAH
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TambahData;
