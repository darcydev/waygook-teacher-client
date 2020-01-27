import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Row, Col, Card, Typography } from 'antd';
import { CheckCircleFill } from '@ant-design/icons';

import SectionHeading from '../components/DataDisplay/Headings/SectionHeading';
import BlockQuote from '../components/DataDisplay/BlockQuote';
import SimpleList from '../components/DataDisplay/Lists/SimpleList';
import SimpleButton from '../components/UI/SimpleButton';
import Process from '../components/Navigation/Steps/Process';

import Banner from '../sections/Banner';

const { Title } = Typography;

export default function Home() {
  return (
    <Page>
      <section className="hero">
        <Row
          className="content flex-container-md"
          style={{ margin: 'auto', alignItems: 'center' }}
        >
          <Col md={12} sm={24}>
            <Title>WaygookTeacher</Title>
            <Title level={4}>
              The platform to connect Korean students with expert English
              teachers
            </Title>
            <Link to="/register">
              <SimpleButton text="Start learning" />
            </Link>
          </Col>
          <Col md={12} sm={24}>
            <img src="images/education/class.png" alt="class" />
          </Col>
        </Row>
      </section>
      {/* QUOTE */}
      <Banner
        content={
          <BlockQuote
            styles={{ color: 'white' }}
            quote="Through my education, I didn't just develop skills, I didn't just
            develop the ability to learn, but I developed confidence."
            author="Michelle Obama"
          />
        }
      />
      {/* ADVANTAGES */}
      <section>
        <div className="container">
          <SectionHeading
            heading="Why join us?"
            subHeading="The reasons to join WaygookTeacher"
          />
          <Row
            className="content flex-container-md"
            type="flex"
            justify="center"
          >
            <Col span={12} style={{ alignSelf: 'center' }}>
              <img src="images/education/class.png" alt="class" />
            </Col>
            <Col span={12} style={{ alignSelf: 'center', padding: '20px 0' }}>
              <SimpleList
                data={[
                  {
                    title: 'Expert teachers',
                    icon: <CheckCircleFill />,
                    content:
                      'we verify teachers to ensure that you have the most professional teachers'
                  },
                  {
                    title: 'Convenient learning',
                    icon: <CheckCircleFill />,
                    content:
                      'take lessons over video anytime that suits you: at the office, or in the comfort of your home'
                  },
                  {
                    title: 'Targeted learning',
                    icon: <CheckCircleFill />,
                    content:
                      'Focus on the skills you need most, whether it be professional, educational or personal life'
                  }
                ]}
              />
            </Col>
          </Row>
        </div>
      </section>
      {/* HOW IT WORKS */}
      <section>
        <div className="container">
          <SectionHeading heading="How it works" />
          <Row
            className="content flex-container-md"
            type="flex"
            justify="center"
          >
            <Col span={12} style={{ alignSelf: 'center' }}>
              <img src="images/education/class.png" alt="class" />
            </Col>
            <Col span={12} style={{ alignSelf: 'center', padding: '20px 0' }}>
              <Process
                direction="vertical"
                data={[
                  {
                    title: 'Search',
                    description: 'Find your perfect teacher'
                  },
                  {
                    title: 'Book a lesson',
                    description: 'Schedule at a time that suits you best'
                  },
                  { title: 'Learn', description: 'Learn over video call' },
                  { title: 'Review', description: 'Review your teacher' }
                ]}
              />
            </Col>
          </Row>
        </div>
      </section>
      <Banner
        content={
          <>
            <Title className="title" level={2}>
              Still not convinced?
            </Title>
            <Link to="/register">
              <SimpleButton text="Free lesson" />
            </Link>
          </>
        }
      />
      {/* TESTIMONALS */}
      <section>
        <div className="container">
          <SectionHeading
            heading="Testimonals"
            subHeading="Our success stories"
          />
          <Row type="flex" justify="space-around" gutter={[24, 24]}>
            <Col sm={12} md={7}>
              <Card title="Default size card" style={cardStyle}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
            <Col sm={12} md={7}>
              <Card title="Default size card" style={cardStyle}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
            <Col sm={12} md={7}>
              <Card title="Default size card" style={cardStyle}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    </Page>
  );
}

const Page = styled.div``;

const cardStyle = {
  width: 200,
  textAlign: 'center'
};
