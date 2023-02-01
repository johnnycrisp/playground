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
        scrollTrigger: {
          trigger: project.querySelector("img"),
          start: "top bottom-=20%",
          toggleActions: "play none none reverse",
          markers: true,
          delay: 0.4,
          onEnter: () => {
            console.log("enter");
          },
          onUpdate: ({ progress }) => {
            console.log("progress", progress.toFixed(2));
          },
        },
      });
    });

    gsap.from("section h1", {
      autoAlpha: 0,
      delay: 0.5,
    });
  });

  return (
    <Layout>
      <div className="projects__wrapper">
        <section>
          <h1>HI.</h1>
        </section>
        <section className="project">
          <div className="content__wrapper">
            <img src={snoopy} alt="icon" />
            <h2>PROJECT TITLE</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repudiandae doloribus pariatur labore alias dolorem magnam quae
              consequuntur incidunt magni exercitationem!
            </p>
          </div>
        </section>
        <section className="project">
          <div className="content__wrapper">
            <img src={snoopy} alt="icon" />
            <h2>PROJECT TITLE</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repudiandae doloribus pariatur labore alias dolorem magnam quae
              consequuntur incidunt magni exercitationem!
            </p>
          </div>
        </section>
        <section className="project">
          <div className="content__wrapper">
            <img src={snoopy} alt="icon" />
            <h2>PROJECT TITLE</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repudiandae doloribus pariatur labore alias dolorem magnam quae
              consequuntur incidunt magni exercitationem!
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Projects;

export const Head = () => <title>Projects</title>;
