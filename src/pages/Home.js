import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import SimpleButton from "../components/UI/SimpleButton";
import BlockQuote from "../components/DataDisplay/BlockQuote";

export default function Home() {
  return (
    <Page className="page">
      <section className="hero">
        <h1>Welcome to WaygookTeacher</h1>
        <h5>
          The platform to connect Korean students with expert English teachers
        </h5>
        <Link to="/register">
          <SimpleButton text="Start learning" />
        </Link>
      </section>
      <section>
        <div className="container">
          <BlockQuote
            quote="Through my education, I didn't just develop skills, I didn't just
            develop the ability to learn, but I developed confidence."
            author="Michelle Obama"
          />
        </div>
      </section>
    </Page>
  );
}

const Page = styled.div``;

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
