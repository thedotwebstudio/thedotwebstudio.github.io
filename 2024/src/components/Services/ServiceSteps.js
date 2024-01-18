import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import StepsCard from "../../Pages/StepsCard";

const ServiceSteps = (props) => {
  console.log("ServiceSteps", props);
  const [steps, setSteps] = useState(props.data[0].steps);

  return (
    <motion.section className="service-steps">
      <h4>Our steps</h4>
      <div className="main-section">
        <div className="left-sec">
          <h1>How does a project at TheDot work?</h1>
        </div>
        <div className="right-sec"></div>
      </div>
      <StepsCard stepsdata={steps.steps} />
    </motion.section>
  );
};

export default ServiceSteps;
