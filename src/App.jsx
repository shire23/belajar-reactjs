import ComponentProps from "./belajar/componenProps";
import InputForm from "./components/molecules/InputForm";
import Login from "./components/organism/Login";
import Pendaftaran from "./components/organism/Pendaftaran";
import Register from "./components/organism/Register";
import AuthLayout from "./components/template/AuthLayout";
// import Button from "./components/atoms/Button";

function App(props) {
  // const { title = "Willy" } = props;
  return (
    // <> simbol fragment sebagai parent dari suatu komponen
    <>
      <div className="flex gap-x-10 justify-center items-center min-h-screen">
        {/* cara menambahkan style yang tidak ada di tailwind menggunakan arbitari atau kurung siku seperti contoh textColor dibawah ini */}
        {/* <ComponentProps textColor="text bg-violet-500" text="hello guys"></ComponentProps> */}

        {/* cara menambahkan style */}
        {/* <ComponentProps textColor="text[#111827]" text="hello guys" /> */}

        {/* <Button data={title} /> */}
        {/* <InputForm /> */}
        {/* <Login /> */}

        <AuthLayout title="Login" desc="Welcome Guys!">
          <Login />
        </AuthLayout>
        <AuthLayout title="Register" desc="Isi disini!">
          <Register />
        </AuthLayout>
        <AuthLayout title="Pendaftaran" desc="Lengkapi data dibawah ini!">
          <Pendaftaran />
        </AuthLayout>
      </div>
    </>
  );
}

export default App;
