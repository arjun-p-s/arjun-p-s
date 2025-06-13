import React from "react";

const Experience = () => {
  return (
    <div>
      <section id="experience">
        <h2 className="section-title">Experience</h2>

        <div className="experience">
          <div className="experience-entry">
            <h3> Software Engineer - Freelance</h3>
            <span className="experience-year">2024 - Present</span>
          </div>
          <p>
            As a freelancer, I focused on building real-time applications using
            technologies like WebRTC, WebSocket, and Redux. I also expanded my
            skills by working with Python and containerizing applications using
            Docker. I'm currently learning Kubernetes to enhance application
            deployment and scalability.
          </p>
        </div>

        <div className="experience">
          <div className="experience-entry">
            <h3> Software Engineer - Topscore Solutions</h3>
            <span className="experience-year">2023 - 2024</span>
          </div>
          <p>
            At Topscore Solutions, I developed and maintained WordPress websites
            with a strong focus on SEO optimization and performance. I worked
            closely with other developers to convert designs into responsive web
            pages, ensuring a seamless and engaging user experience. This role
            helped me grow significantly in collaboration, communication, and
            delivering projects within deadlines as part of a dedicated team.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Experience;
