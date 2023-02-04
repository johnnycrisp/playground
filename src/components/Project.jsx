import React, { useRef } from "react";
import { useEffect } from "react";
import snoopy from "../images/icon.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Project = () => {
  const projectRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".content__wrapper", {
        opacity: 0,
        yPercent: 5,
        duration: 2,
        delay: 0.3,
        scrollTrigger: {
          trigger: "img",
          start: "top bottom-=100px",
          toggleActions: "play none none reverse",
          markers: true,
        },
      });
    }, projectRef);
    return () => ctx.revert;
  }, []);

  return (
    <section ref={projectRef} className="project">
      <div className="content__wrapper">
        <img src={snoopy} alt="icon" />
        <h3>PROJECT TITLE</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
          doloribus pariatur labore alias dolorem magnam quae consequuntur
          incidunt magni exercitationem!
        </p>
        <button>CLICK ME</button>
      </div>
    </section>
  );
};

export default Project;
