import React from "react";
import { motion } from "framer-motion";
import { skills } from "./SkillDataSet.js";

function SkillCarousel() {
  return (
    <section>
      <div className="overflow-hidden mx-5 mt-10">
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-50%"] }} // Adjust based on your needs
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {skills.map((skill) => (
            <div key={skill.id} className="flex flex-col items-center mx-4">
              {/* <motion.img
                src={skill.src}
                alt={skill.alt}
                className="h-16 w-16 sm:h-20 sm:w-20 mx-12" // Responsive image sizes
                aria-label={skill.alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                role="img"
              /> */}
              <motion.img
                src={skill.src}
                alt={skill.alt}
                width={64}
                height={64}
                className="h-16 w-16 mx-12"
                aria-label={skill.alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                role="img"
              />

              <div className="text-pretty py-4 text-primaryWhite text-sm sm:text-base text-center">
                {skill.alt}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default SkillCarousel;
