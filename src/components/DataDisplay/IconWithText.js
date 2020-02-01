import React from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';
import { QuestionCircleFilled } from '@ant-design/icons';

const { Text } = Typography;

export default function IconWithText({
  icon = <QuestionCircleFill />,
  text = 'Default text'
}) {
  return (
    <Container>
      <StyledIcon>{icon}</StyledIcon>
      <Text>{text}</Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const StyledIcon = styled.div`
  align-self: center;
`;
