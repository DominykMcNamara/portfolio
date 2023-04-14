import React from "react";
import { ReactComponent as Rings } from "../assets/pattern-rings.svg";
import quoteApp from "../assets/Screenshot (12).png";
import eCommerceApp from "../assets/DominykMcNamara_eCommerce.png"
import authTodoApp from "../assets/Screenshot (15).png";
import redditClient from "../assets/Screenshot (19).png";
export const Projects = () => {
  return (
    <div className="mt-[7rem] mx-auto ml-[2rem]
                    sm:w-[38rem]
                    md:ml-[7rem]
                    lg:w-[68.375rem] lg:mx-[2rem]
                    xl:relative xl:top-[20rem] xl:w-[140rem] xl:mx-auto">
      <div className="absolute -bottom-[26rem] left-[9rem] xl:bottom-[50rem] xl:left-[100rem]">
      <Rings />
      </div>
      <div className="flex flex-row justify-between mb-[1rem] ">
        <h3 className="text-primary-white text-[2.5rem] xl:ml-[2rem]">Projects</h3>
        <a href="#contact">
          <p className="text-primary-white  underline hover:font-bold tracking-[0.143rem]
                        ">
            Contact Me
          </p>
        </a>
      </div>
      <div className="flex flex-col 
                      sm:flex-row sm:flex-wrap sm:justify-around ">
        <div className="my-[2rem] w-[21.438rem]
                        sm:w-[15.563rem]
                        lg:w-[25.75rem]">
          <img
            src={quoteApp}
            alt="Screenshot of a random quote generator web app"
            className="rounded-[0.375rem] opacity-80 hover:opacity-100 transition-all transition-0.25"
          />
          <h3 className="text-primary-white my-[1rem]">
            Random Quote Generator
          </h3>
          <ul className="flex flex-row text-primary-gray justify-between  my-[1rem]">
            <li>HTML</li>
            <li>SASS</li>
            <li>JavaScript</li>
          </ul>
          <div className="flex flex-row justify-between  my-[1rem]">
            <a href="https://peaceful-brioche-05022d.netlify.app/" target="#">
              <p className="text-primary-white underline hover:font-bold tracking-[0.143rem]">
                View Project
              </p>{" "}
            </a>
            <a
              href="https://github.com/DominykMcNamara/advice-generator-app"
              target="#"
            >
              {" "}
              <p className="text-primary-white underline font-bold tracking-[0.143rem]">
                {" "}
                View Code
              </p>{" "}
            </a>
          </div>
        </div>
        <div className="my-[2rem] w-[21.438rem]
                        sm:w-[15.563rem]
                        lg:w-[25.75rem]">
          <img
            src={authTodoApp}
            alt="Screenshot of a todo  web app"
            className="rounded-[0.375rem] opacity-80 hover:opacity-100 transition-all transition-0.25"
          />
          <h3 className="text-primary-white my-[1rem]">
            Todo app with user authentication
          </h3>
          <ul className="flex flex-row text-primary-gray justify-between  my-[1rem]">
            <li>Next.JS</li>
            <li>Tailwind CSS</li>
            <li>Supabase</li>
          </ul>
          <div className="flex flex-row justify-between  my-[1rem]">
            <a href="https://todo-omega-lovat.vercel.app/" target="#">
              <p className="text-primary-white underline hover:font-bold tracking-[0.143rem]">
                View Project
              </p>{" "}
            </a>
            <a href="https://github.com/DominykMcNamara/todo" target="#">
              {" "}
              <p className="text-primary-white underline hover:font-bold tracking-[0.143rem]">
                {" "}
                View Code
              </p>{" "}
            </a>
          </div>
        </div>
        <div className="my-[2rem] w-[21.438rem]
                        sm:w-[15.563rem]
                        lg:w-[25.75rem]">
          <img
            src={eCommerceApp}
            className="rounded-[0.375rem] opacity-80 hover:opacity-100  transition-all transition-0.25"
            alt="Screenshot of a eCommerce backend repo"
          />
          <h3 className="text-primary-white my-[1rem]">
            eCommerce Backend
          </h3>
          <ul className="flex flex-row text-primary-gray justify-between  my-[1rem]">
            <li>Node</li>
            <li>Express</li>
            <li>Postgresql</li>
          </ul>
          <div className="flex flex-row justify-between  my-[1rem]">
            <a href="https://github.com/DominykMcNamara/eCommerce" target="#">
              <p className="text-primary-white underline hover:font-bold tracking-[0.143rem]">
                View Project
              </p>{" "}
            </a>
            <a
              href="https://github.com/DominykMcNamara/eCommerce"
              target="#"
            >
              {" "}
              <p className="text-primary-white underline hover:font-bold tracking-[0.143rem] opacity-80 hover:opacity-100 transition-all transition-0.25">
                {" "}
                View Code
              </p>{" "}
            </a>
          </div>
        </div>
        <div className="my-[2rem] w-[21.438rem]
                        sm:w-[15.563rem]
                        lg:w-[25.75rem]">
          <img
            src={redditClient}
            alt="Screenshot of a Reddit client  web app"
            className="rounded-[0.375rem] opacity-80 hover:opacity-100 transition-all transition-0.25"
          />
          <h3 className="text-primary-white my-[1rem]">Reddit Client</h3>
          <ul className="flex flex-row text-primary-gray justify-between  my-[1rem]">
            <li>React</li>
            <li>RTK Query</li>
            <li>Bootstrap</li>
          </ul>
          <div className="flex flex-row justify-between  my-[1rem]">
            <a href="https://fluffy-sunshine-f7948a.netlify.app/" target="#">
              <p className="text-primary-white underline hover:font-bold tracking-[0.143rem]">
                View Project
              </p>{" "}
            </a>
            <a
              href="https://github.com/DominykMcNamara/reddit-app2"
              target="#"
            >
              {" "}
              <p className="text-primary-white underline hover:font-bold tracking-[0.143rem]">
                {" "}
                View Code
              </p>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
