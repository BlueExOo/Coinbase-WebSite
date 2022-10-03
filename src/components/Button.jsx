import React from "react";
import styled from "styled-components";

const Button = ({ text, icon = false, subduedButton = false }) => {
  return (
    <Div className="flex align-center justify-centered">
      {icon ? (
        <button
          className={`flex align-center justify-centered flex-gap-1 ${
            subduedButton ? "subduedBtn" : ""
          }`}
        >
          {text}
          {icon}
        </button>
      ) : (
        <button className={`${subduedButton ? "subduedBtn" : ""}`}>
          {text}
        </button>
      )}
    </Div>
  );
};

const Div = styled.div`
  button {
    padding: 0.7rem 1.3rem;
    background-color: var(--blue);
    color: var(--white);
    border: none !important;
    outline: none !important;
    border-radius: 0.5rem !important;
    font-size: 1rem !important;
    cursor: pointer; // cursor position  on mouse over button
  }

  .subduedBtn {
    background-color: var(--subdue-button);
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: row;
    button {
      flex-direction: row;
    }
  }
`;

export default Button;
