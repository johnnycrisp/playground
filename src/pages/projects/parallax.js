import React, { useLayoutEffect, useRef } from "react";
import Layout from "../../components/Layout";
import River from "../../images/river.png";
import Snoopy from "../../images/icon.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";

const Parallax = () => {
  gsap.registerPlugin(ScrollTrigger);
  const parallaxRef = useRef(null);

  const SectionStyles = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .hero__content {
      max-width: 40%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      text-align: center;

      h1 {
        font-size: 4rem;
      }

      img {
        height: 300px;
      }
    }
  `;

  const ParallaxStyles = styled.section`
    .parallax {
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
        height: 150%;
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
    }
  `;

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const parallaxTl = gsap.timeline({
        ease: "none",
        scrollTrigger: {
          trigger: ".parallax",
          start: "top bottom-=200",
          markers: true,
          toggleActions: "play none none reverse",
        },
      });

      parallaxTl
        .addLabel("TIMELINE")
        .from(
          ".parallax__content",
          {
            duration: 1,
            autoAlpha: 0,
          },
          0.6
        )
        .from(
          ".bcg__parallax",
          {
            y: "-40%",
            duration: 2,
          },
          0
        );
    }, parallaxRef);
    return () => ctx.revert;
  }, []);

  return (
    <Layout>
      <SectionStyles>
        <div className="hero__content">
          <h1>SCROLL FOR PARALLAX</h1>
          <img src={Snoopy} alt="icon" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dicta,
            voluptatem, eligendi, ducimus odit nihil ea quia enim quas veniam
            quis fuga consequuntur iure hic amet? Quidem quae mollitia officia.
          </p>
        </div>
      </SectionStyles>
      <ParallaxStyles ref={parallaxRef}>
        <div className="parallax">
          <div
            className="bcg__parallax"
            style={{ background: `url(${River})` }}
          ></div>
          <div className="parallax__content">
            <h3>HELLO AGAIN</h3>
          </div>
        </div>
      </ParallaxStyles>
      <SectionStyles>
        <div>Fin</div>
      </SectionStyles>
    </Layout>
  );
};

export default Parallax;
