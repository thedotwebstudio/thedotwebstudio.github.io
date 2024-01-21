import HeroBanner from "../components/HeroBanner";
import Marquee from "../components/Marquee";
import Achivment from "../components/Achivment";
import Experties from "../components/Expertise";
import SayHello from "../components/SayHello";
import { motion } from "framer-motion";
import HorizontalScroll from "../components/HorizontalScroll";
import ProjectsCard from "./ProjectCard";

function Home() {
  return (
    <motion.div className="page-wrapper">
      {/* <div>
        <div className="bg-animation">
          <div className="anim-cir"></div>
          <div className="anim-cir2"></div>
        </div>
      </div> */}
      <HeroBanner />
      <Achivment />
      <HorizontalScroll />
      {/* <Marquee /> */}
      <Experties />
      <ProjectsCard />
      <SayHello />
    </motion.div>
  );
}

export default Home;
