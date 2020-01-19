import React from 'react';
import styled from 'styled-components';

export default function BlockQuote({
  styles = undefined,
  quote = 'this is the default blockquote text',
  quoteStyles = undefined,
  author = 'Jones Smith III',
  authorStyles = undefined
}) {
  return (
    <Container style={styles}>
      <Quote quoteStyles={quoteStyles}>{quote}</Quote>
      <Author authorStyles={authorStyles}>- {author}</Author>
    </Container>
  );
}

const Container = styled.div``;

const Quote = styled.blockquote``;

const Author = styled.p`
  font-style: italic;
  text-align: right;
`;
