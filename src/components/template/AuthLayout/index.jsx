import React from "react";
import { Link } from "react-router-dom";

export default function AuthLayout(props) {
  const { children, title, desc, type } = props;
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="rounded-lg bg-blue-500 p-1">
        <div className="w-full max-w-xs border rounded-lg p-8 bg-white">
          <h1 className="text-3xl font-bold mb-2 text-blue-500">{title}</h1>
          <p className="font-medium text-slate-500 mb-4">{desc}</p>
          {children}

          {type === "login" && <Link to="/register" className="text-blue-500 font-bold"></Link>}
          {type === "register" && <Link to="/login" className="text-blue-500 font-bold"></Link>}
        </div>
      </div>
    </div>
  );
}
