import React from "react";
import InputForm from "../../molecules/InputForm";
import Button from "../../atoms/Button";

export default function Pendaftaran() {
  return (
    <form action="">
      <InputForm label="nama" name="nama" type="nama" placeholder="masukkan nama" />
      <InputForm label="asal" name="asal" type="asal" placeholder="masukkan asal" />
      <InputForm label="email" type="email" name="email" placeholder="masukkan email" />
      <InputForm label="password" type="password" name="password" placeholder="masukkan password" />
      <Button color="bg-blue-500">Daftar disini!</Button>
    </form>
  );
}
