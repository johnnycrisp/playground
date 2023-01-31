import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SectionVertical = ({ title }) => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   useLayoutEffect(() => {
  //     gsap.to(".section__title", {
  //       y: -400,

  //       scrollTrigger: {
  //         trigger: ".section",
  //         markers: true,
  //         start: () => "top top",
  //       },
  //     });
  //   }, []);

  return (
    <section className="section">
      <div className="section__card">
        <h1 className="section__title">{title}</h1>
      </div>
    </section>
  );
};

export default SectionVertical;
