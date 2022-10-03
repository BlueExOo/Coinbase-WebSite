import React from "react";
import styled from "styled-components";
import card from "../assets/card.png";
import signupBackground from "../assets/signupBackground.png";

const SignUp = () => {
  return (
    <Section className="flex flex-gap justify-space">
      <div className="content text-align-center">
        <h2>Sign up without any bank account linking and card</h2>
      </div>
      <div className="image">
        <img src={card} alt="card" />
      </div>
    </Section>
  );
};

const Section = styled.section`
  background-image: url(${signupBackground});
  background-position: center;
  background-size: contain;
  margin: 0;
  margin-bottom: 8rem;
  max-width: 100vw;
  overflow: hidden;

  .content {
    padding: 10rem;

    h2 {
      font-size: 2.5rem;
    }
  }

  .image {
    img {
      height: 100%;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-bottom: 2rem;
    .content {
      padding: 2rem;
      h2 {
        font-size: 1.5rem;
      }
    }
    .image {
      display: none;
    }
  }
`;

export default SignUp;
