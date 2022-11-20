import React from "react";
import quoteApp from "../assets/Screenshot (12).png";
import githubApp from "../assets/Screenshot (14).png";
import authTodoApp from "../assets/Screenshot (15).png";
import pernTodoApp from "../assets/Screenshot (16).png";
export const Projects = () => {
  return (
    <div className="w-[21.563rem] mt-[7rem] mx-auto">
      <div className="flex flex-row justify-between mb-[1rem]">
        <h3 className="text-primary-white text-[2.5rem]">Projects</h3>
        <a href="#">
          <p className="text-primary-white underline font-bold tracking-[0.143rem]">
            Contact Me
          </p>
        </a>
      </div>
      <div className="flex flex-col">
        <div className="my-[2rem]">
          <img
            src={quoteApp}
            alt="Screenshot of a random quote generator web app"
            className="rounded-[0.375rem]"
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
              <p className="text-primary-white underline font-bold tracking-[0.143rem]">
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
        <div className="my-[2rem]">
          <img
            src={authTodoApp}
            alt="Screenshot of a todo  web app"
            className="rounded-[0.375rem]"
          />
          <h3 className="text-primary-white my-[1rem]">
            Full stack Todo app with user authentication
          </h3>
          <ul className="flex flex-row text-primary-gray justify-between  my-[1rem]">
            <li>Next.JS</li>
            <li>Tailwind CSS</li>
            <li>Supabase</li>
          </ul>
          <div className="flex flex-row justify-between  my-[1rem]">
            <a href="https://todo-omega-lovat.vercel.app/" target="#">
              <p className="text-primary-white underline font-bold tracking-[0.143rem]">
                View Project
              </p>{" "}
            </a>
            <a href="https://github.com/DominykMcNamara/todo" target="#">
              {" "}
              <p className="text-primary-white underline font-bold tracking-[0.143rem]">
                {" "}
                View Code
              </p>{" "}
            </a>
          </div>
        </div>
        <div className="my-[2rem]">
          <img
            src={githubApp}
            className="rounded-[0.375rem]"
            alt="Screenshot of a github user search web app"
          />
          <h3 className="text-primary-white my-[1rem]">
            Github User Search App
          </h3>
          <ul className="flex flex-row text-primary-gray justify-between  my-[1rem]">
            <li>React</li>
            <li>Material UI</li>
            <li>Github API</li>
          </ul>
          <div className="flex flex-row justify-between  my-[1rem]">
            <a href="https://searchappp.herokuapp.com/" target="#">
              <p className="text-primary-white underline font-bold tracking-[0.143rem]">
                View Project
              </p>{" "}
            </a>
            <a
              href="https://github.com/DominykMcNamara/github-user-search-app"
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
        <div className="my-[2rem]">
          <img
            src={pernTodoApp}
            alt="Screenshot of a todo  web app"
            className="rounded-[0.375rem]"
          />
          <h3 className="text-primary-white my-[1rem]">PERN stack Todo app</h3>
          <ul className="flex flex-row text-primary-gray justify-between  my-[1rem]">
            <li>PostgreSQL</li>
            <li>React</li>
            <li>Express</li>
            <li>Node.JS</li>
          </ul>
          <div className="flex flex-row justify-between  my-[1rem]">
            <a href="https://toasty-brioche.herokuapp.com/" target="#">
              <p className="text-primary-white underline font-bold tracking-[0.143rem]">
                View Project
              </p>{" "}
            </a>
            <a
              href="https://github.com/DominykMcNamara/todo-app-full"
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
      </div>
    </div>
  );
};
