import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Row, Col, Icon, Typography } from 'antd';

import SectionHeading from '../components/DataDisplay/Headings/SectionHeading';
import BlockQuote from '../components/DataDisplay/BlockQuote';
import SimpleList from '../components/DataDisplay/Lists/SimpleList';
import SimpleButton from '../components/UI/SimpleButton';
import Process from '../components/Navigation/Steps/Process';
import CarouselCards from '../components/DataDisplay/Carousel/CarouselCards';
import Banner from '../sections/Banner';

const { Title } = Typography;

export default function Home() {
  return (
    <Page className="">
      <section className="hero">
        <Row
          className="content flex-container-md"
          style={{ margin: 'auto', alignItems: 'center' }}
        >
          <Col span={12}>
            <Title>WaygookTeacher</Title>
            <Title level={4}>
              The platform to connect Korean students with expert English
              teachers
            </Title>
            <Link to="/register">
              <SimpleButton text="Start learning" />
            </Link>
          </Col>
          <Col span={12}>
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
                    icon: (
                      <Icon
                        type="check-circle"
                        style={{ fontSize: '36px', color: '#f42f54' }}
                      />
                    ),
                    content:
                      'we verify teachers to ensure that you have the most professional teachers'
                  },
                  {
                    title: 'Convenient learning',
                    icon: (
                      <Icon
                        type="check-circle"
                        style={{ fontSize: '36px', color: '#f42f54' }}
                      />
                    ),
                    content:
                      'take lessons over video anytime that suits you: at the office, or in the comfort of your home'
                  },
                  {
                    title: 'Targeted learning',
                    icon: (
                      <Icon
                        type="check-circle"
                        style={{ fontSize: '36px', color: '#f42f54' }}
                      />
                    ),
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
            <Title level={2} style={{ color: 'white' }}>
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
          <CarouselContainer className="content">
            <CarouselCards />
          </CarouselContainer>
        </div>
      </section>
    </Page>
  );
}

const Page = styled.div``;

const CarouselContainer = styled.div`
  max-width: 500px;
  text-align: center;
  margin: auto;
`;

