import React from 'react';
import styled from 'styled-components';

export default function Banner({ content = defaultContent }) {
  return (
    <Container>
      <Content className="content">{content}</Content>
    </Container>
  );
}

// STYLES
const Container = styled.div`
  background: rgba(9, 9, 121, 1);
  min-height: 170px;
`;

const Content = styled.div``;

// DEFAULT CONTENT
const defaultContent = <h1>INSERT BANNER TEXT HERE</h1>;
