import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import AnimatedWord from "./AnimatedWord";

const Achivment = () => {
  const Text =
    "Take a glimpse into our world of creativity. From striking visuals to seamless user experiences. Explore our portfolio to see how we bring ideas to life.";
  return (
    <motion.section className="achivment">
      {/* <h6> Achievements </h6>
      <h3>We create tools adapted to your image and your objectives.</h3> */}
      <div className="title-subtitle">
        <h3>Where creativity meets strategy & innovation</h3>
        <span></span>
        <p>
          Take a glimpse into our world of creativity. From striking visuals to
          seamless user experiences. Explore our portfolio to see how we bring
          ideas to life.
        </p>
      </div>
      {/* <AnimatedText value={Text} /> */}
      <AnimatedWord value={Text} />
    </motion.section>
  );
};

export default Achivment;
