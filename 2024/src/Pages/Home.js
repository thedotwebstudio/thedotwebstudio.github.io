import HeroBanner from "../components/HeroBanner";
import Marque from "../components/Marque";
import Achivment from "../components/Achivment";
import Experties from "../components/Expertise";
import SayHello from "../components/SayHello";
import { motion } from "framer-motion";

function Home() {
  return (
      <motion.div className="page-wrapper">
        <HeroBanner />
        <Marque />
        <Achivment />
        <Experties />
        <SayHello />
      </motion.div>
   );
}

export default Home;
