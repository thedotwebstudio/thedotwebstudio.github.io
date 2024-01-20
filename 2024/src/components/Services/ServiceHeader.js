import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import ICON from "../../svg/sample-icon.svg";
const ServiceHeader = (props) => {
  console.log("PROPS", props.data);
  const [service, setService] = useState(props.data[0]);
  return (
    <motion.section className="service-header">
      {service && (
        <>
          <div className="icon">
            {/* <img src={ICON} alt="" /> */}
          </div>
          <div className="name">
            <h1>{service.name}</h1>
            <p>{service.tagline}</p>
          </div>
        </>
      )}
    </motion.section>
  );
};

export default ServiceHeader;
