import React from "react";
import styled from "styled-components";

import { FaChevronCircleRight } from "react-icons/fa";
import home from "../assets/home.png";
import badgePercent from "../assets/badge-percent.png";
import Button from "./Button";

const Home = () => {
  return (
    <Section id="home" className="flex justify-centered align-center flex-gap">
      <div className="content flex flex-column flex-gap-2">
        <div className="sub-title">
          <h3 className="flex align-center flex-gap-1 blue">
            <span>
              <img src={badgePercent} alt="" />
            </span>
            Investment made easy
          </h3>
        </div>
        <div className="title">
          <h1 className="">The Easies Way to Track Multiple Currencies</h1>
        </div>
        <div className="description">
          <p className="subdue">
            Market Watchman allow you tu monitor your balances, trade without,
            limits and earn rewards for specific coins.
          </p>
        </div>
        <div className="buttons flex flex-gap-1">
          <Button text="Try Now" icon={<FaChevronCircleRight />} />
          <Button text="How it works?" subduedButton />
        </div>
      </div>
      <div className="image-container">
        <img src={home} alt="" className="half-height" />
      </div>
    </Section>
  );
};

const Section = styled.section`
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .sub-title {
      h3 {
        flex-direction: row;
      }
    }
    .buttons {
      flex-direction: row;
      margin: 2rem auto;
      gap: 2rem;
    }
  }
`;

export default Home;
