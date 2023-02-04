import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/main.scss";
import Layout from "../components/Layout";
import Loader from "../components/Loader/Loader";
import snoopy from "../images/icon.png";
import Project from "../components/Project";

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from("section h1", {
      autoAlpha: 0,
      x: "-50vw",
      duration: 1,
      delay: 0.5,
    });

    gsap.from("h2", {
      autoAlpha: 0,
      delay: 0.7,
      duration: 1,
      scrollTrigger: {
        trigger: document.querySelector("h2"),
        start: "top bottom-=200px",
        toggleActions: "play none none reverse",
        markers: true,
      },
    });

    gsap.to("h2", {
      delay: 0.9,
      duration: 1,
      "--width": "100%",
      scrollTrigger: {
        trigger: document.querySelector("h2"),
        labels: "h2",
        start: "top bottom-=200px",
        toggleActions: "play none none reverse",
        markers: true,
      },
    });
  }, []);

  return (
    <Layout>
      <section>
        <a href="#projects">
          <h1>CLICK ME &darr;</h1>
        </a>
      </section>
      <h2 id="projects">PROJECTS</h2>
      <div className="projects__wrapper">
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
    </Layout>
  );
};

export default Projects;

export const Head = () => <title>Projects</title>;
