import React from "react";
import Register from "../components/organism/Register";
import AuthLayout from "../components/template/AuthLayout";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <AuthLayout title="Register" desc="Isi disini!">
      <Register />
      <p className="text-sm mt-4 text-center">
        have an account?{""}
        {/*  */}
        {/*  */}
        <Link className="font-bold text-blue-500" to="/login">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
}
