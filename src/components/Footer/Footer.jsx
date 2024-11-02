import React, { memo } from "react";
import { motion } from "framer-motion";

const Footer = memo(() => (
  <footer className="bg-darkBackground text-primaryWhite font-sans h-30 w-full px-10 mt-4 lg:mt-8 max-w-full overflow-x-hidden">
    <article className="flex flex-col gap-8 md:gap-0 md:flex-row justify-between items-start mb-4">
      <div className="mb-2 text-sm flex flex-col">
        <p>
          This website draws design inspiration from various elements across the
          Internet,
        </p>
        <p>
          with many aspects influenced by the exceptional work of Mr. Peter
          AckaNagchu.
        </p>
      </div>
      <section className="flex flex-col gap-1">
        <div className="flex space-x-6">
          <a href="mailto:suraj.coder13@gmail.com" title="Send me a mail">
            <motion.img
              loading="lazy"
              src="/images/Apps/Gmail.svg"
              alt="Gmail Icon"
              aria-label="Email"
              whileHover={{ scale: 1.2 }}
              className="w-6 h-6"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/suraj13/"
            target="_blank"
            rel="noopener noreferrer"
            title="Connect with me on LinkedIn"
            aria-label="LinkedIn"
          >
            <motion.img
              loading="lazy"
              src="/images/Apps/LinkedIn.svg"
              alt="LinkedIn Icon"
              whileHover={{ scale: 1.2 }}
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://github.com/SurajG-13"
            target="_blank"
            rel="noopener noreferrer"
            title="View my GitHub profile"
            aria-label="GitHub"
          >
            <motion.img
              loading="lazy"
              src="/images/Apps/Github.svg"
              alt="GitHub Icon"
              whileHover={{ scale: 1.2 }}
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://x.com/Suraj_Culer"
            target="_blank"
            rel="noopener noreferrer"
            title="Follow me on X"
            aria-label="Twitter"
          >
            <motion.img
              loading="lazy"
              src="/images/Apps/X.svg"
              alt="Twitter Icon"
              whileHover={{ scale: 1.2 }}
              className="w-6 h-6"
            />
          </a>
        </div>
        <div>
          <p className="text-sm">Build from scratch by Suraj Ghosh</p>
        </div>
      </section>
    </article>
  </footer>
));

export default Footer;
