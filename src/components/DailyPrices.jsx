import React from "react";
import styled from "styled-components";
import { PricesData } from "../constants";

const DailyPrices = () => {
  const getPriceChangeClassName = (change) => {
    const changeNum = change[0];
    if (changeNum === "+") return "green";
    else if (changeNum === "-") return "red";
    else return;
  };

  return (
    <Section id="dashboard" className="flex flex-column flex-gap-2">
      <div className="container">
        <div className="header subdue">
          <span>#</span>
          <span>Name</span>
          <span>Price</span>
          <span>Change</span>
          <span>Market Cap</span>
          <span>Chart</span>
        </div>
        <div className="data flex flex-column flex-gap-1">
          {PricesData.map(
            (
              { name, image, short, price, change, marketCap, chart },
              index
            ) => {
              return (
                <div key={price} className="row align-center">
                  <span>{index + 1}</span>
                  <div className="name flex flex-gap-1 align-center">
                    <span className="image">
                      <img src={image} alt={name} />
                    </span>
                    <span>{name}</span>
                    <span className="short subdue">{short}</span>
                  </div>
                  <span>{price}</span>
                  <span className={getPriceChangeClassName(change)}>
                    {change}
                  </span>
                  <span>{marketCap}</span>
                  <span className="chart">
                    <img src={chart} alt="" />
                  </span>
                </div>
              );
            }
          )}
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  background-color: #ffffff10;
  border-radius: 1rem;

  .header {
    border-bottom: 1px solid #ffffff42;
    padding: 1rem;
  }
  .header,
  .data > .row {
    display: grid;
    grid-template-columns: 0.5fr 2fr 1fr 1fr 1fr 0.5fr;
  }
  .data {
    padding: 1rem 2rem 2rem 2rem;

    .row {
      .name {
        display: flex;
      }
    }
  }
  .green {
    color: var(--green);
  }
  .red {
    color: var(--red);
  }

  span {
    display: block;
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    max-width: 92vw;
    overflow-y: auto;
    ::-webkit-scrollbar {
      height: 2px;
    }
    .container {
      width: 665px;
      .header {
      }
      .name {
        flex-direction: row;
      }
    }
  }
`;

export default DailyPrices;
