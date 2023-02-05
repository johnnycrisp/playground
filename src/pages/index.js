import React from "react";
import { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import "../styles/main.scss";
import gsap from "gsap";
import snoopy from "../images/icon.png";
import styled from "styled-components";

const IndexPage = () => {
  const [again, setAgain] = useState(false);
  const timeline = gsap.timeline({ ease: "power2.out" });
  const homeRef = useRef(null);
  const HomeWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-top: 4rem;

    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      height: 100vh;
    }

    h1 {
      font-size: 5rem;
    }

    button {
      width: fit-content;
      background-color: none;
      cursor: pointer;
    }
  `;

  useEffect(() => {
    let ctx = gsap.context(() => {
      timeline
        .fromTo(
          "h1",
          {
            xPercent: -100,
            autoAlpha: 0,
          },
          {
            duration: 1.2,
            xPercent: 0,
            autoAlpha: 1,
          }
        )
        .fromTo(
          "section ul li",
          {
            x: -40,
            autoAlpha: 0,
          },
          { stagger: 0.2, duration: 0.6, x: 0, autoAlpha: 1 }
        );
    }, homeRef);
    return () => ctx.revert;
  }, [again]);

  return (
    <Layout>
      {/* <Loader /> */}
      <HomeWrapper ref={homeRef} className="home__content">
        <section className="hero">
          <h1>PLAYGROUND</h1>
          <ul>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
          </ul>
          <button onClick={() => setAgain((again) => !again)}>Again</button>
        </section>
      </HomeWrapper>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
