import React, { useState, memo } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { Apps } from "./AboutDataSet";

const Block = memo(({ className, style, children }) => (
  <motion.div
    variants={{
      initial: { scale: 0.5, y: 50, opacity: 0 },
      animate: { scale: 1, y: 0, opacity: 1 },
    }}
    transition={{ type: "spring", mass: 3, stiffness: 400, damping: 50 }}
    className={twMerge(
      "col-span-4 rounded-3xl border border-zinc-700 bg-[#1A1A1A] p-4 overflow-hidden",
      className
    )}
    style={style}
  >
    {children}
  </motion.div>
));

const AboutGrid = () => {
  const [tasks] = useState([
    { id: 1, text: "Publish a Website", completed: true },
    { id: 2, text: "Do Freelancing Work", completed: true },
    { id: 3, text: "Write [first] LinkedIn Post", completed: false },
    { id: 4, text: "Get a Job", completed: false },
    { id: 5, text: "Work in a Research Paper", completed: false },
  ]);

  return (
    <main className="bg-darkBackground gap-3 items-center justify-evenly grid grid-cols-12 px-6 md:px-24 py-0">
      <section className="flex flex-col col-span-12 md:col-span-3 p-0">
        <div className="">
          {" "}
          <MovieBlock />
        </div>
        <HeadphoneBlock />
      </section>

      <section className="flex justify-around flex-col col-span-12 md:col-span-6 p-0">
        <ToDoBlock tasks={tasks} />
        <div className="grid grid-cols-12 grid-flow-col items-center gap-2 w-full">
          <div className="col-span-12 md:col-span-6">
            <LocationBlock />
          </div>
          <div className="col-span-12 md:col-span-6">
            <AppBlock />
          </div>
        </div>
      </section>

      <section className="flex justify-around flex-col col-span-12 md:col-span-3 p-0">
        <FootballBlock />
        <PlaylistBlock />
      </section>
    </main>
  );
};

const MovieBlock = memo(() => (
  <Block
    className="col-span-12 row-span-2 md:col-span-3 mb-2"
    style={{ height: "260px" }}
  >
    <div className="flex items-center">
      <img
        src="images/Apps/Netflix.svg"
        alt="Netflix Logo"
        className="size-10"
      />
      <h1 className="ml-2 font-medium leading-tight text-dullWhite">
        Currently Watching <br />
        <span className="text-primaryWhite">Modern Family</span>
      </h1>
    </div>
    <a
      href="https://www.imdb.com/title/tt1442437/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="h-[175px] w-full mt-3 overflow-hidden rounded-xl">
        <motion.img
          src="/images/Others/ModernFamilyPoster.jpg"
          alt="Modern Family Poster"
          className="object-cover w-full h-full"
          whileHover={{ scale: 1.1 }}
          loading="lazy"
        />
      </div>
    </a>
  </Block>
));

const ToDoBlock = memo(({ tasks }) => (
  <Block
    className="col-span-12 row-span-2 md:col-span-6 mb-2"
    style={{ height: "318px" }}
  >
    <div className="flex items-center">
      <img src="images/Apps/BookMark.svg" alt="Bookmark" className="size-10" />
      <h1 className="mb-2 ml-2 font-medium text-dullWhite leading-tight">
        Career <br />
        <span className="text-primaryWhite">To Do List</span>
      </h1>
    </div>
    <div className="flex items-center justify-center h-full m-0">
      <div className="bg-inherit px-2 pb-6 rounded-lg shadow-md w-full">
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`flex items-center p-2 mb-1 rounded-lg ${task.completed ? "bg-neutral-950 line-through" : "bg-neutral-950"}`}
            >
              <span
                className={`w-5 h-5 flex justify-center items-center rounded-full border-2 cursor-not-allowed ${task.completed ? "border-green-400 bg-green-400" : "border-gray-400"} mr-2`}
              >
                {task.completed && (
                  <span className="text-white text-xs">✓</span>
                )}
              </span>
              <span className="text-white">{task.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Block>
));

