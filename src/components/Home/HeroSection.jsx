import React from "react";
import { motion } from "framer-motion";
import ScreenFitText from "../../utilities/ScreenFitText";

const tags = [
  {
    text: "Frontend Developer",
    bgColor: "bg-[#D4CCFF]",
    textColor: "text-black",
    rotate: 5,
  },
  {
    text: "Database",
    bgColor: "bg-[#F6DBC4]",
    textColor: "text-black",
    rotate: -15,
  },
  {
    text: "Backend Developer",
    bgColor: "bg-orange-300",
    textColor: "text-black",
    rotate: 10,
  },
  {
    text: "Content Writer",
    bgColor: "bg-yellow-300",
    textColor: "text-black",
    rotate: -5,
  },
  {
    text: "Tech Enthusiast",
    bgColor: "bg-cyan-300",
    textColor: "text-black",
    rotate: 15,
  },
];

export default function HeroSection() {
  return (
    <main className="bg-darkBackground text-primaryWhite h-full md:h-[75vh] mt-20 w-screen flex">
      <section className="w-full h-full flex items-start justify-center relative">
        <div className="w-[80%] h-[80%] mt-6 justify-start">
          <ScreenFitText name="Suraj Ghosh" />
        </div>

        <motion.div
          className="absolute z-10 h-full bottom-0 w-full rounded-xl hidden md:flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {tags.map(({ text, bgColor, textColor, rotate, y }, index) => (
            <motion.div
              key={index}
              initial={{ y: 0, opacity: 0 }}
              animate={{
                y: 300,
                opacity: 1,
                rotate: rotate,
              }}
              transition={{
                delay: index * 0.1,
                duration: 1,
                ease: "linear",
              }}
              className={`${bgColor} ${textColor} md:p-4 lg:p-6 p-2 h-fit text-lg rounded-full`}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {text}
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
