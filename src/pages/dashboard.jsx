import React, { useState, useEffect } from "react";
import { getSiswa } from "../services/siswa.service";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Dashboard() {
  const [siswa, setSiswa] = useState([]);

  useEffect(() => {
    getSiswa((data) => {
      console.log(data.data);
      setSiswa(data.data);
    });
  }, []);

  const deleteSiswa = async (id) => {
    try {
      await axios.delete(`http://localhost:3009/delete/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {" "}
      <div className="title flex justify-between w-full px-10 py-4 bg-gray-200">
        <h1 className="font-bold text-lg text-gray-700">LIST DATA SISWA</h1>
        <a href="/tambahdata" className="hover:underline text-blue-500">
          <h1 className="font-bold text-lg">Tambahkan Data</h1>
        </a>
      </div>
      <div className="flex flex-col justify-center w-full">
        <table className="w-full text-left text-sm">
          <thead className="border-b dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-10 py-4">
                No
              </th>
              <th scope="col" className="px-10 py-4">
                Nama
              </th>

              <th scope="col" className="px-10 py-4">
                Tempat Lahir
              </th>
              <th scope="col" className="px-10 py-4">
                Umur
              </th>
              <th scope="col" className="px-10 py-4">
                Alamat
              </th>
              <th scope="col" className="px-10 py-4">
                no Hp
              </th>
              <th scope="col" className="px-6 py-4">
                action
              </th>
            </tr>
          </thead>
          <tbody className="border-b dark:border-neutral-500">
            {siswa.map((dataSiswa, index) => (
              <tr key={dataSiswa.id}>
                <td className="whitespace-nowrap px-10 py-4">{index + 1}</td>
                <td className="whitespace-nowrap px-10 py-4">{dataSiswa.name}</td>
                <td className="whitespace-nowrap px-10 py-4">{dataSiswa.tempatLahir}</td>
                <td className="whitespace-nowrap px-10 py-4">{dataSiswa.umur}</td>
                <td className="whitespace-nowrap px-10 py-4">{dataSiswa.alamat}</td>
                <td className="whitespace-nowrap px-10 py-4">{dataSiswa.noHp}</td>
                <td className="whitespace-nowrap px-6 py-4 space-x-2">
                  <Link to={`/editData/${dataSiswa.id}`}>
                    {" "}
                    <a href="" className="text-blue-500 hover:underline">
                      Edit
                    </a>
                  </Link>
                  <button className="text-red-500 hover:underline" onClick={() => deleteSiswa(dataSiswa.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>{" "}
    </>
  );
}
