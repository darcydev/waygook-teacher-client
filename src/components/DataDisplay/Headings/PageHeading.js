import React from "react";
import styled from "styled-components";

export default function PageHeading({
  heading = "default page heading",
  subHeading
}) {
  return (
    <Container>
      <h1>{heading}</h1>
      <p>{subHeading}</p>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;
