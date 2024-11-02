import React from "react";

import HeroSection from "./HeroSection.jsx";
import AboutPreview from "./AboutPreview.jsx";
import SkillPreview from "../Skill/SkillPreview.jsx";
import ProjectPreview from "./ProjectPreview.jsx";
import RoundContact from "../Contact/ContactPreview.jsx";

const HomePage = () => {
  return (
    <>
      <main className={`bg-darkBackground overflow-hidden`}>
        <HeroSection />
        <AboutPreview />
        <SkillPreview />
        <ProjectPreview />
        <RoundContact />
      </main>
    </>
  );
};

export default HomePage;
