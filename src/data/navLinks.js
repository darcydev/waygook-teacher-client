import Cookies from "js-cookie";

export const NAV_LINKS = [
  {
    title: "Login",
    link: "/login",
    loggedIn: false
  },
  {
    title: "Profile",
    link: `profile/${Cookies.get("userID")}`,
    loggedIn: true
  },
  {
    title: "Inbox",
    link: `inbox/${Cookies.get("userID")}`,
    loggedIn: true
  },
  {
    title: "Search",
    link: "/search",
    loggedIn: true
  },
  {
    title: "Logout",
    link: "/logout",
    loggedIn: true
  }
];
