import React from "react";
import Cookies from "js-cookie";

export default function Logout() {
  return Cookies.remove("email");
}
