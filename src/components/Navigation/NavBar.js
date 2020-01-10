import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Menu } from "antd";
import Cookies from "js-cookie";

const data = [
  {
    title: "Login",
    link: "/login",
    icon: undefined,
    loggedIn: false
  },
  {
    title: "Profile",
    link: `profile/${Cookies.get("userID")}`,
    icon: undefined,
    loggedIn: true
  },
  {
    title: "Inbox",
    link: `inbox/${Cookies.get("userID")}`,
    icon: undefined,
    loggedIn: true
  },
  {
    title: "Search",
    link: "/search",
    icon: undefined,
    loggedIn: true
  },
  {
    title: "Logout",
    link: "/logout",
    icon: undefined,
    loggedIn: true
  }
];

export default function NavBar() {
  const USER_LOGGED_IN = Cookies.get("userID") > 0;

  const MENU_ITEMS = data.map((v, i) => {
    if (v.loggedIn === USER_LOGGED_IN) {
      return (
        <Menu.Item key={i}>
          <Link replace to={v.link}>
            {v.title}
          </Link>
        </Menu.Item>
      );
    }
  });

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["1"]}
      style={{ lineHeight: "64px", width: "100%", textAlign: "right" }}
    >
      {MENU_ITEMS}
    </Menu>
  );
}
