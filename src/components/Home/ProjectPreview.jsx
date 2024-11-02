import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef, useState, useMemo } from "react";
import ScreenFitText from "../../utilities/ScreenFitText";
import { Link } from "react-router-dom";

export const ProjectPreview = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = useMemo(
    () => [
      {
        heading: "Student Mentor Space",
        subheading: "Currently in Development",
        imgSrc: "/images/Project/StudentMentorSpace.png",
        overview:
          "An integrated mentorship platform for students and faculty to enhance the educational experience, built using the MERN tech stack.",
      },
      {
        heading: "AvirupRoy.in",
        subheading: "Currently in Development",
        imgSrc: "/images/Project/AVRP.png",
        overview:
          "Avirup Roy's portfolio site, theAvirupRoy.in, was crafted to showcase his half a decade-long journey across cinematography and multi-media sectors - featuring a modern design using React JS, Tailwind CSS, and Framer Motion.",
      },
      {
        heading: "Suraj's Portfolio",
        subheading: "You are here, yay!",
        imgSrc: "/images/Project/SRJ.png",
        overview:
          "My personal portfolio website showcasing my projects and skills, featuring a modern design using React JS, Tailwind CSS, and Framer Motion.",
      },
      {
        heading: "Discord Bot",
        subheading: "Discontinued",
        imgSrc: "/images/Project/DiscordBot.png",
        overview:
          "An automated moderation bot for Discord built in Python. Utilized Flask and Uptime Robot to ensure reliability and continuous operation.",
      },
    ],
    []
  );

  // Colors based on project
  const projectStyles = useMemo(
    () => ({
      "Student Mentor Space": { bgColor: "#5d3fd3", textColor: "#ffffff" },
      "Discord Bot": { bgColor: "#2AAA8A", textColor: "#ffffff" },
      "AvirupRoy.in": { bgColor: "#9F2B68", textColor: "#ffffff" },
      "Suraj's Portfolio": { bgColor: "#FF0000", textColor: "#ffffff" },
    }),
    []
  );

  const currentStyle = hoveredProject
    ? projectStyles[hoveredProject]
    : { bgColor: "#ffffff", textColor: "#757575" };

  return (
    <main className="m-4 md:m-24 relative border rounded-3xl border-black">
      <section className="md:absolute w-full h-[30%] flex items-end justify-center">
        <div className="hidden md:flex items-center justify-end px-4 md:px-[28rem] py-10 h-full w-full absolute">
          <Link to="/Projects">
            <p className="h-fit w-fit -rotate-12 rounded-3xl bg-[#bc00dd] px-4 py-2 text-white text-sm md:text-base lg:px-8 lg:py-4">
              View More
            </p>
          </Link>
        </div>
        <ScreenFitText name="Project" />
      </section>
      <section
        className="rounded-3xl p-4 md:mt-44 md:p-16"
        style={{ backgroundColor: currentStyle.bgColor }}
      >
        <div>
          {projects.map((project, index) => (
            <ProjectLink
              key={index}
              heading={project.heading}
              subheading={project.subheading}
              imgSrc={project.imgSrc}
              overview={project.overview}
              setHoveredProject={setHoveredProject}
              currentStyle={currentStyle}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

const ProjectLink = ({
  heading,
  imgSrc,
  subheading,
  overview,
  setHoveredProject,
}) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const [isHovered, setIsHovered] = useState(false);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHoveredProject(null);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setHoveredProject(heading);
    setIsHovered(true);
  };

  const textColor = isHovered ? "#ffffff" : "#B6B6B4";

  return (
    <motion.a
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col md:flex-row items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 md:py-8"
      href="/Projects"
    >
      <div className="h-full w-full">
        <motion.span
          className="relative z-10 block text-2xl md:text-4xl font-bold transition-colors duration-500 group-hover:text-neutral-50"
          style={{ color: textColor }}
        >
          {heading}
        </motion.span>
        <span
          className="relative z-10 mt-1 block text-sm md:text-base transition-colors duration-500 group-hover:text-neutral-50"
          style={{ color: textColor }}
        >
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-300%",
          translateY: "-50%",
          opacity: isHovered ? 1 : 0,
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={`${imgSrc}?w=640`}
        srcSet={`${imgSrc}?w=320 320w, ${imgSrc}?w=640 640w`}
        sizes="(max-width: 640px) 100vw, 50vw"
        className="hidden md:block absolute z-0 h-24 w-32 rounded-lg object-cover md:h-32 md:w-32"
        alt={`Image representing a link for ${heading}`}
        loading="lazy"
      />

      <motion.div
        className="text-black w-full h-full flex items-center justify-center"
        style={{ color: textColor }}
      >
        <span className="text-sm md:text-base">{overview}</span>
      </motion.div>
    </motion.a>
  );
};

export default ProjectPreview;
