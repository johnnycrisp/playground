import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/main.scss";
import Layout from "../components/Layout";
import Loader from "../components/Loader/Loader";
import snoopy from "../images/icon.png";

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const projects = document.querySelectorAll(".project");

    projects.forEach((project) => {
      gsap.from(project, {
        opacity: 0,
        yPercent: 5,
        duration: 2,
        delay: 0.3,
        scrollTrigger: {
          trigger: project.querySelector("img"),
          start: "top bottom-=350px",
          toggleActions: "play none none reverse",
          markers: true,

          // onEnter: () => {
          //   console.log("enter");
          // },
          // onUpdate: ({ progress }) => {
          //   console.log("progress", progress.toFixed(2));
          // },
        },
      });
    });

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
        start: "top bottom-=300px",
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
        start: "top bottom-=300px",
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
        <section className="project">
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
        </section>
        <section className="project">
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
        </section>
        <section className="project">
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
        </section>
      </div>
    </Layout>
  );
};

export default Projects;

export const Head = () => <title>Projects</title>;
