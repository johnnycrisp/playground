import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/main.scss";
import Layout from "../components/Layout";
import SectionVertical from "../components/SectionVertical/SectionVertical";
import SectionHorizontal from "../components/SectionHorizontal/SectionHorizontal";

const Scroller = () => {
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
      <div className="scroller__wrapper">
        <SectionVertical title="Header" />
        <SectionVertical title="Header 2" />
        <SectionHorizontal />
        <SectionVertical title="Header 4" />
      </div>
    </Layout>
  );
};

export default Scroller;
