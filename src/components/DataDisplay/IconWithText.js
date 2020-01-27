import React from 'react';
import styled from 'styled-components';
import { QuestionCircleFill } from '@ant-design/icons';

export default function IconWithText({
  icon = <QuestionCircleFill />,
  text = 'Default text'
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
