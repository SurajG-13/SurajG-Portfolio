import React from "react";
import SkillCarousel from "./SkillCarousel";

export default function SkillPreview() {
  return (
    <main className="bg-darkBackground py-10 px-4 sm:px-8 lg:px-16">
      <section className="text-primaryWhite flex flex-col items-center justify-center gap-6">
        <button className="h-fit w-fit rounded-full border-2 px-6 py-2 sm:px-8 sm:py-3 font-jetbrainsMono text-lg sm:text-2xl text-white transition duration-300 ease-in-out hover:bg-[#8000FF] hover:border-[#8000FF] focus:outline-none focus:ring-2 focus:ring-[#8000FF] focus:ring-opacity-50">
          Tech Stack
        </button>
        <p className="text-base sm:text-lg lg:text-4xl text-center mx-auto max-w-6xl py-4">
          I have a strong foundation in{" "}
          <span className="text-[#00FF7F]">various technologies</span>, allowing
          me to provide effective{" "}
          <span className="text-[#F4C430]">solutions</span> across different
          platforms.
        </p>
      </section>
      <SkillCarousel />
    </main>
  );
}