/* 



section className="hero">
        <div className="hero-left-decoration is-revealing" />
        <div className="hero-right-decoration is-revealing" />
        <div className="container">
          <div className="hero-inner">
            <div className="hero-copy">
              <h1 className="hero-title mt-0 is-revealing">
                Welcome to WaygookTeacher
              </h1>
              <p className="hero-paragraph is-revealing">
                The platform to connect Korean students with expert English
                teachers.
              </p>
              <p className="hero-cta mb-0 is-revealing">
                <a
                  className="button button-primary button-shadow"
                  href="#"
                  data-toggle="modal"
                  data-target="#modalLRForm"
                >
                  Start learning
                </a>
              </p>
            </div>
            <div className="hero-illustration"></div>
          </div>
        </div>
      </section>
      <section className="quote section">
        <div className="container">
          <blockquote className="blockquote">
            Through my education, I didn't just develop skills, I didn't just
            develop the ability to learn, but I developed confidence.
          </blockquote>
          <p
            className="blockquote"
            style={{ fontStyle: "italic", textAlign: "right" }}
          >
            {" "}
            - Michelle Obama
          </p>
        </div>
      </section>
      <section className="features section text-center">
        <div className="container">
          <div className="features-inner section-inner has-top-divider">
            <div className="features-header text-center">
              <div className="container-sm">
                <h2 className="section-title mt-0">
                  Education broadens the mind
                </h2>
                <p className="section-paragraph mb-0" />
              </div>
            </div>
            <div className="features-wrap">
              <div className="feature is-revealing">
                <div className="feature-inner">
                  <div className="feature-icon">
                    <img
                      src="https://img.icons8.com/clouds/80/000000/medal.png"
                      alt="medal-icon"
                    />
                  </div>
                  <h4 className="feature-title">Expert teachers</h4>
                  <p className="text-sm">
                    we verify teachers' to ensure that you have access to
                    high-quality English teachers
                  </p>
                </div>
              </div>
              <div className="feature is-revealing">
                <div className="feature-inner">
                  <div className="feature-icon">
                    <img
                      src="https://img.icons8.com/office/80/000000/globe.png"
                      alt="globe-icon"
                    />
                  </div>
                  <h4 className="feature-title">Learn at your convience</h4>
                  <p className="text-sm">
                    Take video lessons anytime that suits you. At the office, or
                    in the comfort of your home.
                  </p>
                </div>
              </div>
              <div className="feature is-revealing">
                <div className="feature-inner">
                  <div className="feature-icon">
                    <img
                      src="https://img.icons8.com/cotton/80/000000/personal-growth.png"
                      alt="personal-growth-icon"
                    />
                  </div>
                  <h4 className="feature-title">Boost your skills</h4>
                  <p className="text-sm">
                    Focus on the skills you need to succeed in your educational,
                    professional, or personal life.
                  </p>
                </div>
              </div>
              <div className="feature is-revealing">
                <div className="feature-inner">
                  <div className="feature-icon">
                    <img
                      src="https://img.icons8.com/officel/80/000000/talk-female.png"
                      alt="speaking-icon"
                    />
                  </div>
                  <h4 className="feature-title">Speak naturally</h4>
                  <p className="text-sm">
                    Learn from native speakers to speak with confidence and
                    natural English
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="features-tabs section">
        <div className="container">
          <div className="features-tabs-inner section-inner has-top-divider">
            <div className="features-header text-center">
              <div className="container-sm">
                <h2 className="section-title mt-0">How it works</h2>
                <p className="section-paragraph mb-0" />
              </div>
            </div>
            <div className="tabs-container">
              <ul className="tabs-links">
                <li className="is-revealing">
                  <a href="#tab-1" className="tab-link is-active">
                    <img
                      src="https://img.icons8.com/dusk/64/000000/search.png"
                      alt="search-icon"
                    />
                    <span className="h4 m-0">Find the perfect teacher</span>
                  </a>
                </li>
                <li className="is-revealing">
                  <a href="#tab-2" className="tab-link">
                    <img
                      src="https://img.icons8.com/cute-clipart/64/000000/overtime.png"
                      alt="schedule-icon"
                    />
                    <span className="h4 m-0">Schedule a lesson</span>
                  </a>
                </li>
                <li className="is-revealing">
                  <a href="#tab-3" className="tab-link">
                    <img
                      src="https://img.icons8.com/cute-clipart/64/000000/skype.png"
                      alt="skype-icon"
                    />
                    <span className="h4 m-0">Have a lesson on Skype</span>
                  </a>
                </li>
              </ul>
              <div className="tabs-content">
                <div id="tab-1" className="tab-panel is-active">
                  <h2>Search</h2>
                  <p>
                    WaygookTeacher has many teachers, from around the world, for
                    you to choose from. So that, you're able to find a teacher
                    that is perfect for you!
                  </p>
                  <p className="mb-0">
                    By searching for nationality, level of experience, education
                    level, gender, and price. So that, you can ensure you find
                    the perfect tutor for you.
                  </p>
                </div>
                <div id="tab-2" className="tab-panel">
                  <h2>Schedule</h2>
                  <p>
                    We all have busy lives and busy schedules, that's why
                    WaygookTeacher has built a platform that allows you to learn
                    at anytime that suits you best.
                  </p>
                  <p className="mb-0">
                    Schedule a lesson with your teacher at a convenient time for
                    you. WaygookTeacher has teachers from around the world, so
                    no matter your schedule, you'll be have lessons at a time
                    that suits you best.
                  </p>
                </div>
                <div id="tab-3" className="tab-panel">
                  <h2>Skype</h2>
                  <p>
                    WaygookTeacher uses to Skype as a platform to conduct
                    lessons, to ensure that all our students can focus on
                    learning and not on technical issues.
                  </p>
                  <p className="mb-0">
                    Once the lesson is complete, you are able to confirm the
                    lesson on the WaygookTeacher platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta section">
        <div className="container">
          <div className="cta-inner section-inner is-revealing">
            <h3 className="section-title mt-0">Still not convinced?</h3>
            <div className="cta-cta">
              <a
                className="button button-primary button-shadow"
                href="#"
                data-toggle="modal"
                data-target="#modalLRForm"
              >
                Schedule a free trial lesson
              </a>
            </div>
          </div>
        </div>
      </section>
*/
