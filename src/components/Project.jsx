import React, { useRef } from "react";
import { useEffect } from "react";
import snoopy from "../images/icon.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";

const Project = () => {
  const ProjectStyles = styled.article`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .content__wrapper {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
      justify-content: center;
      max-width: 80%;

      img {
        border-radius: 50%;
        height: 300px;
      }
    }
  `;
  const projectRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".content__wrapper", {
        opacity: 0,
        yPercent: 5,
        duration: 2,
        delay: 0.5,
        scrollTrigger: {
          trigger: "img",
          start: "top bottom-=100px",
          toggleActions: "play none none reverse",
        },
      });
    }, projectRef);
    return () => ctx.revert;
  }, []);

  return (
    <>
      <ProjectStyles ref={projectRef}>
        <div className="content__wrapper">
          <img src={snoopy} alt="icon" />
          <h3>PROJECT TITLE</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repudiandae doloribus pariatur labore alias dolorem magnam quae
            consequuntur incidunt magni exercitationem!
          </p>
          <button>CLICK ME</button>
        </div>
      </ProjectStyles>
    </>
  );
};

export default Project;
