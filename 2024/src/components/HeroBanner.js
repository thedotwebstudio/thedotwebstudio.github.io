import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HeroBanner = () => {
  return (
    <motion.section className="hero-banner">
      <motion.h1
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.75,
          ease: [0, 0.71, 0.2, 1.01],
        }}>
        Boosting Your Brand's Influence
      </motion.h1>
      <motion.h5
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 1,
          ease: [0, 0.71, 0.2, 1.01],
        }}>
        Enhance your brand with <span> DOT STUDIO</span>, a realm where boundless creativity
        thrives. We specialize in crafting impactful experiences that linger in
        memory. Let's transform your vision into tangible reality.
      </motion.h5>
      <div className="cta">
        <button className="secondary outline">DISCOVER OUR WORK</button>
      </div>
    </motion.section>
  );
};

export default HeroBanner;
