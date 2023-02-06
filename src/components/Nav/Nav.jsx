import { Link } from "gatsby";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Nav = () => {
  const NavStyles = styled.nav`
    &.active {
      height: 4rem;
      width: 100%;
      position: fixed;
      top: 0px;
      transition: 0.3s linear;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      z-index: 40;
      box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.08);

      ul {
        display: flex;
        align-items: center;
        padding: 1rem;
        justify-content: space-between;
        width: 100%;

        li:hover {
          text-decoration: underline;
        }

        .nav__links {
          display: flex;
          gap: 1rem;
        }
      }
    }

    &.hidden {
      height: 4rem;
      width: 100%;
      z-index: 40;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.08);
      position: fixed;
      top: -80px;
      transition: 0.4s linear;
    }
  `;

  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY && window.scrollY > 40) {
        // if scroll down hide the navbar
        setHidden(true);
      } else {
        // if scroll up show the navbar
        setHidden(false);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <NavStyles className={`active ${hidden && "hidden"}`}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <div className="nav__links">
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </div>
      </ul>
    </NavStyles>
  );
};

export default Nav;
