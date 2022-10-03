import React from "react";
import styled from "styled-components";
import { roadMapData } from "../constants";
const RoadMap = () => {
  return (
    <Section id="learn" className="flex flex-column flex-gap">
      <div className="title-container text-align-center">
        <div className="sub-title subdue">
          <h3>RoadMap</h3>
        </div>
        <div className="title">
          <h2>How Investing Can Change Your Future</h2>
        </div>
      </div>
      <div className="map-container flex flex-gap">
        {roadMapData.map(({ date, name, description, icon }, index) => {
          return (
            <div
              key={index}
              className="map flex flex-column align-starting flex-gap-1"
            >
              <div className="map-icon flex justify-centered align-center">
                {icon}
              </div>
              <h3 className="date">{date}</h3>
              <h3 className="name">{name}</h3>
              <p className="description subdue">{description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

const Section = styled.section`
  .map-container {
    overflow-x: scroll;
    overflow-y: hidden;
    padding-bottom: 4rem;

    &::-webkit-scrollbar {
      height: 3px;
    }

    .map {
      min-width: 300px;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        top: 1.3rem;
        left: 1.3rem;
        width: 120%;
        height: 100%;
        z-index: -1;
        border-top: 3px solid #fff;
        opacity: 0.5;
      }
      .map-icon {
        background-color: var(--roadMap-icon);
        padding: 0.5rem;
        border-radius: 100%;

        svg {
          font-size: 1.5rem;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 2rem;
    .map-container {
      overflow: initial;
      padding-bottom: 2rem;
      .map {
        min-width: 100%;
      }
      .map::after {
        border-top: none;
      }
    }
  }
`;

export default RoadMap;
