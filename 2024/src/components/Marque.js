import React, { useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Marque = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "start 0.05"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.section className="marque">
      <motion.div className="progress-bar" style={{ transformX: scaleX }}>
        <h3>Website</h3>
        <div>
          <span></span>
        </div>
        <h3>Branding</h3>
        <div>
          <span></span>
        </div>
        <h3>Webapps</h3>
        <div>
          <span></span>
        </div>
        <h3>SEO</h3>
        <div>
          <span></span>
        </div>
        <h3>Website</h3>
        <div>
          <span></span>
        </div>
        <h3>Branding</h3>
        <div>
          <span></span>
        </div>
        <h3>Webapps</h3>
        <div>
          <span></span>
        </div>
        <h3>SEO</h3>
        <div>
          <span></span>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Marque;
