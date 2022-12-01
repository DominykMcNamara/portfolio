import React from "react";
import { ReactComponent as Rings } from "../assets/pattern-rings.svg";
export const Contact = () => {
  return (
    <div className="mt-[5rem] mx-auto w-screen border-b-[0.01rem] border-primary-white bg-primary-lightBlack text-center py-[3.75rem] ">
      <h3 className="text-primary-white ">Contact</h3>
      <p className="text-primary-gray mb-[1rem] md:mx-[3rem]">
        I would love to hear about your project and how I could help you. Please
        send me a message, and I'll get back to you as soon as possible.
      </p>

      <a
        href="mailto:dominyksmith@gmail.com"
        className="border-none  text-primary-white tracking-[0.143rem] underline font-bold hover:font-bold z-50"
      >
        Send Message
      </a>

      <div className="absolute right-[10rem] top-[200rem]
                      sm:top-[130rem]
                      xl:top-[69rem]
                      xl:top-[0rem] xl:relative
                      ">
        <Rings />
      </div>
    </div>
  );
};
