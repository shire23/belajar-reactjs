import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSiswaById } from "../services/siswa.service";
import axios from "axios";

export default function EditData() {
  const { id } = useParams();
  const [siswaId, setSiswaId] = useState("");

  const [name, setName] = useState("");
  const [tempatLahir, setTempatLahir] = useState("");
  const [umur, setUmur] = useState("");
  const [alamat, setAlamat] = useState("");
  const [noHp, setNoHp] = useState("");

  const updateUser = async (id) => {
    try {
      const reqdata = {
        name: name,
        tempatLahir: tempatLahir,
        umur: umur,
        alamat: alamat,
        noHp: noHp,
      };
      await axios.put(`http://localhost:3009/put/${id}`, reqdata);
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSiswaById(id, (data) => {
      console.log(getSiswaById);
      setSiswaId(data.data);
    });
  }, [id]);
  console.log(siswaId);

  useEffect(() => {
    setName(siswaId.name);
    setTempatLahir(siswaId.tempatLahir);
    setUmur(siswaId.umur);
    setAlamat(siswaId.alamat);
    setNoHp(siswaId.noHp);
  }, [siswaId]);

  return (
    <div className="flex flex-col justify-center w-full h-full p-20">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateUser(siswaId.id);
        }}
      >
        <div className="flex flex-col justify-center items-center w-full px-44 space-y-8">
          <div className="flex flex-col w-full space-y-2">
            <label htmlFor="nama" className="text-md font-semibold text-gray-700">
              Nama:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="py-2 px-4 rounded-md bg-gray-100"
            ></input>
          </div>

          <div className="flex flex-col w-full space-y-2">
            <label htmlFor="tempatLahir" className="text-md font-semibold text-gray-700">
              Tempat:
            </label>
            <input
              type="tempatLahir"
              id="tempatLahir"
              name="tempatLahir"
              value={tempatLahir}
              onChange={(e) => setTempatLahir(e.target.value)}
              required
              className="py-2 px-4 rounded-md bg-gray-100"
            ></input>
          </div>

          <div className="flex flex-col w-full space-y-2">
            <label htmlFor="alamat" className="text-md font-semibold text-gray-700">
              Umur:
            </label>
            <input
              type="text"
              id="umur"
              name="umur"
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
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
              required
              className="py-2 px-4 rounded-md bg-gray-100"
            ></input>
          </div>

          <div className="flex flex-col w-full space-y-2">
            <label htmlFor="noHp" className="text-md font-semibold text-gray-700">
              No Telp:
            </label>
            <input
              type="noHp"
              id="noHp"
              name="noHp"
              value={noHp}
              onChange={(e) => setNoHp(e.target.value)}
              required
              className="py-2 px-4 rounded-md bg-gray-100"
            ></input>
          </div>

          <button type="submit" className="bg-gray-900 text-lg font-semibold text-gray-100 px-4 py-2 rounded-md w-1/2">
            UPDATE DATA
          </button>
        </div>
      </form>
    </div>
  );
}
