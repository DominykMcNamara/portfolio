import React from "react";
import { Experience } from "./components/Experience";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <>
      <div id="hero">
        <>
          <Header />
        </>
      </div>
      <section id="experience">
        <Experience />
      </section>
    </>
  );
};