const FootballBlock = memo(() => (
  <Block
    className="col-span-12 row-span-2 md:col-span-3 mb-2 mt-2"
    style={{ height: "262px" }}
  >
    <div className="flex items-center">
      <img src="images/Others/Stadium.svg" alt="Stadium" className="size-10" />
      <h1 className="ml-2 font-medium leading-tight text-dullWhite">
        Favourite Club
        <br />
        <span className="text-primaryWhite">FC Barcelona</span>
      </h1>
    </div>
    <div className="h-[175px] w-full mt-3 overflow-hidden rounded-xl">
      <motion.img
        src="/images/Others/FCB2.jpg"
        alt="FC Barcelona"
        className="object-cover w-full h-full"
        whileHover={{ scale: 1.1 }}
        loading="lazy"
      />
    </div>
  </Block>
));

const HeadphoneBlock = memo(() => (
  <Block
    className="col-span-12 row-span-2 md:col-span-3 mb-2"
    style={{ height: "260px" }}
  >
    <div className="flex items-center">
      <img
        src="/images/Others/Headphone.svg"
        alt="Headphone"
        className="size-10"
      />
      <h1 className="ml-3 font-medium leading-tight text-dullWhite">
        Sound Gear <br />
        <span className="text-primaryWhite">Truther Hexa</span>
      </h1>
    </div>
    <div className="h-[175px] w-full mt-3 overflow-hidden rounded-xl">
      <motion.img
        src="/images/Others/Hexa.jpg"
        alt="Playlist Cover"
        className="object-cover w-full h-full"
        whileHover={{ scale: 1.1 }}
        loading="lazy"
      />
    </div>
  </Block>
  // <Block
  //   className="col-span-12 row-span-2 md:col-span-3 mt-0"
  //   style={{ height: "260px" }}
  // >
  //   <div className="object-cover">
  //     <ImageStack className="object-cover" />
  //   </div>
  // </Block>
));

const LocationBlock = memo(() => (
  <Block
    className="col-span-12 flex flex-col items-center gap-2 md:col-span-3"
    style={{ height: "200px" }}
  >
    <div className="flex flex-col justify-center items-center h-full w-full">
      <img
        src="/images/Others/Location.svg"
        alt="Location Icon"
        className="h-20 w-20"
        loading="lazy"
      />
      <p className="text-center text-2xl text-dullWhite mt-4">India/Kolkata</p>
    </div>
  </Block>
));

const AppBlock = memo(() => (
  <Block
    className="col-span-12 flex flex-col items-center gap-2 md:col-span-3"
    style={{ height: "200px" }}
  >
    <section className="flex flex-col gap-10">
      <div className="flex items-center gap-2">
        <img
          src="/images/Others/AppStore.svg"
          alt="App Store"
          className="h-8 w-8"
          loading="lazy"
        />
        <h1 className="text-dullWhite text-xl">Apps I use the most</h1>
      </div>
      <div className="ml-12 flex justify-center overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          {Apps.concat(Apps).map((App, index) => (
            <motion.img
              key={App.id + index}
              src={App.src}
              alt={App.alt}
              className="h-10 w-10 mx-2"
              loading="lazy"
            />
          ))}
        </motion.div>
      </div>
    </section>
  </Block>
));

const PlaylistBlock = memo(() => (
  <Block
    className="col-span-12 row-span-2 md:col-span-3 mb-2"
    style={{ height: "260px" }}
  >
    <div className="flex items-center">
      <img
        src="images/Apps/AppleMusic.svg"
        alt="Apple Music"
        className="size-10"
      />
      <h1 className="ml-3 font-medium leading-tight text-dullWhite">
        Looking for a playlist? <br />
        <span className="text-primaryWhite">Surpirse!</span>
      </h1>
    </div>
    <a
      href="https://music.apple.com/in/artist/shreya-ghoshal/19715559"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="h-[175px] w-full mt-3 overflow-hidden rounded-xl">
        <motion.img
          src="/images/Others/MusicPlayer.jpg"
          alt="Playlist Cover"
          className="object-cover w-full h-full"
          whileHover={{ scale: 1.1 }}
          loading="lazy"
        />
      </div>
    </a>
  </Block>
));

export default AboutGrid;
