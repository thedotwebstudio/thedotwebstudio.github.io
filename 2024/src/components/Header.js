import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAnimate, stagger, motion } from "framer-motion";
import LOGO_PNG from "../svg/logo.png";
import { MenuToggle } from "./Header/MenuToggle";
import { Menu } from "./Header/Menu";
// import LOGO_SVG from "../svg/logo.svg";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleShowNavbar = () => {
    // setIsOpen(!isOpen);
  };
  useEffect(() => {}, []);
  ///////////////////////////////////////////////
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      y: "-100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 1.2,
      },
    },
    closed: { opacity: 0 },
  };

  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
  };

  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };

  const fadeInStart = { opacity: 0 };
  const fadeInEnd = { opacity: 1 };
  const fadeInTransition = { duration: 1 };
  ///////////////////////////////////////////////
  return (
    <header className="header-wrapper">
      <div className="container">
        <motion.nav
          initial="closed"
          animate={mobileNavOpen ? "opened" : "closed"}>
          <motion.div className="logo-container" variants={hideNavItemsVariant}>
            {/* <motion.h1 variants={hideNavItemsVariant}> */}
            <Link to="/">
              <img src={LOGO_PNG} alt="" />
            </Link>
            {/* </motion.h1> */}
          </motion.div>
          <div className="menu-container">
            <motion.button
              variants={hideNavItemsVariant}
              onClick={() => setMobileNavOpen(true)}>
              +
            </motion.button>
          </div>
          <motion.div variants={mobileMenuVariant} className="mobile-menu">
            <motion.button
              variants={fadeInVariant}
              onClick={() => setMobileNavOpen(false)}>
              Close
            </motion.button>
            {/*<motion.ul variants={ulVariant}>
               {MOBILE_NAV_ITEMS.map(navItem => (
              <motion.li whileTap={{ scale: 0.95 }} key={navItem.id}>
                <motion.div variants={liVariant}>{navItem.navTitle}</motion.div>
              </motion.li>
            ))} 
          </motion.ul>*/}
            <Menu
              toggle={() => {
                setMobileNavOpen(!mobileNavOpen);
              }}
              ulVariant={ulVariant}
              liVariant={liVariant}
            />
            <motion.div variants={fadeInVariant} className="contact">
              <h6>+91 98216 72735</h6>
              <h6>thedotwebstudio@gmail.com</h6>
            </motion.div>
          </motion.div>
        </motion.nav>

        {/* <div className="brand">
          <Link to="/">
            <img src={LOGO_PNG} alt="" height={60} />
          </Link>
          <MenuToggle
            toggle={() => {
              setIsOpen(!isOpen);
            }}
          /> */}

        {/* <div className="burger" onClick={handleShowNavbar}>
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsOpen(!isOpen)}>
              <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
                <svg width="15" height="15" viewBox="0 0 20 20">
                  <path d="M0 7 L 20 7 L 10 16" />
                </svg>
              </div>
            </motion.button>
             <button>MENU</button>
          </div> */}
        {/* </div> */}
        {/* <Menu
          isOpen={isOpen}
          toggle={() => {
            setIsOpen(!isOpen);
          }}
        /> */}

        {/* <nav className={`${isOpen && "open"}`}>
          <ul style={{}}>
            <li
              onClick={() => {
                setIsOpen(false);
              }}>
              <Link to="/work">Work</Link>
            </li>
            <li
              onClick={() => {
                setIsOpen(false);
              }}>
              <Link to="/studio">Studio</Link>
            </li>
            <li
              onClick={() => {
                setIsOpen(false);
              }}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav> */}
      </div>
    </header>
  );
}

export default Header;
