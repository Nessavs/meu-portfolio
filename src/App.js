import React from "react";
import Navbar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import SkillsMap from "./components/SkillsMap/SkillsMap";
import Footer from "./components/Footer/Footer";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={8}
        outerSize={10}
        color='139, 92, 246'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'textarea',
          'button',
          '.logo',
          '.nav-link',
          '.project-card'
        ]}
      />

      <main>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <SkillsMap />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;