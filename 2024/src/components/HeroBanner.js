import React, { useRef, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const HeroBanner = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end ", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // scrollYProgress.on("change", (e) => console.log(scaleX.current));
  }, []);

  return (
    <motion.section
      ref={ref}
      className="hero-banner"
      style={{ backgroundPosition: backgroundY }}>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.75,
          ease: [0, 0.71, 0.2, 1.01],
        }}>
        Boosting Your Brand's Influence
      </motion.h1>
      <motion.h5
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1,
          ease: [0, 0.71, 0.2, 1.01],
        }}>
        Enhance your brand with <span> DOT STUDIO</span>, a realm where
        boundless creativity thrives. We specialize in crafting impactful
        experiences that linger in memory. Let's transform your vision into
        tangible reality.
      </motion.h5>
      <motion.div className="progress-bar" style={{ scaleX }} />

      <div className="cta">
        <button className=" ">DISCOVER OUR WORK</button>
      </div>
    </motion.section>
  );
};

export default HeroBanner;
