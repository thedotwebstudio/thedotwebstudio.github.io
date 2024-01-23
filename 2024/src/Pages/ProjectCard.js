import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ProjectsData } from "../data/projects.js";
import ARROW_SVG from "../svg/arrow-up-right.svg";

function ProjectsCard() {
  const listItems = ProjectsData.map((item) => (
    <motion.li
      key={item.name}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.25, 0, 1],
        delay: 3,
      }}>
      <Link
        to={`work/${item.slug}`}
        className="card"
        style={{ background: item.brand_color[0] }}>
        {item.logo_url && <img src={item.logo_url} alt="" height={36} />}
        <h6 className="title">{item.name}</h6>
        <p>{item.short_dis} </p>
        <p>
          <img src={ARROW_SVG} alt="" height={36} />
        </p>
        <div className="services">
          <ul>
            <li>
              {item.services.map((item, i) => (
                <span key={i}>{item} &nbsp;</span>
              ))}
            </li>
          </ul>
        </div>
      </Link>
    </motion.li>
  ));
  return (
    <nav className="nav-services">
      <ul className="cards">{listItems}</ul>
    </nav>
  );
}
export default ProjectsCard;