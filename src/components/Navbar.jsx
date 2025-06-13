import React from "react";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Mail } from "lucide-react";
import { Link } from "react-scroll";
import { GITHUB_URL, LINKEDIN_URL } from "../utils/constants";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="container">
          <div className="links">
            <Link to="/" spy={true} smooth={true} offset={-60} duration={500}>
              Arjun P S
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              About
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              Projects
            </Link>
            <Link
              to="experience"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              Experience
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              Skills
            </Link>
          </div>
          <div className="social-icons">
            <a href={GITHUB_URL} target="_blank">
              <Github className="navbar-icones" />
            </a>
            <a href={LINKEDIN_URL} target="_blank">
              <Linkedin className="navbar-icones" />
            </a>
            <a href={"mailto:hai.arjunps@gmail.com"}>
              <Mail className="navbar-icones" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
