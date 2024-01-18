import HeroBanner from "../components/HeroBanner";
import Marquee from "../components/Marquee";
import Achivment from "../components/Achivment";
import Experties from "../components/Expertise";
import SayHello from "../components/SayHello";
import { motion } from "framer-motion";
import HorizontalScroll from "../components/HorizontalScroll";

function Home() {
  return (
      <motion.div className="page-wrapper">
        <HeroBanner />
        <HorizontalScroll/>
        <Achivment />
        <Marquee />
        <Experties />
        <SayHello />
      </motion.div>
   );
}

export default Home;