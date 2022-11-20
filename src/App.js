import React from "react";
import { Skills } from "./components/Skills";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

export const App = () => {
  return (
    <>
      <div id="hero">
        <>
          <Header />
        </>
      </div>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};
