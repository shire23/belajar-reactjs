import Register from "../components/organism/Register";
import AuthLayout from "../components/template/AuthLayout";
import { Link } from "react-router-dom";
import logo from "../../public/images/axis_banner.png";

export default function RegisterPage() {
  return (
    <div>
      <div>
        <p classname="font-bold">My Project</p>
      </div>
      <div className="flex gap-10 justify-center items-center min-h-screen">
        <img src={logo} />
        <AuthLayout
          title="Registrasi Kartu"
          desc="pastikan sim card kamu sudah terpasang dan handphone dalam keadaan aktif.setelah itu,silahkan masukkan data sesuai dengan informasi pada KTP dan Kartu Keluargamu"
          type="register"
        >
          <Register />
          <p className="text-sm mt-4 text-center">
            have an account?{""}
            {/* */}
            {/*cara menggunakan routing pake link buat pindah antar komponen  */}
            <Link className="font-bold text-violet-500" to="/login">
              Login
            </Link>
          </p>
        </AuthLayout>
      </div>
    </div>
  );
}
