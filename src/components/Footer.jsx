import React from "react";
import styled from "styled-components";
import spacemen from "../assets/spacemen.png";
import cards from "../assets/cards.png";

import { companyLinks, LearnLinks, socialIcons } from "../constants";

const Footer = () => {
  return (
    <Foot id="contact" className="flex flex-column flex-gap">
      <div className="upper-footer">
        <div className=" flex flex-column flex-gap-1">
          <div className="brand">
            <h2>Coinbase</h2>
          </div>
          <div className="address">
            <p>GymVast, 18 East 50th Street, 4th Floor, New York, NY 10022</p>
          </div>
          <div className="info">
            <span>T : +1-200-444-0188</span>
            <span>E : hello@cryptoz.com</span>
          </div>
          <div className="social-icons flex flex-gap-2">
            {socialIcons.map((icon, index) => {
              return (
                <div className="icon" key={index}>
                  {icon}
                </div>
              );
            })}
          </div>
        </div>
        <div className=" flex flex-column flex-gap-1">
          <div className="title">
            <h3>Company</h3>
          </div>
          <ul className="flex flex-column flex-gap-half">
            {companyLinks.map((link) => {
              return <li key={link}>{link}</li>;
            })}
          </ul>
        </div>
        <div className=" flex flex-column flex-gap-1">
          <div className="title">
            <h3>Learn</h3>
          </div>
          <ul className="flex flex-column flex-gap-half">
            {LearnLinks.map((link) => {
              return <li key={link}>{link}</li>;
            })}
          </ul>
        </div>
        <div className=" flex flex-column flex-gap-1">
          <div className="title">
            <h3>Company</h3>
          </div>
          <ul className="flex flex-column flex-gap-half">
            {companyLinks.map((link) => {
              return <li key={link}>{link}</li>;
            })}
          </ul>
        </div>
        <div className="col spacemen">
          <div className="image">
            <img src={spacemen} alt="spacemen" />
          </div>
        </div>
      </div>
      <div className="lower-footer flex align-center justify-space flex-gap">
        <div className="col1">
          <span>Copyright Ⓒ 2022 coinbase All Rights Reserved.</span>
        </div>
        <div className="col2 flex align-center flex-gap">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
          <span className="cards">
            <img src={cards} alt="cards" />
          </span>
        </div>
      </div>
    </Foot>
  );
};

const Foot = styled.footer`
  padding: 0rem 5rem;
  padding-bottom: 3rem;
  position: relative;

  .upper-footer {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    .social-icons {
      margin-top: 2rem;
      svg {
        font-size: 2rem;
      }
    }
    .spacemen {
      position: absolute;
      right: 0rem;
      top: -23rem;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 1rem 2rem;
    .social-icons {
      display: none;
      flex-direction: row;
    }
    .upper-footer {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    .spacemen {
      display: none;
    }
    .cards {
      img {
        width: 80vw;
      }
    }
  }
`;

export default Footer;
