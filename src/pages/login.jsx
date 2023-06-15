import React from "react";
import Login from "../components/organism/Login";
import AuthLayout from "../components/template/AuthLayout";
import { Link } from "react-router-dom";
import logo from "../../public/images/bg6.jpg"
import Navbar from "../components/organism/Navbar"
import Footer from "../components/organism/Footer"

export default function LoginPage() {
  return (
  <div>
    <div>
      <Navbar/>
    </div>
    <div className="flex gap-10 justify-center items-center min-h-screen ">
      <img src={logo} className="w-[500px] h-[500px] "/>
      <AuthLayout title="Login" desc="Welcome Guys!" type="login">
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
    <Footer/>
    </div>
  )
}

