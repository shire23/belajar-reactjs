import React from "react";
import Button from "../../atoms/Button";
import InputForm from "../../molecules/InputForm";

export default function Login() {
  return (
    <form action="">
      <InputForm label="Email" name="email" type="email" placeholder="masukkan email" />
      <InputForm label="Password" type="password" name="password" placeholder="masukkan password" />
      <Button color="bg-blue-500">Login</Button>
    </form>
  );
}
