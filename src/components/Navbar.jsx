import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";
import Button from "./Button";

const Navbar = () => {
  const links = ["home", "dashboard", "about", "FAQ", "learn", "contact"];
  const [isNavOpen, setIsNavOpen] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", (e) => setIsNavOpen(false));

  return (
    <Nav state={isNavOpen ? 1 : 0} className="flex justify-space align-center">
      <div className="brand">
        <a className="brand-heading" href="#">
          coinbase
        </a>
      </div>
      <div className="toggle">
        {isNavOpen ? (
          <MdClose onClick={() => setIsNavOpen(false)} />
        ) : (
          <GiHamburgerMenu
            onClick={(e) => {
              e.stopPropagation();
              setIsNavOpen(true);
            }}
          />
        )}
      </div>
      <div className={`links ${isNavOpen ? "show" : ""}`}>
        <ul className="flex flex-gap-2">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link}`}>{link}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="auth flex flex-gap-1">
        <Button text={"sign in"} subduedButton></Button>
        <Button text={"sign up"}></Button>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  margin: 3rem 5rem;
  .brand {
    a {
      font-size: 3rem;
      font-weight: 900;
      cursor: pointer;
    }
  }
  .toggle {
    display: none;
  }
  .links {
    ul {
      list-style: none;
      font-weight: bolder;

      li {
        cursor: pointer;
        &:first-of-type {
          a {
            opacity: 1 !important;
          }
        }

        a {
          opacity: 0.7 !important;
          transition: 0.5s ease-in-out;
          &:hover {
            opacity: 1 !important;
          }
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 3rem 1rem;
    margin: 0;
    position: relative;
    z-index: 5;
    flex-direction: row;
    .brand {
      a {
        font-size: 2rem;
      }
    }
    .toggle {
      padding-right: 1rem;
      display: block;
      z-index: 51;
      svg {
        color: #2d69fd;
        font-size: 2rem;
      }
    }
    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }
    .links {
      z-index: 10;
      position: fixed;
      overflow-x: hidden;
      top: 0;
      right: 0;
      width: ${({ state }) => (state ? "60%" : "0%")};
      height: 100vh;
      background-color: white;
      opacity: 0;
      visibility: hidden;
      transition: 0.7s ease-in-out;
      ul {
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;
        li {
          a {
            color: #2d69fd;
          }
        }
      }
    }
    .auth {
      display: none;
    }
  }
`;

export default Navbar;
