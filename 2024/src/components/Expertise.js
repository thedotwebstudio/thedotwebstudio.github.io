import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ServicesCard from "../Pages/ServicesCard";

const Experties = () => {
  return (
    <motion.section className="experties">
      <div className="content-wrapper">
        <h6> Expertise </h6>
        <h3>What we can do for you!</h3>
        <p>
          From the design of a website, marketing tools or even the development
          of a web application to simplify your processes, our team of experts
          is there to bring your ideas to life and support you in achieving your
          objectives.
        </p>
      </div>
      <ServicesCard/>
    </motion.section>
  );
};

export default Experties;
