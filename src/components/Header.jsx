
import React from "react";
import portfolioPic from "../assets/60630977_2925639384120792_5451495404904382464_o.jpg";
import { ReactComponent as FrontendMentorIcon } from "../assets/icon-frontend-mentor.svg";
import { ReactComponent as GithubIcon } from "../assets/icon-github.svg";
import { ReactComponent as LinkedinIcon } from "../assets/icon-linkedin.svg";
import { ReactComponent as TwitterIcon } from "../assets/icon-twitter.svg";
import { ReactComponent as Rings } from "../assets/pattern-rings.svg";
import { ReactComponent as Circle } from "../assets/pattern-circle.svg";
import { Bio } from "./Bio";

export const Header = () => {
  return (
    <>
      <div className="w-[10.875rem] h-[23.938rem] mx-auto pt-[1.5rem]
                     sm:mx-0
                      
                      ">
        <div className="text-primary-white text-center w-[9.563rem] h-[4.5rem] px-0
                        sm:w-[44.25rem] sm:justify-between sm:align-center sm:flex sm:flex-row sm:px-[2rem]
                        xl:w-screen
                        ">
          <h3 className="ml-0 xl:ml-[10.313rem]">Dominyk Smith</h3>
          <div className="mr-0 flex justify-between flex-row
                          sm:w-[9.813rem] sm:mr-[2.5rem]
                          xl:mr-[10.313rem]">
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
          </div>
          <div className="absolute top-[11rem] right-[18.5rem]
                          xl:left-0 ">
            <Rings />
          </div>
          <div className="mt-[5rem] rounded-[0.375] 
                          sm:mt-0 sm:w-[20.125rem] sm:h-[37.5rem] sm:right-0 sm:absolute sm:top-0 sm:opacity-80
                          lg:right-[1rem]
                          xl:mr-[10.313rem] xl:right-0 xl:w-[27.813rem]
                           ">
            <img
              src={portfolioPic}
              alt="Dominyk Smith and with his dog Maple"
              className="rounded-[0.375rem]"
             
            />
          </div>
          <div className="absolute top-[18rem] right-[0rem] overflow-x-hidden
                          sm:top-[30rem]
                          xl:right-[80rem]">
          <Circle />
          </div>
        
      </div>
      <div className="w-[21.438rem] h-[15.25rem] mt-[6rem] mx-auto
                      sm:w-[27.813rem] sm:w-[27.813rem] sm:h-[27.813rem] sm:absolute sm:top-[9.438rem] sm:ml-[2rem]
                      xl:w-[44.125rem] xl:ml-[10.313rem]">
      <Bio />
      </div>
    </>
  );
};