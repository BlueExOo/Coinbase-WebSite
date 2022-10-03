import React from "react";
import styled from "styled-components";
import { servicesData } from "../constants";

const Services = () => {
  return (
    <Section
      id="FAQ"
      className="flex flex-column justify-centered align-center flex-gap"
    >
      <div className="title-container flex flex-column flex-gap-1">
        <div className="title text-align-center">
          <h2>Start your trading with us</h2>
        </div>
        <div className="sub-title text-align-center subdue">
          <h3>
            Market Watchmen has a variety of features that make it the best
            place to start trading
          </h3>
        </div>
      </div>
      <div className="services flex justify-centered align-center flex-gap">
        {servicesData.map(({ image, title, description }, index) => {
          return (
            <div
              className="service text-align-center flex flex-column flex-gap-1"
              key={index}
            >
              <div className="image-container">
                <img src={image} alt={title} />
              </div>
              <h3 className="title">{title}</h3>
              <p className="description subdue">{description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

const Section = styled.section`
  .services {
    padding: 0 5rem;
    gap: 10rem;

    .service {
      .title {
        font-size: 1.5rem;
        font-weight: bold;
      }
      .description {
        font-size: 1rem;
        font-weight: bold;
        line-height: 1.8rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .services {
      padding: 2rem;
      gap: 3rem;
    }
  }
`;

export default Services;
