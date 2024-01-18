import { motion } from "framer-motion";
import ServiceHeader from "../components/Services/ServiceHeader";
import ServiceApproach from "../components/Services/ServiceApproach";
import SayHello from "../components/SayHello";
import ServiceSteps from "../components/Services/ServiceSteps";
import ServiceCaseStudies from "../components/Services/ServiceCaseStudies";

function Websites() {
  return (
    <motion.div className="page-wrapper">
      <ServiceHeader />

      <ServiceApproach />

      <ServiceSteps />

      <ServiceCaseStudies />
      
      <SayHello />
    </motion.div>
  );
}

export default Websites;
