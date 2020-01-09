import Cookies from "js-cookie";

export const checkUserLoggedIn = () => (Cookies.get("email") ? true : false);
