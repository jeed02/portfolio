import React from "react";
import { FaGithub, FaLinkedin, FaSpotify } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import ReactLogo from "../assets/icons/react-svgrepo-com.svg?react";
import TailwindLogo from "../assets/icons/tailwind-svgrepo-com.svg?react";
import HTMLLogo from "../assets/icons/html-5-logo-svgrepo-com.svg?react";
import CSSLogo from "../assets/icons/css-3-svgrepo-com.svg?react";
import JSLogo from "../assets/icons/javascript-svgrepo-com.svg?react";

import LogoCanvas from "../components/LogoCanvas";

import CVFile from "../assets/JD Resume.pdf";
import AcademicTranscript from "../assets/SSR_TSRPT.pdf";

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
            <motion.a
              href="https://github.com/jeed02"
              target="_blank"
              whileHover={{
                scale: 1.1,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub fill="#fff" className="hero-icon" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/jd-briones/"
              target="_blank"
              whileHover={{
                scale: 1.1,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin fill="#fff" className="hero-icon" />
            </motion.a>
            <motion.a
              href="https://open.spotify.com/user/22npxbbtrhowy75h5h5nnzfbq?si=a23dcc359cc74007"
              target="_blank"
              whileHover={{
                scale: 1.1,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <FaSpotify fill="#fff" className="hero-icon" />
            </motion.a>
          </div>
          <div className="flex gap-8">
            <a
              href={CVFile}
              download="JD Briones CV"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2"
            >
              <h1 className="text-xl">Download CV</h1>
              <FiDownload />
            </a>
            <a
              href={AcademicTranscript}
              download="JD Briones Academic Transcript"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2"
            >
              <h1 className="text-xl">Download Transcript</h1>
              <FiDownload />
            </a>
          </div>
        </div>

        <div className="col-span-3 col-start-5">
          <LogoCanvas />
        </div>

        <motion.div
          className="py-16 col-span-7"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center lg:flex-row">
            <div className="flex my-16 ">
              <h2 className="text-white text-5xl lg:text-5xl leading-10 mr-16">
                Tech Stack
              </h2>
              <h2 className="hidden text-white text-white text-3xl lg:block text-5xl leading-10 m-0 ">
                |
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-5 mx-16">
              <ReactLogo className="h-16 w-16" />
              <TailwindLogo className="h-16 w-16" />
              <HTMLLogo className="h-16 w-16" />
              <CSSLogo className="h-16 w-16" />
              <JSLogo className="h-16 w-16" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
