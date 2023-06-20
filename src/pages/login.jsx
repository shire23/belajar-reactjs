import Login from "../components/organism/Login";
import AuthLayout from "../components/template/AuthLayout";
import { Link } from "react-router-dom";
import Footer from "../components/organism/Footer";

export default function LoginPage() {
  return (
    <div>
      <div></div>
      <div className="flex h-[1200px] gap-10 mt-15 justify-center  min-h-screen bg-[url('../../public/images/axis_banner.png')] bg-cover ">
        <AuthLayout title="Login" desc="Masukkan nomor HP Axis untuk masuk ke akun kamu" type="login">
          <Login />
          <p className="text-sm mt-4 text-center">
            Belum registrasi kartu?Klik link dibawah ini
            <Link className="font-bold text-violet-500" to="/register">
              Register Kartu Perdana
            </Link>
          </p>
        </AuthLayout>
      </div>
      <Footer />
    </div>
  );
}
