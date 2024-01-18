import React, { useEffect, useRef } from "react";
import { motion, inView, useScroll, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { ServicesData } from "../data/services.js";
import ARROW_SVG from "../svg/arrow-up-right.svg";

function ServicesCard() {

  // inView(listItems, () => {
  //   console.log("Element has entered the viewport")
  // })

  const listItems = ServicesData.map((item) => (
    <motion.li
      key={item.name}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.25, 0, 1],
        delay: 3,
      }}>
      <Link to={item.slug} className="card">
        <h5 className="title">{item.name}</h5>
        <p>{item.short_dis} </p>
        <span>
          <img src={ARROW_SVG} alt="" height={36} />
        </span>
        {/* <div className="discover">Discover this service</div> */}
      </Link>
    </motion.li>
  ));
  // <motion.div
  //     key={ticket.id}
  //     initial={{ opacity: 0, y: 20 }}
  //     animate={{ opacity: 1, y: 0 }}
  //     transition={{
  //       duration: 0.4,
  //       ease: [0.25, 0.25, 0, 1],
  //       delay: recalculatedDelay,
  //     }}
  //   >
  //     {/* Actual ticket component */}
  //   </motion.div>

  return (
    <nav className="nav-services">
      {/* <NumberList services={ServicesData} /> */}

      <ul className="cards">
        {listItems}
        {/* <li>
          <Link to="service/website" className="card">
            <div className="title">Website</div>
            <p>
              Custom Wordpress website design, landing page, E-Commerce,
              hosting, SEO, etc.
            </p>
            <div className="discover">Discover this service</div>
          </Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default ServicesCard;
