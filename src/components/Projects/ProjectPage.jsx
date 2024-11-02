import React from "react";

import Projects from "./Projects.jsx";
import ContactPreview from "../Contact/ContactPreview.jsx";

const ProjectPage = () => {
  return (
    <>
      <main className={`bg-darkBackground`}>
        <Projects />
        <ContactPreview />
      </main>
    </>
  );
};

export default ProjectPage;
