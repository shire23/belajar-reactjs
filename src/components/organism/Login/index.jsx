import { useRef, useEffect, useState } from "react";
import Button from "../../atoms/Button";
import InputForm from "../../molecules/InputForm";
import { login } from "../../../services/auth.service";

export default function Login() {
  const [errorLogin, setErrorLogin] = useState("");
  const handleLogin = (event) => {
    // event.preventDefault(); = buat mencegah halaman merefresh
    event.preventDefault();
    // console.log yang ke-1
    // console.log("terklik login");
    // // event.target.email.value buatu ngambil value yang ada di input form
    // console.log(event.target.email.value);
    // console.log(event.target.password.value);
    // // buat nyimpen data dari form input ke penyimpanan browser(aplications)
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);
    // // buat ngeridairek ke halaman lain

    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/product";
      } else {
        console.log("Login", res);
        setErrorLogin(res.response.data);
      }
    });
  };

  // useRef = hooks yang biasanya dipake buat ngakses DOM,
  // bedanya sama useState, useRef ngga akan dirender ulang setiap ada perubahan data
  //  useRef tidak bisa diakses pake props tapi pake forwardref

  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    // onsubmit = event handler yg menangani suatu form ketika menangani ketika disubmit
    <form onSubmit={handleLogin}>
      <InputForm label="Username" name="username" type="text" placeholder="masukkan username" ref={usernameRef} />
      <InputForm label="Password" type="password" name="password" placeholder="masukkan password" />
      {/* ini adalah eventhandler untuk nampilin console.log yang ke 1 */}
      {/* button onClick  */}
      <Button color="bg-blue-500">Login</Button>
      {errorLogin && <p className="mt-5 text-center text-sm text-red-500">{errorLogin}</p>}
    </form>
  );
}
