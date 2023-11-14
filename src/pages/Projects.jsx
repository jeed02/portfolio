import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const Projects = () => {
  return (
    <div className="my-10">
      <motion.h1
        className="text-[4rem] mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -500 },
        }}
      >
        PROJECTS ///
      </motion.h1>
      <div className="grid grid-cols-2">
        <motion.div
          className="col-span-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -500 },
          }}
        >
          <div>
            <img src="src\assets\codelikepro-editor.png"></img>
          </div>
        </motion.div>
        <motion.div
          className="col-span-1 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 200 },
          }}
        >
          <h1 className="text-[4rem]">CodeLikePro</h1>
          <p className="text-grey-text text-[2rem]">
            A practice website for programming students where they <br></br>
            create their own exercises, solve exercises from other <br></br>
            programmers, and showcase their solutions.
          </p>
          <div className="flex gap-16 justify-center">
            <div className="flex items-center gap-4">
              <h2 className="text-[3rem]">Code</h2>
              <FaGithub size={34} />
            </div>
            <div className="flex items-center gap-4">
              <h2 className="text-[3rem]">Live Demo</h2>
              <FaExternalLinkAlt size={34} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
