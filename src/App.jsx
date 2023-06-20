import ComponentProps from "./belajar/componenProps";
import InputForm from "./components/molecules/InputForm";
import CardProduct from "./components/organism/CardProduct";
import Login from "./components/organism/Login";
import Register from "./components/organism/Register";
import AuthLayout from "./components/template/AuthLayout";

function App(props) {
  return (
    <>
      <div className="flex gap-x-10 justify-center items-center min-h-screen">
        <AuthLayout title="Sign in" desc="Welcome Guys!">
          <Login />
        </AuthLayout>
        <AuthLayout title="Register" desc="Isi disini!">
          <Register />
        </AuthLayout>
        <CardProduct></CardProduct>
      </div>
    </>
  );
}

export default App;
