import React from "react";
import InputForm from "../../molecules/InputForm";
import Button from "../../atoms/Button";

export default function Register() {
  return (
    <form action="">
      <InputForm label="username" name="username" type="username" placeholder="masukkan username" />
      <InputForm label="Email" name="email" type="email" placeholder="masukkan email" />
      <InputForm label="Password" type="password" name="password" placeholder="masukkan password" />
      <Button color="bg-blue-500">Sing up</Button>
    </form>
  );
}
