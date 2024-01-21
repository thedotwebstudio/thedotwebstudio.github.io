import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ICON from "../..//images/projects/blackant/card-designs.jpg";
const ProjectHeader = (props) => {
  console.log("PROJECTS PROPS", props.data);
  const [project, setProject] = useState(props.data[0]);
  const images = require.context("../../images", true);
  const imageList = images.keys().map((image) => images(image));
  console.log("imageList",);

  return (
    <>
      {project && (
        <motion.section className="project-header">
          <div className="name">
            <h1 style={{ color: project.brand_color[0] }}>{project.name}</h1>
            <p>{project.logo}</p>
            <ul className="services">
              {project.services.map((item, i) => (
                <li key={i}>{item} &nbsp;</li>
              ))}
            </ul>
          </div>

          <div style={{ backgroundImage: ICON }}>
            {/* {imageList.map((image, index) => (
              <img key={index} src={image.default} alt={`image-${index}`} />
            ))} */}
            {/* <img src="../../images/projects/blackant/card-designs.jpg" alt="" /> */}
            {/* <img src={ICON} /> */}
            { console.log(project.images.img01)}
            <img alt="xxx" src={project.images.img01} />
          </div>
          <div>
            <p>{project.fullname}</p>
            <p>{project.short_dis}</p>
            <ul>
              <li>
                {project.brand_color.map((item, i) => (
                  <span key={i}>{item} &nbsp;</span>
                ))}
              </li>
            </ul>
          </div>
        </motion.section>
      )}
    </>
  );
};

export default ProjectHeader;
