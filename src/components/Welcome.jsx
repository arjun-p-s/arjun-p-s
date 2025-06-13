import resume from "../assets/images/Arjun-p-s -Mern.pdf";
import Shape from "./Shape";

const Welcome = () => {
  return (
    <div>
      <section  className="intro">
        <Shape />
        <h1>👋 Hello, I'm Arjun</h1>
        <p>
          Welcome to my portfolio! I'm a self-taught full-stack developer from
          Alappuzha, Kerala, known for my relentless hard work and dedication to
          learning. With a strong foundation in the MERN stack, I specialize in
          building real-time applications that connect people and power seamless
          digital experiences. Passionate about clean, scalable code, I love
          turning complex ideas into interactive, user-focused products.
        </p>
        <a href={resume} download className="resume-button">
          📄 Download My Resume
        </a>
      </section>
    </div>
  );
};

export default Welcome;
