import React from 'react'
import { ReactComponent as FrontendMentorIcon } from "../assets/icon-frontend-mentor.svg";
import { ReactComponent as GithubIcon } from "../assets/icon-github.svg";
import { ReactComponent as LinkedinIcon } from "../assets/icon-linkedin.svg";
import { ReactComponent as TwitterIcon } from "../assets/icon-twitter.svg";


export const Footer = () => {
  return (
   <div className="bg-primary-lightBlack w-full mx-auto text-center pt-[3rem] pb-[5rem]">
        <h3 className="text-primary-white">Dominyk Smith</h3>
        <div className="flex flex-row justify-around w-60 mx-auto mt-[1rem]">
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
  )
}
