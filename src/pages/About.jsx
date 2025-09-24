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
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function About() {
  return (
    <>
      <MainNav />

      {/* Enhanced Hero Section */}
      <section className="relative">
        <Hero title="About JMSF Agribusiness" bgImage="" />

        {/* Breadcrumb and Introduction */}
        <div className="bg-gradient-to-b from-green-50/50 to-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="w-16 h-1 bg-green-600 rounded-full"></div>
                <span className="text-green-600 font-semibold text-lg uppercase tracking-wider">
                  Our Story
                </span>
                <div className="w-16 h-1 bg-green-600 rounded-full"></div>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-[Poppins] max-w-4xl mx-auto leading-tight">
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

      {/* Main Content with Animation */}
      <motion.div variants={container} initial="hidden" animate="show">
        {/* Company History Section */}
        <motion.section variants={fadeInUp} className="bg-white">
          <CompanyHistory />
        </motion.section>

        {/* Why Choose Us Section */}
        <motion.section
          variants={fadeInUp}
          className="bg-gradient-to-br from-gray-50 to-green-50/30">
          <WhyChooseUs />
        </motion.section>

        {/* Enhanced Stats Section */}
        <motion.section variants={fadeInUp} className="py-20 bg-green-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-[Poppins]">
                Our Impact in Numbers
              </h2>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                Measurable results that demonstrate our commitment to
                agricultural excellence
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  number: "15+",
                  label: "Years Experience",
                  description: "International Development",
                },
                {
                  number: "500+",
                  label: "Farmers Supported",
                  description: "Across Nigeria & Africa",
                },
                {
                  number: "10,000+",
                  label: "Jobs Created",
                  description: "Through Our Programs",
                },
                {
                  number: "₦500M+",
                  label: "Value Generated",
                  description: "For Stakeholders",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl lg:text-6xl font-bold text-white mb-2 font-[Poppins]">
                      {stat.number}
                    </div>
                    <div className="text-lg font-semibold text-green-100 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-green-200">
                      {stat.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Call to Action Banner */}
        <motion.section variants={fadeInUp} className="bg-white">
          <div className="py-8">
            <Banner />
          </div>
        </motion.section>

        {/* Enhanced Contact CTA */}
        <motion.section
          variants={fadeInUp}
          className="bg-gradient-to-br from-gray-50 to-green-50/30 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-[Poppins]">
              Ready to Transform Your
              <span className="text-green-600"> Agricultural Vision?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
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
