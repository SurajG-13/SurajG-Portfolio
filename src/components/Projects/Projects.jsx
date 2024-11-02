import React from "react";
import { motion, useInView } from "framer-motion";
import { ProjData } from "./ProjectDataSet.jsx";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import ScreenFitText from "../../utilities/ScreenFitText.jsx";

const Button = ({ href, children, icon, isDisabled }) => (
  <a
    href={isDisabled ? undefined : href}
    className={`flex items-center text-white bg-neutral-600 hover:bg-neutral-800 px-4 py-2 rounded-full ${
      isDisabled ? "cursor-not-allowed" : "cursor-pointer"
    }`}
    target={isDisabled ? undefined : "_blank"}
    rel={isDisabled ? undefined : "noopener noreferrer"}
    aria-label={children}
    onClick={isDisabled ? (e) => e.preventDefault() : undefined}
  >
    {children} {icon}
  </a>
);

export default function Projects() {
  const imageAnimationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="flex flex-col min-h-screen overflow-hidden">
      <article className="flex-grow bg-inherit text-white">
        <section className="relative mt-20">
          <div className="flex items-end justify-end px-8 md:px-[32rem] py-10 h-full w-full absolute">
            <p className="h-fit w-fit -rotate-12 rounded-3xl bg-[#F77FBE] px-4 py-2 text-black text-sm md:text-base lg:px-8 lg:py-4">
              Tech
            </p>
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <ScreenFitText name="Project" />
          </div>
        </section>

        <section className="m-4 md:m-10 rounded-lg p-4 md:p-8 flex flex-col items-center">
          <section className="w-full">
            <ul className="grid grid-cols-1 gap-6 md:gap-8">
              {ProjData.map((project) => {
                const ref = React.useRef(null);
                const isInView = useInView(ref, {
                  once: false,
                  margin: "-10% 0px",
                });

                return (
                  <motion.li
                    key={project.id}
                    ref={ref}
                    variants={imageAnimationVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ duration: 0.5 }}
                    className="py-4 rounded-lg"
                  >
                    <div className="flex flex-col w-full">
                      <div className="h-[30rem] w-full overflow-hidden md:h-[36rem]">
                        <motion.img
                          src={project.src}
                          alt={`Image for ${project.title}`}
                          className="h-full w-full rounded-3xl object-cover"
                        />
                      </div>

                      <div className="flex flex-col justify-between mt-4 mx-4 md:mx-6">
                        <motion.h3 className="font-medium font-jetbrainsMono text-2xl md:text-3xl text-center md:text-left">
                          {project.title}
                        </motion.h3>

                        <section className="grid grid-cols-12 mt-4 md:mt-10">
                          <div className="col-span-12 md:col-span-7 text-left my-2 md:text-lg">
                            {project.description}
                          </div>
                          <div className="col-span-12 md:col-span-3"></div>
                          <div className="col-span-12 md:col-span-2 text-lg">
                            <div className="font-jetbrainsMono">Year</div>
                            <div className="mt-2">{project.year}</div>

                            <h1 className="mt-4 md:mt-10 font-jetbrainsMono">
                              Tech Stack
                            </h1>
                            <div className="text-left mt-2">{project.tech}</div>
                          </div>
                        </section>

                        <div className="mt-4 md:mt-6 flex flex-wrap gap-4">
                          <Button
                            href={project.liveLink}
                            icon={<FiExternalLink className="ml-2" />}
                            isDisabled={!project.liveLink}
                          >
                            Live Link
                          </Button>
                          <Button
                            href={project.githubLink}
                            icon={<FiGithub className="ml-2" />}
                            isDisabled={!project.githubLink}
                          >
                            GitHub Repo
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </section>
        </section>
      </article>
    </main>
  );
}
