const ProjData = [
  {
    id: 1,
    title: "Student Mentor Space",
    year: "2024",
    tech: (
      <div className="inline-flex gap-3">
        <img src="/images/TechStack/React.svg" className="size-10" />
        <img src="/images/TechStack/MongoDB.svg" className="size-10" />
        <img src="/images/TechStack/Express.svg" className="size-10" />
        <img src="/images/TechStack/NodeJS.svg" className="size-10" />
      </div>
    ),
    overview:
      "An integrated mentorship platform for students and faculty to enhance the educational experience, built using the MERN tech stack.",
    src: "/images/Project/StudentMentorSpace.png",
    liveLink: null,
    githubLink: null,
    description: (
      <>
        <p className="font-sans">
          Throughout my academic journey with TECB, one crucial element was
          missing: an integrated platform for academic management that fosters
          seamless communication between students and faculty.
          <br />
          <br />
          In response, I developed a web-based platform designed to streamline
          tracking academic progress within our college. This system allows
          students to input their marks and curriculum-related information,
          securely stored and accessible to teachers for evaluation. With its
          intuitive user interface, the platform preserves academic records,
          eliminates manual tracking, and facilitates effective communication
          between students and teachers.
          <br />
          <br />
          <span className="font-jetbrainsMono">
            The Student Mentor Space
          </span>{" "}
          {""}
          aims to bridge the gap in academic management, providing both students
          and faculty with a unified tool for performance tracking and
          mentoring.
          <br />
          <br />
        </p>
      </>
    ),
  },

  {
    id: 2,
    title: "AvirupRoy.in",
    year: "2024",
    tech: (
      <div className="inline-flex gap-3">
        <img src="/images/TechStack/React.svg" className="size-10" />
        <img src="/images/TechStack/Tailwind.svg" className="size-10" />
        <img src="/images/TechStack/Framer.svg" className="size-10" />
      </div>
    ),
    overview:
      "Avirup Roy's portfolio site, theAvirupRoy.in, was crafted to showcase his half a decade-long journey across cinematography and multi-media sectors - featuring a modern design using React JS, Tailwind CSS, and Framer Motion.",
    src: "/images/Project/AVRP.png",
    liveLink: null,
    githubLink: null,
    description: (
      <>
        <p className="font-sans">
          Avirup Roy's portfolio site,{" "}
          <span className="font-jetbrainsMono">theAvirupRoy.in</span>, was
          crafted to showcase his half a decade-long journey across
          cinematography and multi-media sectors - all while reflecting his
          vibrant personality.
          <br />
          <br />I focused on highlighting Avirup's extensive experience in a way
          that was both engaging and professional. I incorporated interactive,
          playful elements that subtly enhanced the user experience, ensuring
          they added charm without overshadowing the content. The result was a
          site that only not only detailed his impressive career but also
          brought his unique energy to life on the web.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Suraj's Portfolio Website",
    year: "2024",
    tech: (
      <div className="inline-flex gap-3">
        <img src="/images/TechStack/React.svg" className="size-10" />
        <img src="/images/TechStack/Tailwind.svg" className="size-10" />
        <img src="/images/TechStack/Framer.svg" className="size-10" />
      </div>
    ),
    overview:
      "A personal portfolio website showcasing my projects and skills, featuring a modern design using React JS, Tailwind CSS, and Framer Motion.",
    src: "/images/Project/SRJ.png",
    // liveLink: "null",
    // githubLink: "null",
    description: (
      <>
        <p className="font-sans">
          My Portfolio Website serves as a digital showcase for my projects and
          skills. Designed with a modern aesthetic, the site utilizes React JS
          for dynamic content, Tailwind CSS for responsive styling, and Framer
          Motion for engaging animations.
          <br />
          <br />
          This website features detailed project descriptions, showcasing the
          technologies used and my contributions, effectively reflecting my
          professional journey. The focus on user experience ensures that
          visitors can easily navigate through my work while appreciating the
          design and functionality.
        </p>
      </>
    ),
  },
  {
    id: 4,
    tag: "Under Development",
    title: "Craft Corner",
    year: "2024",
    tech: (
      <div className="inline-flex gap-3">
        <img src="/images/TechStack/React.svg" className="size-10" />
        <img src="/images/TechStack/MongoDB.svg" className="size-10" />
        <img src="/images/TechStack/Express.svg" className="size-10" />
        <img src="/images/TechStack/NodeJS.svg" className="size-10" />
      </div>
    ),
    overview:
      "Currently in development, Craft Corner is a handicraft shopping website built using the MERN stack.",
    src: "/images/Project/CraftConer.png",

    liveLink: null,
    githubLink: null,
    description: (
      <>
        <p className="font-sans">
          Currently in development,{" "}
          <span className="font-jetbrainsMono">Craft Corner</span> is an online
          marketplace designed for handicrafts and artisan products. This
          project aims to connect artisans with customers, providing a platform
          to showcase unique creations.
          <br />
          <br />
          The website will feature user accounts, product listings, shopping
          cart functionality, and secure payment processing, enhancing the
          overall shopping experience. This project highlights my commitment to
          building e-commerce solutions and my skills in full-stack development.
        </p>
      </>
    ),
  },
  {
    id: 5,
    title: "EDZ Discord Bot",
    year: "2023",
    tech: (
      <div className="inline-flex gap-3">
        <img src="/images/TechStack/Python.svg" className="size-10" />
      </div>
    ),
    overview:
      "An automated moderation bot for Discord built in Python. Utilized Flask and Uptime Robot to ensure reliability and continuous operation.",
    src: "/images/Project/DiscordBot.png",
    liveLink: null,
    githubLink: "https://replit.com/@Suraj13/EDZ-Official",
    description: (
      <>
        <p className="font-sans">
          The <span className="font-jetbrainsMono">EDZ Discord Bot</span> is an
          automated moderation tool developed to enhance server management on
          Discord. Written in Python, this bot incorporates features like
          automated moderation, member management, and command responses to
          streamline community interactions.
          <br />
          <br />
          Using Flask for the backend and Uptime Robot for monitoring, the bot
          ensures continuous operation and reliability. This project
          demonstrates my skills in Python programming and API integration while
          providing a useful tool for Discord community managers.
        </p>
      </>
    ),
  },
];

export { ProjData };
