import React from "react";
import Login from "../components/organism/Login";
import AuthLayout from "../components/template/AuthLayout";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[url('../../public/images/bg1.avif')] bg-cover">
      <AuthLayout title="Login" desc="Welcome Guys!">
        <Login />
        <p className="text-sm mt-4 text-center">
          Dont have an account?{""}
          {/*  */}
          {/*  */}
          <Link className="font-bold text-blue-500" to="/register">
            Register
          </Link>
        </p>
      </AuthLayout>
    </div>
  );
}
