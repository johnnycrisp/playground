import React from "react";
import { useLayoutEffect, useState } from "react";
import Layout from "../components/Layout";
import "../styles/main.scss";
import gsap from "gsap";
import snoopy from "../images/icon.png";

const IndexPage = () => {
  const [again, setAgain] = useState(false);
  const timeline = gsap.timeline({ ease: "power2.out" });

  useLayoutEffect(() => {
    timeline
      .from(
        "section h1",
        {
          xPercent: -100,
          opacity: 0,
          duration: 1.2,
        },
        "-0.5"
      )
      .from(
        "section ul li",
        {
          duration: 0.6,
          x: -40,
          opacity: 0,
          stagger: 0.2,
        },
        "-=0.3"
      );
  }, [again]);

  return (
    <Layout>
      {/* <Loader /> */}
      <div className="home__content">
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
        <section className="second__section">
          <h2>ANOTHER SECTION</h2>
          <div>
            <img src={snoopy} alt="icon" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              obcaecati inventore illo quod quaerat perspiciatis, saepe,
              consectetur non nostrum, impedit ipsam commodi harum. Est optio
              iure cupiditate magni harum recusandae omnis ea quo quam tenetur
              ad molestias dolorem laborum accusantium assumenda totam, at
              nesciunt corporis? Ipsam quos numquam praesentium atque.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
