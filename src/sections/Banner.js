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
  background: var(--dark);
  min-height: 170px;
`;

const Content = styled.div`
  blockquote,
  .title {
    color: var(--textGrey);
  }

  p,
  .subtitle {
    color: var(--textWhite);
  }
`;

// DEFAULT CONTENT
const defaultContent = <h1>INSERT BANNER TEXT HERE</h1>;
