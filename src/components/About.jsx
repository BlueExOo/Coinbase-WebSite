import React from "react";
import styled from "styled-components";

import { FaChevronCircleRight } from "react-icons/fa";
import about from "../assets/about.png";
import Button from "./Button";

const About = () => {
  return (
    <Section id="about" className="flex align-center flex-gap">
      <div className="content flex flex-column flex-gap">
        <div className="title-container flex flex-column justify-centered align-center flex-gap-1">
          <div className="sub-title subdue">
            <h3>About us</h3>
          </div>
          <div className="title">
            <h2>Why would You Choose Market Watchmen?</h2>
          </div>
        </div>
        <div className="content-container flex flex-gap">
          <div className="info flex flex-column flex-gap align-center justify-centered">
            <p className="subdue"> Easy To Learn Platform –</p>
            <p className="subdue">
              We won’t ask you to link to your bank accounts, we just want
              everyone to have the opportunity to understand the potential of
              saving and investing for retirement or short term goals. We simply
              do data analytics and simplify the way you look at investment
              assets
            </p>
            <Button text="Start Earning" icon={<FaChevronCircleRight />} />
          </div>
          <div className="image">
            <img src={about} alt="about" className="half-height" />
          </div>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .title-container {
      text-align: center;
    }
  }
`;

export default About;
