import { AUTH_TOKEN_KEY } from "@constants";
import Cookies from "js-cookie";

export const signOut = () => {
	Cookies.remove(AUTH_TOKEN_KEY);
	window.location.pathname = "/";
};

export const  getFirstCharacter = (str:string|undefined) => {
	return str?.charAt(0);
  }