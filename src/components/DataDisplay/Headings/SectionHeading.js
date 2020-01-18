import React from 'react';
import styled from 'styled-components';

export default function SectionHeading({
  heading = 'default heading',
  backgroundHeading,
  subHeading
}) {
  return (
    <Container>
      <h2 title={backgroundHeading ? backgroundHeading : heading}>{heading}</h2>
      <p>{subHeading}</p>
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
