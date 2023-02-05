import React, { useLayoutEffect } from "react";
import Layout from "../components/Layout";
import River from "../images/river.png";
import Snoopy from "../images/icon.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";

const Parallax = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ParallaxStyles = styled.section`
    position: relative;
    overflow: hidden;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .bcg__parallax {
      opacity: 0.5;
      background-size: cover;
      position: absolute;
      width: 100%;
      height: 200%;
      z-index: 1;
      top: 0;
      opacity: 0.7;
    }

    .parallax__content {
      z-index: 2;
      position: relative;
      width: 90%;
      text-align: center;
      opacity: 1;

      h2 {
        font-size: 3rem;
      }

      p {
        font-size: 2rem;
      }
    }
  `;

  useLayoutEffect(() => {
    // gsap.to("section img", {
    //   rotate: 90,
    //   scrollTrigger: {
    //     start: "top top",
    //     end: "+=50%",
    //     scrub: true,
    //     markers: true,
    //   },
    // });

    const parallaxTl = gsap.timeline({
      ease: "none",
      scrollTrigger: {
        trigger: ".parallax",
        start: "top bottom-=200px",
        scrub: true,
        markers: true,
      },
    });

    parallaxTl
      .from(
        ".parallax__content",
        {
          duration: 0.5,
          autoAlpha: 0,
        },
        0.5
      )
      .from(
        ".bcg__parallax",
        {
          y: "-50%",
          duration: 2,
        },
        0
      );
  }, []);

  return (
    <Layout>
      <section>
        <h1>Hello</h1>
        <img src={Snoopy} alt="icon" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dicta,
          voluptatem, eligendi, ducimus odit nihil ea quia enim quas veniam quis
          fuga consequuntur iure hic amet? Quidem quae mollitia officia.
        </p>
      </section>
      <ParallaxStyles className="parallax">
        <div
          className="bcg__parallax"
          style={{ background: `url(${River})` }}
        ></div>
        <div className="parallax__content">
          <h3>HELLO AGAIN</h3>
        </div>
      </ParallaxStyles>
      <section>
        <div>Fin</div>
      </section>
    </Layout>
  );
};

export default Parallax;
