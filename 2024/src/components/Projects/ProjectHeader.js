import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ARROW_SVG from "../../svg/arrow-up-right.svg";

const ProjectHeader = (props) => {
  console.log("PROJECTS PROPS", props.data);
  const [project, setProject] = useState(props.data[0]);
  return (
    <>
      {project && (
        <motion.section className="project-header">
          {/* <div className="name">
            <h1 style={{ color: project.brand_color[0] }}>{project.name}</h1>
            <p>{project.logo}</p>
            <ul className="services">
              {project.services.map((item, i) => (
                <li key={i}>{item} &nbsp;</li>
              ))}
            </ul>
          </div> */}
          {/* ///////////////////////////////////////////////*/}
          <div className="project-details hv-space">
            <div className="left">
              <h2>{project.name}</h2>
              <p>{project.short_dis}</p>
              <br />
              <ul className="services">
                {project.services.map((item, i) => (
                  <li key={i}>{item} &nbsp;</li>
                ))}
              </ul>
              <img src={ARROW_SVG} alt="" height={36} />
            </div>
            <div className="right">
              <img alt="browser" src={project.images.browser} width="100%" />
            </div>
          </div>
          <div className="hv-space">
            <img
              src={project.images.designs}
              alt={project.images.designs}
              width="100%"
            />
          </div>
          <div className="brand-details hv-space">
            <h1>Brand/Client details</h1>
            <ul className="colorguide">
              {project.brand_color.map((item) => (
                <li key={item} style={{ background: item }}>
                  {item}
                </li>
              ))}
              <li style={{ background: "#000" }}>#000000</li>
              <li style={{ background: "#fff" }}>#FFFFFF</li>
            </ul>
          </div>
          <div className="website-imgs hv-space">
            <div>
              <img src={project.images.website} alt={project.images.website} />
            </div>
            <div>
              <img
                src={project.images.website2}
                alt={project.images.website2}
              />
            </div>
          </div>
          <div className="gallery hv-space">
            <h1>Gallery</h1>
            <div style={{ background: project.brand_color[0] }}>
              <img
                alt={project.images.laptop}
                src={project.images.laptop}
                width="100%"
              />
            </div>
          </div>
          {console.log(
            "project.social_media_posts",
            project.social_media_posts
          )}

          <div className="social hv-space">
            <h1>Social media posts</h1>
          </div>
        </motion.section>
      )}
    </>
  );
};

export default ProjectHeader;
