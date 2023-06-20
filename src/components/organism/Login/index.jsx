import React from "react";
import Button from "../../atoms/Button";
import InputForm from "../../molecules/InputForm";
import CheckBox from "../../atoms/Checkbox";

export default function Login() {
  const handleLogin = (event) => {
    event.preventDefault();

    console.log("terklik login");
    console.log(event.target.nomor.value);
    localStorage.setItem("nomor", event.target.nomor.value);
    window.location.href = "/product";
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForm label="nomor" name="nomor" type="nomor" placeholder="08xxxxxxxxxx" />
      <CheckBox />
      <Button type="submit" color="bg-violet-500">
        Login
      </Button>
    </form>
  );
}
