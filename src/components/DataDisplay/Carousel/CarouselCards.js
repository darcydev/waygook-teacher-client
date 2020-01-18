import React from 'react';
import styled from 'styled-components';
import { Carousel, Card } from 'antd';

const { Meta } = Card;

export default function CarouselCards({
  autoplay = true,
  cardData = defaultCardData
}) {
  const CARD_MARKUP = cardData.map((v, i) => (
    <Card
      key={`${i}: ${v}`}
      hoverable
      style={{ width: 140 }}
      cover={
        <img
          style={{ margin: 'auto' }}
          className="img-md"
          src={v.imageSrc}
          alt="card"
        />
      }
    >
      <Meta title={v.title} description={v.description} />
    </Card>
  ));

  return (
    <Container>
      <Carousel autoplay={autoplay}>{CARD_MARKUP}</Carousel>
    </Container>
  );
}

// STYLES
const Container = styled.div``;

// DEFAULT DATA
const defaultCardData = [
  {
    imageSrc: 'images/profile_pics/default.jpg',
    title: 'Jane Doe',
    description: 'This is a sample description'
  },
  {
    imageSrc: 'images/profile_pics/default.jpg',
    title: 'Tom Jones',
    description: 'This is a sample description'
  },
  {
    imageSrc: 'images/profile_pics/default.jpg',
    title: 'Alex Doe',
    description: 'This is a sample description'
  },
  {
    imageSrc: 'images/profile_pics/default.jpg',
    title: 'Jane Sam',
    description: 'This is a sample description'
  }
];
