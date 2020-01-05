import React from 'react';
import styled from 'styled-components';
import { Menu, Row, Col } from 'antd';

import SimpleButton from '../UI/SimpleButton';
import LoginButton from '../UI/LoginButton';

const data = [
  { title: 'Profile', link: 'https://google.com' },
  { title: 'Search', link: 'https://google.com' }
];

export default function NavBar() {
  const ITEMS_MARKUP = data.map((v, i) => (
    <Menu.Item key={`${i}:${v.title}`}>
      <SimpleButton
        type="link"
        href={v.link}
        text={v.title}
        styles={{ color: 'wheat' }}
      />
    </Menu.Item>
  ));

  return (
    <Container>
      <Row>
        <Col span={8}>INSERT LOGO</Col>
        <Col span={12}>
          <Menu
            mode="horizontal"
            style={{
              background: 'inherit',
              color: 'wheat'
            }}
          >
            {ITEMS_MARKUP}
          </Menu>
        </Col>
        <Col span={4}>
          <LoginButtonContainer>
            <LoginButton />
          </LoginButtonContainer>
        </Col>
      </Row>
    </Container>
  );
}

const Container = styled.div`
  color: white;
`;

const LoginButtonContainer = styled.div``;
