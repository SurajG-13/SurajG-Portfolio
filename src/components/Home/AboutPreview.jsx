import React from "react";
import { Link } from "react-router-dom";

export default function AboutPreview() {
  return (
    <main className="mx-4 md:mx-24 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 text-primaryWhite bg-darkBackground font-sans">
      <section className="col-span-1 md:col-span-8">
        <div>
          <p className="text-base leading-relaxed md:text-xl lg:text-2xl">
            My name is Suraj Ghosh, a web developer based in Kolkata, India,
            with two years of experience in software development. I have
            completed various projects, both personal and freelance,
            demonstrating my ability to deliver effective solutions.
            <br />
            <br />I focus on building user-friendly applications and have
            experience in both front-end and back-end development.
            <br />
            <br />
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <Link to="/ContactMe">
            <button
              className={`inline-flex items-center justify-center rounded-full text-xl font-medium 
               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
               focus-visible:ring-offset-2 disabled:opacity-50 
               disabled:pointer-events-none ring-offset-background h-10 py-4 px-4 
               bg-blue-700 text-primaryWhite hover:bg-blue-900 group 
               transform hover:scale-105 transition-transform duration-200`}
            >
              <span className="flex items-center space-x-2">
                <span>Contact Me</span>
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
              </span>
            </button>
          </Link>
          <a href="/Suraj_CV.pdf">
            <button
              className={`inline-flex items-center justify-center rounded-full text-xl font-medium 
               transition-colors focus-visible:outline-none focus-visible:ring-2 
               focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 
               disabled:pointer-events-none ring-offset-background h-10 py-2 px-4 
               bg-green-600 text-primaryWhite hover:bg-green-900 relative overflow-hidden group`}
            >
              <span className="relative z-10">My Resume</span>
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white dark:via-gray-300 to-transparent transform -skew-x-12 -translate-x-full transition-transform duration-1000 ease-out group-hover:translate-x-full"></span>
            </button>
          </a>
        </div>
      </section>

      <section className="col-span-1 md:col-span-4 flex items-start justify-center">
        <div className="text-base md:text-2xl">
          <div className="flex flex-col">
            <p className="relative z-10 text-dullWhite">What I Do?</p>
            <hr className="my-2 w-full border-gray-400 opacity-50" />
            {[
              "Front-End Development",
              "Back-End Development",
              "API Integration",
              "Deployment and DevOps",
            ].map((item, index) => (
              <React.Fragment key={index}>
                <p className="relative z-10 text-primaryWhite">{item}</p>
                <hr className="my-2 w-full border-gray-400 opacity-50" />
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
