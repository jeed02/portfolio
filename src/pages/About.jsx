import React from "react";
import { motion } from "framer-motion";
import { Spotify } from "react-spotify-embed";
import { skills } from "../constants";
import { Tilt } from "react-tilt";

const SkillsCard = ({ index, title, icon }) => (
  <Tilt className="w-[250px] lg:w-[350px]">
    <motion.div className="w-full bg-gradient-to-r from-dark-purple to-light-purple p-[2px] rounded-[20px] shadow-card">
      <div className="bg-black rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
const About = () => {
  return (
    <>
      <motion.div
        id="about"
        className="my-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 200 },
        }}
      >
        <h1 className="text-7xl">ABOUT ///</h1>
        <p className="text-3xl text-grey-text my-16 leading-16">
          I am a Graduate from the University of Auckland with a GPA of 7.16. I
          specialize in Front End development but I am open to Full Stack and
          Back End opportunities. I have been coding since high school and have
          been doing Web Development for two years. I am also a big fan of all
          kinds of music, however, my favourites are: City Pop, J-Pop, R&B,
          Hip-hop, K-Pop, Disco and Jazz.
        </p>
        <div>
          <p className="text-3xl text-grey-text my-16 leading-16">
            Here's what I'm currently listening to:
          </p>
          <Spotify
            className="w-full mb-16"
            link="https://open.spotify.com/playlist/37i9dQZF1EptRXl5ZEQ0O1?si=dd7f4f25649f4ae3"
          />
        </div>
      </motion.div>
      <motion.div
        className="my-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 200 },
        }}
      >
        <h1 className="text-5xl">SKILLS ///</h1>
        <div className="mt-20 flex flex-wrap gap-10 items-center">
          {skills.map((service, index) => (
            <SkillsCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default About;
