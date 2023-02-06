import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styles/main.scss";
import Layout from "../../components/Layout";
import SectionVertical from "../../components/SectionVertical/SectionVertical";
import SectionHorizontal from "../../components/SectionHorizontal/SectionHorizontal";
import styled from "styled-components";

const Scroller = () => {
  const ScrollerStyles = styled.div`
    .wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    .header {
      background-color: lightgray;
    }
    .first {
      background-color: lightyellow;
    }
    .second {
      background-color: lightblue;
    }

    .scroller__wrapper {
      body {
        overflow-x: hidden;
        background-color: #1b2b34;
      }

      .section {
        height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 5vw;
        box-sizing: border-box;
      }

      .section__cards {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 100%;
        flex-shrink: 0;
      }

      .section__card {
        background-color: coral;
        border-radius: 30px;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        flex-shrink: 0;
        justify-content: center;

        & + .section__card {
          margin-left: 5vw;
        }
      }

      .section__title {
        color: #1b2b34;
      }

      .section[data-type="horizontal"] {
        overflow-x: hidden;
      }
    }
  `;

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.utils.toArray(".section").forEach((section) => {
      // Check if section has horizontal scrolling
      if (section.dataset.type === "horizontal") {
        const cards = section.querySelector(".section__cards");
        const card = section.querySelector(".section__card");

        gsap.to(cards, {
          x: () => {
            return -cards.scrollWidth + card.offsetWidth;
          },
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: () => "center center",
            end: () => `+=${cards.scrollWidth - card.offsetWidth}`,
            scrub: true,
            pin: true,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
        // Use standard vertical scroll pinning
      } else {
        ScrollTrigger.create({
          trigger: section,
          start: () => "top top",
          pin: true,
          anticipatePin: 1,
        });
      }
    });
  }, []);

  return (
    <Layout>
      <ScrollerStyles>
        <div className="scroller__wrapper">
          <SectionVertical title="Header" />
          <SectionVertical title="Header 2" />
          <SectionHorizontal />
          <SectionVertical title="Header 4" />
        </div>
      </ScrollerStyles>
    </Layout>
  );
};

export default Scroller;
