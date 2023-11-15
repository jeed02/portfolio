import React from "react";
import { FaGithub, FaLinkedin, FaSpotify } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero my-16 h-full lg:h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="flex flex-col gap-y-8 p-16 md:grid grid-cols-7 grid-rows-2 gap-y-36"
      >
        <div className="col-span-4">
          <h1 className="text-white text-6xl lg:text-9xl">Hi, I'm JD.</h1>
          <h2 className="text-grey-text text-3xl lg:text-5xl leading-10">
            Graduate Software Developer <br></br>based in Auckland, NZ
          </h2>
          <div className="flex gap-8 my-16">
            <FaGithub fill="#fff" className="hero-icon" />
            <FaLinkedin fill="#fff" className="hero-icon" />
            <FaSpotify fill="#fff" className="hero-icon" />
          </div>
        </div>

        <div className="col-span-3 col-start-5">
          <img src="src\assets\JD Logo.png" className="h-64 lg:h-full"></img>
        </div>

        <motion.div
          className="col-span-7"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex gap-10">
            <h2 className="text-white lg:text-5xl leading-10">Tech Stack</h2>
            <h2 className="text-white lg:text-5xl leading-10">|</h2>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
