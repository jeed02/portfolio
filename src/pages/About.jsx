import React from "react";
import { motion } from "framer-motion";
import { Spotify } from "react-spotify-embed";
const About = () => {
  return (
    <motion.div
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
      <h1 className="text-[4rem]">ABOUT ///</h1>
      <p className="text-[2rem] text-grey-text my-16 leading-16">
        I am a Graduate from the University of Auckland with a GPA of 7.16. I
        specialize in Front End development but I am open to Full Stack and Back
        End opportunities. I have been coding since high school and have been
        doing Web Development for two years. I am also a big fan of all kinds of
        music, however, my favourites are: City Pop, J-Pop, R&B, Hip-hop, K-Pop,
        Disco and Jazz.
      </p>
      <div>
        <p className="text-[2rem] text-grey-text my-16 leading-16">
          Here's what I'm currently listening to:
        </p>
        <Spotify
          className="w-full"
          link="https://open.spotify.com/playlist/37i9dQZF1EptRXl5ZEQ0O1?si=dd7f4f25649f4ae3"
        />
      </div>
    </motion.div>
  );
};

export default About;
