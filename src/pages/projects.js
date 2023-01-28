import React from "react";
import Layout from "../components/Layout";
import "../styles/main.scss";

const Projects = () => {
  return (
    <Layout>
      <div className="projects__content">
        <h1>PROJECTS</h1>
      </div>
    </Layout>
  );
};

export default Projects;

export const Head = () => <title>Projects</title>;
