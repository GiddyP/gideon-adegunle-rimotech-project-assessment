'use client'
import { useState, useEffect } from "react";
import { AUTH_TOKEN_KEY } from "@constants";
import Cookies from "js-cookie";

const useToken = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedToken = Cookies.get(AUTH_TOKEN_KEY);
    if (storedToken) setToken(storedToken);
    // else {
    //   window.location.pathname = "/login";
    // }
  }, []);

  return { token };
};

export default useToken;
