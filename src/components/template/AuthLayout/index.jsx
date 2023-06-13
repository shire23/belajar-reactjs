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
          {/* cara ke 1 */}
          <p className="text-sm mt-5 text-center">{type === "login" ? "ngga punya akun?" : "udah punya akun?"}</p>
          {type === "login" && (
            <Link to="/register" className="text-blue-500 font-bold">
              Daftar
            </Link>
          )}
          {type === "register" && (
            <Link to="/login" className="text-blue-500 font-bold">
              Masuk
            </Link>
          )}
          {/* cara ke-2 */}
          {type === "login" ? (
            <p className="text-sm mt-5 text-center">
              ga punya akun?{""}
              <Link to="/register" className="text-blue-500 font-bold">
                Daftar
              </Link>
            </p>
          ) : (
            <p className="text-sm mt-5 text-center">
              dah punya akun?{""}
              <Link to="/login" className="text-blue-500 font-bold">
                login
              </Link>
            </p>
          )}
          <Navigasi type={type} />
        </div>
      </div>
    </div>
  );
}

// cara ke-3
const Navigasi = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-sm mt-5 text-center">
        belum punya akun cara3?{""}
        <Link to="/register" className="text-blue-500 font-bold">
          Daftar
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm mt-5 text-center">
        udah punya akun cara3?{""}
        <Link to="/login" className="text-blue-500 font-bold">
          Masuk
        </Link>
      </p>
    );
  }
};
