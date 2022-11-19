import React from "react";
import portfolioPic from "../assets/60630977_2925639384120792_5451495404904382464_o.jpg";
import { ReactComponent as FrontendMentorIcon } from "../assets/icon-frontend-mentor.svg";
import { ReactComponent as GithubIcon } from "../assets/icon-github.svg";
import { ReactComponent as LinkedinIcon } from "../assets/icon-linkedin.svg";
import { ReactComponent as TwitterIcon } from "../assets/icon-twitter.svg";
import { ReactComponent as Rings } from "../assets/pattern-rings.svg";
import { ReactComponent as Circle } from "../assets/pattern-circle.svg";

export const Header = () => {
  return (
    <>
      <div className="w-[10.875rem] h-[23.938rem] mx-auto pt-[1.5rem] z-50">
        <div className="text-primary-white text-center w-[9.563rem] h-[4.5rem]">
          <h3>Dominyk Smith</h3>
          <div className="flex justify-between flex-row mt-[1.5rem]">
            <a href="https://github.com/DominykMcNamara" target="#">
              <GithubIcon />{" "}
            </a>
            <a
              href="https://www.frontendmentor.io/profile/DominykMcNamara"
              target="#"
            >
              {" "}
              <FrontendMentorIcon />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/dominyk-smith-7b6a90248/"
              target="#"
            >
              {" "}
              <LinkedinIcon />{" "}
            </a>
            <a href="https://twitter.com/DominykMcNamara" target="#">
              <TwitterIcon />{" "}
            </a>
          </div>
          <div className="absolute top-[11rem] right-[18.5rem] ">
            <Rings />
          </div>
          <div className="mt-[3rem] rounded-[0.375] ">
            <img
              src={portfolioPic}
              alt="Dominyk Smith and with his dog Maple"
             
            />
          </div>
          <div className="absolute top-[18rem] right-[0rem] overflow-x-hidden">
          <Circle />
          </div>
        </div>
      </div>
    </>
  );
};
