import { useEffect, useState } from "react";
import { getUsername } from "../services/auth.service";

export const useLogin = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    // cek token  kalo ga ada bakaan diarahin ke login
    if (token) {
      setUsername(getUsername(token));
    } else {
      window.location.href = "/login";
    }
  }, []);

  return username;
};
