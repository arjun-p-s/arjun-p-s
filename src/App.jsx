import Layout from "./components/Layout";
import Background3D from "./components/3d/Background3D";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import './index.css';

function App() {
  return (
    <>
      <Background3D />
      <Layout>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
}

export default App;
