import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ContactPreview = () => {
  return (
    <main className="w-screen h-full md:h-[75vh] p-10 bg-darkBackground flex justify-center items-center">
      <Link to="/ContactMe">
        <motion.button
          whileHover={{
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
            backgroundColor: "rgb(255, 255, 255)",
            color: "rgb(0, 0, 0)",
          }}
          style={{ backgroundColor: "rgb(0, 0, 0)" }}
          className="relative inline-flex items-center justify-center p-10 md:p-32 overflow-hidden gap-4 font-medium text-white transition duration-300 ease-out rounded-full shadow-lg border border-white border-opacity-20"
        >
          <span
            className="absolute inset-0 w-full h-full transition duration-300 ease-linear opacity-0 group-hover:opacity-100"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
          />

          <span className="relative text-xl md:text-3xl lg:text-9xl font-bold group-hover:text-black">
            Contact Me
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="currentColor"
            className="lg:size-24 w-6 h-6 md:w-8 md:h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </motion.button>
      </Link>
    </main>
  );
};

export default ContactPreview;
