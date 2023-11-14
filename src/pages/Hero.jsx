import React from "react";
import { FaGithub, FaLinkedin, FaSpotify } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero my-16 h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="grid grid-cols-7 grid-rows-2 gap-y-36"
      >
        <div className="col-span-4">
          <h1 className="text-white text-[8rem]">Hi, I'm JD.</h1>
          <h2 className="text-grey-text text-[3rem] leading-10">
            Graduate Software Developer <br></br>based in Auckland, NZ
          </h2>
          <div className="flex gap-8 my-16">
            <FaGithub fill="#fff" size={48} />
            <FaLinkedin fill="#fff" size={48} />
            <FaSpotify fill="#fff" size={48} />
          </div>
        </div>
        <div className="col-span-3 col-start-5">
          <img src="src\assets\JD Logo.png" className="h-full"></img>
        </div>
        <motion.div
          className="col-span-7"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex gap-10">
            <h2 className="text-white text-[3rem] leading-10">Tech Stack</h2>
            <h2 className="text-white text-[3rem] leading-10">|</h2>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
