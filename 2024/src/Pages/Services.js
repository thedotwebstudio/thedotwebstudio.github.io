import HeroBanner from "../components/HeroBanner";
import Marquee from "../components/Marquee";
import Achivment from "../components/Achivment";
import Experties from "../components/Expertise";
import SayHello from "../components/SayHello";
import { motion } from "framer-motion";
import HorizontalScroll from "../components/HorizontalScroll";
import ProjectsCard from "../components/Projects/ProjectCard";
import TextReveal from "../components/TextReveal";

function Services() {
  return (
    <motion.div className="page-wrapper">
      <Achivment />
      <Experties />
      {/* <HorizontalScroll /> */}
      <div>
        <TextReveal delay={0.25}>
          <h6> Case Studies</h6>
        </TextReveal>
        <TextReveal delay={0.5}>
          <h3>Selected Works</h3>
        </TextReveal>
      </div>
      <ProjectsCard cardLength={3} />
      <SayHello />
    </motion.div>
  );
}

export default Services;
