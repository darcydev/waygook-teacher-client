import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";
import Cookies from "js-cookie";

import { NAV_LINKS } from "../../data/navLinks";

export default function NavBar() {
  const USER_LOGGED_IN = Cookies.get("userID") > 0;

  // console.log('All Cookies set:', Cookies.get());

  const MENU_ITEMS_MARKUP = NAV_LINKS.map((v) =>
    v.loggedIn === USER_LOGGED_IN ? (
      <Menu.Item key={v.title}>
        <NavLink replace to={v.link}>
          {v.title}
        </NavLink>
      </Menu.Item>
    ) : null
  );

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["1"]}
      style={{ lineHeight: "64px", width: "100%", textAlign: "right" }}
    >
      {MENU_ITEMS_MARKUP}
    </Menu>
  );
}
