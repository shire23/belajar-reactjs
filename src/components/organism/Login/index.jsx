import Button from "../../atoms/Button";
import InputForm from "../../molecules/InputForm";

export default function Login() {
  const handleLogin = (event) => {
    event.preventDefault();
    console.log("terklik login");
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/product";
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForm label="Email" name="email" type="email" placeholder="masukkan email" />
      <InputForm label="Password" type="password" name="password" placeholder="masukkan password" />
      <Button color="bg-blue-500">Login</Button>
    </form>
  );
}
