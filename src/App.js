import React from "react";
import { Skills } from "./components/Skills";
import { Header } from "./components/Header";

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
    </>
  );
};
