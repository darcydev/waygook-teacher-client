import React from "react";
import styled from "styled-components";
import { Layout } from "antd";

import Logo from "../components/Graphics/Logos/Logo";
import NavBar from "../components/Navigation/NavBar";

const { Header } = Layout;

export default function HeaderSection() {
  return (
    <StyledHeader>
      <Logo />
      <NavBar styles={{ textAlign: "right" }} />
    </StyledHeader>
  );
}

// STYLES
const StyledHeader = styled(Header)`
  display: flex;
`;
