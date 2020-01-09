import Cookies from "js-cookie";

export const logout = () => {
  // TODO: page isn't refreshing
  window.location.reload();

  Cookies.remove("email");
};
