import React from "react";
import Register from "../components/organism/Register";
import AuthLayout from "../components/template/AuthLayout";
import { Link } from "react-router-dom";
import logo from "../../public/images/bg7.jpg";

export default function RegisterPage() {
  return (
    <div>
      <div ><p classname="font-bold">My Project</p></div>
    <div className="flex gap-10 justify-center items-center min-h-screen">
      <img src={logo} className="w-[700px] "/>
      <AuthLayout title="Register" desc="Isi disini!" type="register">
        <Register />
        <p className="text-sm mt-4 text-center">
          have an account?{""}
          {/* */}
          {/*cara menggunakan routing pake link buat pindah antar komponen  */}
          <Link className="font-bold text-blue-500" to="/login">
            Login
          </Link>
        </p>
      </AuthLayout>
    </div>
    </div>
    
  );
}
