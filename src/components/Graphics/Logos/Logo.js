import React from "react";
import styled from "styled-components";

export default function Logo() {
  return (
    <Container
      src="https://avatarfiles.alphacoders.com/162/162739.jpg"
      alt="logo"
    />
  );
}

const Container = styled.img`
  margin: auto;
  max-width: 50px;
  max-height: 50px;
  align-self: center;
`;
