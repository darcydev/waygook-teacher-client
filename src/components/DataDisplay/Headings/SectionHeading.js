import React from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';

const { Title, Text } = Typography;

export default function SectionHeading({
  heading = 'default heading',
  backgroundHeading,
  subHeading
}) {
  return (
    <Container>
      <Title level={1}>{heading}</Title>
      <Text>{subHeading}</Text>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.25px;
  font-weight: 700;
  border-bottom: 1px solid orange;
`;
