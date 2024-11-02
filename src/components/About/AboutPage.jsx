import React from "react";

import AboutIntro from "./AboutIntro.jsx";
import AboutGrid from "./AboutGrid";
import ContactPreview from "../Contact/ContactPreview.jsx";

const AboutPage = () => {
  return (
    <main id="About" className="overflow-hidden bg-darkBackground">
      <AboutIntro />
      <AboutGrid />
      <ContactPreview />
    </main>
  );
};

export default AboutPage;
