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
import AnimatedCursor from "react-animated-cursor"; // Você já tinha importado corretamente

function App() {
  return (
    <div className="App">
      {/* --- Adicione o AnimatedCursor aqui --- */}
      <AnimatedCursor
        innerSize={8}
        outerSize={10}
        color='139, 92, 246' // Sua cor roxa em formato RGB
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
          '.nav-link', // Adicionei a classe dos seus links de navegação
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