import React from "react";
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import styled from "styled-components";
import { Menu } from "antd";

import { NAV_LINKS } from "../../data/navLinks";

export default function NavBar({ styles = undefined }) {
  const USER_LOGGED_IN = Cookies.get("userID") > 0;

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
    <StyledMenu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["1"]}
      style={styles}
    >
      {MENU_ITEMS_MARKUP}
    </StyledMenu>
  );
}

const StyledMenu = styled(Menu)`
  margin: 20px 0;
  width: 100%;
  line-height: 64px;
  text-align: center;
`;
