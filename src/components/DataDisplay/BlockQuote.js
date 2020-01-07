import React from "react";
import styled from "styled-components";

export default function BlockQuote({
  quote = "this is the default blockquote text",
  quoteStyles = undefined,
  author = "Jones Smith III",
  authorStyles = undefined
}) {
  return (
    <>
      <Quote quoteStyles={quoteStyles}>{quote}</Quote>
      <Author authorStyles={authorStyles}>- {author}</Author>
    </>
  );
}

const Quote = styled.blockquote``;

const Author = styled.p`
  font-style: italic;
  text-align: right;
`;
