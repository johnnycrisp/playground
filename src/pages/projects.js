import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/main.scss";
import Layout from "../components/Layout";
import Project from "../components/Project";
import styled from "styled-components";

const Projects = () => {
  const ProjectWrapper = styled.section`
    h2 {
      text-align: left;
      font-size: 5rem;
      padding-top: 2rem;
      padding-bottom: 0.4rem;
      margin-bottom: 4rem;
      position: relative;
      width: fit-content;
      --width: 0%;
      &::after {
        content: "";
        position: absolute;
        width: var(--width);
        transform: scaleX(1);
        height: 4px;
        bottom: 0;
        left: 0;
        background-color: #000;
      }
    }
    .wrapper {
      display: grid;
      gap: 3rem;
      grid-template-columns: repeat(3, 1fr);
    }
  `;

  const ProjectPageWrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  gsap.registerPlugin(ScrollTrigger);

  const executeScroll = () => projectsHead.current.scrollIntoView();

  const pageRef = useRef(null);
  const projectsHead = useRef(null);

  useEffect(() => {
    gsap.from(pageRef.current, {
      autoAlpha: 0,
      x: "-50vw",
      duration: 1,
      delay: 0.5,
    });

    gsap.from(projectsHead.current, {
      autoAlpha: 0,
      delay: 0.7,
      duration: 1,
      scrollTrigger: {
        trigger: document.querySelector("h2"),
        start: "top bottom-=200px",
        toggleActions: "play none none reverse",
      },
    });

    gsap.to(projectsHead.current, {
      delay: 0.9,
      duration: 1,
      "--width": "100%",
      scrollTrigger: {
        trigger: document.querySelector("h2"),
        labels: "h2",
        start: "top bottom-=200px",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <Layout>
      <ProjectPageWrapper ref={pageRef}>
        <button onClick={executeScroll}>
          <h1>CLICK ME &darr;</h1>
        </button>
      </ProjectPageWrapper>

      <ProjectWrapper>
        <h2 ref={projectsHead} id="#projects">
          PROJECTS
        </h2>
        <div className="wrapper">
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </ProjectWrapper>
    </Layout>
  );
};

export default Projects;

export const Head = () => <title>Projects</title>;
