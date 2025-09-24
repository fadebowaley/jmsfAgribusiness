import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Slides from "../components/Slides";
import Welcome from "../components/Welcome";
import Banner from "../components/Banner";
import Team from "../components/Team";


import LogoGrid from "../components/Logos";
import Footer from "../components/Footer";

// Parent container variant
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3, // controls delay between items
    },
  },
};

// Child item variant
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function Home() {
  return (
    <>
      <Navigation />
      
      <Slides />
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={fadeInUp}>
          <Welcome />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Banner />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Team />
        </motion.div>

        <section className="bg-white pb-15" id="LogoGrid">
          <motion.div variants={fadeInUp}>
            <LogoGrid/>
          </motion.div>
        </section>
        
        <motion.div variants={fadeInUp}>
          <Footer />
        </motion.div>
      </motion.div>
    </>
  );
}

export default Home;
