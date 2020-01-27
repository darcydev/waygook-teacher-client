import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { List } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';

export default function SimpleList({
  itemLayout = 'horizontal',
  styles = undefined,
  classes = undefined,
  light = false,
  data = defaultListData
}) {
  return (
    <Container>
      <List
        className={classes}
        style={styles}
        itemLayout={itemLayout}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            {item.icon}
            <List.Item.Meta
              className="feature-text"
              title={item.title}
              description={item.content}
              style={{ color: light ? 'wheat' : '#0b0b1d' }}
            />
          </List.Item>
        )}
      />
    </Container>
  );
}

const Container = styled.div`
  .ant-list-split .ant-list-item {
    border-bottom: none;
  }

  .ant-list-item-meta-content {
    margin-left: 40px;
  }

  .ant-list-item-meta-description {
    letter-spacing: 0.15px;
    font-size: 16px;
    color: inherit;
  }

  ${media.lessThan('large')`
    .ant-list-item-meta-content {
      margin-left: 5px;
    }
`}
`;

const defaultListData = [
  {
    title: 'Default list title',
    icon: <CheckCircleFilled style={{ fontSize: '36px', color: '#f42f54' }} />,
    content: 'Default list content 1'
  },
  {
    title: 'Default list title',
    icon: <CheckCircleFilled style={{ fontSize: '36px', color: '#f42f54' }} />,
    content: 'Default list content 2'
  }
];
