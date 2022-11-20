import React from "react";
import tailwindIcon from "../assets/tailwindcss.svg"
import sassIcon from "../assets/sass.svg";
import reduxIcon from "../assets/redux.svg";
import reactIcon from "../assets/react.svg";
import postgresqlIcon  from "../assets/postgresql.svg";
import nodeIcon  from "../assets/nodejs.svg";
import materialUiIcon  from "../assets/material-ui-1.svg";
import javascriptIcon from "../assets/javascript.svg";
import htmlIcon  from "../assets/html5.svg";
import gitIcon  from "../assets/git-icon.svg";
import cssIcon  from "../assets/css3.svg";
import bootstrapIcon  from "../assets/bootstrap.svg";
import nextIcon from "../assets/next-js.svg";

export const Skills = () => {
  return (
    <div className="w-[21.563rem] mt-[7rem] mx-auto border-t-[0.1rem] px-2 border-b-[0.1rem] border-primary-white py-[2.5rem]">
      <h3 className="text-primary-white">Skills</h3>
      <div className="flex flex-row flex-wrap justify-between">
       <img src={tailwindIcon} className="logo" alt="TailwindCSS logo" />
       <img src={sassIcon} className="logo" alt="SASS logo"/>
       <img src={reduxIcon} className="logo" alt="Redux logo" />
       <img src={reactIcon} className="logo" alt="React logo" />
       <img src={postgresqlIcon} className="logo" alt="PostgreSQL logo" />
       <img src={nodeIcon} className="logo" alt="Node.JS logo"/>
       <img src={materialUiIcon} className="logo" alt="Material UI logo" />
       <img src={javascriptIcon} className="logo" alt="Javascript logo" />
       <img src={htmlIcon} className="logo" alt="HTML5 logo"/>
       <img src={gitIcon} className="logo" alt="Git logo"/>
       <img src={cssIcon} className="logo" alt="CSS3 logo" />
       <img src={bootstrapIcon} className="logo" alt="Bootstrap logo" />
       <img src={nextIcon} className="logo" alt="Next.JS logo"/>
      </div>
    </div>
  );
};
