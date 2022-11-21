import React from "react";
import { ReactComponent as Rings } from "../assets/pattern-rings.svg";
import emailjs from "@emailjs/browser";
export const Contact = () => {
  return (
    <div className="w-screen mt-[5rem] bg-primary-lightBlack text-center py-[3.75rem]">
      <h3 className="text-primary-white ">Contact</h3>
      <p className="text-primary-gray mb-[1rem]">
        I would love to hear about your project and how I could help you. Please
        fill in the form, and I'll get back to you as soon as possible.
      </p>

      <a
        href="mailto:dominyksmith@gmail.com"
        className="border-none  text-primary-white tracking-[0.143rem] underline font-bold  z-50"
      >
        Send Message
      </a>

      <div className="absolute right-[10rem] top-[200rem]">
        <Rings />
      </div>
    </div>
  );
};
