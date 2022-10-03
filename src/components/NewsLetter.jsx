import React from "react";
import styled from "styled-components";
import { AiOutlineMail } from "react-icons/ai";
import Button from "./Button";

const NewsLetter = () => {
  return (
    <Section className="flex justify-space align-center flex-gap">
      <div className="title-container flex flex-column flex-gap-1">
        <h2>Newsletter</h2>
        <h3>Get now free 20% discount for all products on your first order</h3>
      </div>
      <div className="newsletter-container flex justify-centered align-center flex-gap-2">
        <div className="input-container flex justify-centered align-center flex-gap-1">
          <AiOutlineMail />
          <input type="text" placeholder="Enter your email address" />
        </div>
        <Button text="Subscribe" />
      </div>
    </Section>
  );
};

const Section = styled.section`
  margin: 0;
  margin-bottom: 8rem;
  background-color: var(--dark-background);
  padding: 8rem;

  .newsletter-container {
    .input-container {
      background-color: var(--input-background);
      padding: 1rem;
      padding-right: 8rem;
      border-radius: 0.5rem;
      font-size: 1.5rem;
      color: #fff;

      input {
        background-color: transparent;
        border: none;
        font-size: 1.5rem;
        color: #fff;

        &::placeholder {
          color: #ffffff25;
        }

        &:focus {
          border: none;
          outline: none;
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 2rem;
    margin-bottom: 2rem;
    .newsletter-container {
      .input-container {
        flex-direction: row;
        padding-right: 1rem;
        input {
        }
      }
    }
  }
`;

export default NewsLetter;
