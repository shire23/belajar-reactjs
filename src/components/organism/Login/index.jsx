import { useRef, useEffect } from "react";
import Button from "../../atoms/Button";
import InputForm from "../../molecules/InputForm";

export default function Login() {
  const handleLogin = (event) => {
    // event.preventDefault(); = buat mencegah halaman merefresh
    event.preventDefault();
    // console.log yang ke-1
    console.log("terklik login");
    // event.target.email.value buatu ngambil value yang ada di input form
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    // buat nyimpen data dari form input ke penyimpanan browser(aplications)
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    // buat ngeridairek ke halaman lain
    window.location.href = "/product";
  };

  // useRef = hooks yang biasanya dipake buat ngakses DOM,
  // bedanya sama useState, useRef ngga akan dirender ulang setiap ada perubahan data
  //  useRef tidak bisa diakses pake props tapi pake forwardref

  const emailRef = useRef(null);
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm label="Email" name="email" type="email" placeholder="masukkan email" ref={emailRef} />
      <InputForm label="Password" type="password" name="password" placeholder="masukkan password" />
      {/* ini adalah eventhandler untuk nampilin console.log yang ke 1 */}
      {/* button onClick  */}
      <Button color="bg-blue-500">Login</Button>
    </form>
  );
}
