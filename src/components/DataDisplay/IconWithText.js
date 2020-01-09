import React from "react";
import styled from "styled-components";
import { Icon } from "antd";

export default function IconWithText({
  icon = <Icon type="question" />,
  text = "Default text"
}) {
  return (
    <Container>
      {icon}
      {text}
    </Container>
  );
}

const Container = styled.div`
  display: flex;

  i {
    align-self: center;
    padding-right: 5px;
  }
`;
