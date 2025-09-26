import React from 'react';
import Footer from '../components/Footer';
import WhyChooseUs from '../components/WhyChooseUs'
import CompanyHistory from "../components/CompanyHistory";
import Hero from "../components/Hero";
import MainNav from "../components/MainNav";
import Banner from "../components/Banner";
import { motion } from "framer-motion";

// Animation variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function About() {
  return (
    <>
      <MainNav />

      {/* Enhanced Hero Section */}
      <section className="relative">
        <Hero title="About JMSF Agribusiness" bgImage="" />

        {/* Breadcrumb and Introduction */}
        <div className="bg-gradient-to-b from-green-50/50 to-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-16 h-1 bg-green-600 rounded-full"></div>
                <span className="text-green-600 font-semibold text-lg uppercase tracking-wider">
                  Our Story
                </span>
                <div className="w-16 h-1 bg-green-600 rounded-full"></div>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 font-[Poppins] max-w-4xl mx-auto leading-tight">
                Transforming Nigeria's Agricultural Landscape Through
                <span className="text-green-600">
                  {" "}
                  Expert Advisory Services
                </span>
              </h2>

              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                With over 15 years of proven experience in the International
                Development sector, we deliver exceptional results and create
                sustainable value for stakeholders across Nigeria and Africa's
                agribusiness ecosystem.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content with Optimized Layout */}
      <motion.div variants={container} initial="hidden" animate="show">
        {/* Company History Section with Key Achievements */}
        <motion.section variants={fadeInUp} className="bg-white">
          <CompanyHistory />
        </motion.section>

        {/* Why Choose Us Section */}
        <motion.section
          variants={fadeInUp}
          className="bg-gradient-to-br from-gray-50 to-green-50/30">
          <WhyChooseUs />
        </motion.section>

        {/* Call to Action Banner */}
        <motion.section variants={fadeInUp} className="bg-white">
          <div className="py-6">
            <Banner />
          </div>
        </motion.section>

        {/* Enhanced Contact CTA */}
        <motion.section
          variants={fadeInUp}
          className="bg-gradient-to-br from-gray-50 to-green-50/30 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 font-[Poppins]">
              Ready to Transform Your
              <span className="text-green-600"> Agricultural Vision?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Partner with JMSF Agribusiness to unlock sustainable growth
              opportunities and create lasting value in Nigeria's agricultural
              sector.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-10 py-4 bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Your Journey
              </motion.a>

              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-10 py-4 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold text-lg rounded-xl transition-all duration-300">
                Explore Our Services
              </motion.a>
            </div>
          </div>
        </motion.section>
      </motion.div>

      <Footer />
    </>
  );
}

export default About;
