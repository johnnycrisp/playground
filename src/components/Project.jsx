import React, { useRef } from "react";
import { useEffect } from "react";
import snoopy from "../images/icon.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";
import { Link } from "gatsby";

const Project = ({ slug, title, text }) => {
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

      a {
        background: transparent;
        box-shadow: none;
        border-radius: 10%;
        padding: 0.5rem;
        border: 1px solid black;
        cursor: pointer;

        &:hover {
          background-color: black;
          color: white;
        }
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
          <h3>{title ? title : "PROJECT TITLE"}</h3>
          <p>
            {text
              ? text
              : `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repudiandae doloribus pariatur labore alias dolorem magnam quae
            consequuntur incidunt magni exercitationem!`}
          </p>
          <Link to={`/projects/${slug}`}>LET'S GO</Link>
        </div>
      </ProjectStyles>
    </>
  );
};

export default Project;
