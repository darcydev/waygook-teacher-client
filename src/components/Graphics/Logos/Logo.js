import React from "react";
import styled from "styled-components";

export default function Logo() {
  return <StyledImage src="images/logos/logo.png" alt="logo" />;
}

const StyledImage = styled.img`
  margin: auto;
  width: 50px;
  height: 50px;
  align-self: center;
`;
