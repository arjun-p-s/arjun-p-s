import React from "react";
import { CODETIE_URL } from "../utils/constants";

const Projects = () => {
  return (
    <div>
      <section id="projects">
        <h2 className="section-title">Projects</h2>
        <div className="project-grid">
          <div className="project">
            <h3>CodeTie</h3>
            <p>
              A networking platform for developers with real-time chat and video
              call using Socket.IO and WebRTC. Built using the MERN stack with
              authentication, messaging, and video communication.
            </p>
            <p>React.js, Node.js, Express.js, Socket.IO, MongoDB</p>
            <a className="github-link" href={CODETIE_URL} target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="GitHub"
              />
              View Code on GitHub
            </a>
          </div>
          <div className="project">
            <h3>Dev Dashboard</h3>
            <p>
              A personal dashboard built with Vue 3 + TypeScript to track tasks,
              notes, and productivity tools. Includes state management with
              Pinia and clean component-based architecture.
            </p>
            <a className="github-link" href="#" >
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="GitHub"
              />
              View Code on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
