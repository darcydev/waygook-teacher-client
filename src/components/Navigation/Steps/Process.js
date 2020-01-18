import React, { Component, useState } from 'react';
import styled from 'styled-components';
import { Steps } from 'antd';

const { Step } = Steps;

export default function Process({
  direction = 'horizontal',
  data = defaultStepData
}) {
  const [current, setCurrent] = useState(0);

  const onCurrentChange = current => setCurrent(current);

  const STEPS_MARKUP = data.map((v, i) => (
    <Step key={`${i}: ${v}`} title={v.title} description={v.description} />
  ));

  return (
    <Container>
      <Steps current={current} onChange={onCurrentChange} direction={direction}>
        {STEPS_MARKUP}
      </Steps>
    </Container>
  );
}

// STYLES
const Container = styled.div``;

// DEFAULT DATA
const defaultStepData = [
  { title: 'Step 1', description: 'This is a description' },
  { title: 'Step 2', description: 'This is a description' },
  { title: 'Step 3', description: 'This is a description' }
];
