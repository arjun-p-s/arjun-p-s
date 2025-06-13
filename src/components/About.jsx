import React from "react";
import webImage from '../assets/images/Arjun-p-s-web.jpeg'

const About = () => {
  return (
    <div>
      <section id="about">
        <div>
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-photo">
              <img src={webImage} alt="Your Photo" />
            </div>
            <div className="about-text">
              <p>
                I'm a self-taught full-stack developer with a 3-year diploma in
                Computer Engineering from Kerala Technical University. I
                previously worked as a Software Engineer at Topscore Solutions
                for a year and am currently working as a freelance Software
                Engineer. Over the years, I've developed several projects,
                including real-time chat and video call features, showcasing my
                strong interest in scalable, interactive applications.
              </p>
              <div className="skills-grid">
                <div>
                  <h3>Languages</h3>
                  <ul>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>Python</li>
                  </ul>
                </div>
                <div>
                  <h3>Technologies</h3>
                  <ul>
                    <li>React.js / Next.js</li>
                    <li>Node.js / Express.js</li>
                    <li>MongoDB / WebSocket / Docker</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
