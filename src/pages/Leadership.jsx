import React from 'react';
import { motion } from "framer-motion";
import { Users, Award, Star, ChevronRight } from "lucide-react";
import Footer from '../components/Footer';
import TeamGrid from '../components/LeadershipGrid';
import MainNav from '../components/MainNav';
import Hero from "../components/Hero";

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

function Leadership(){
    return (
      <>
        <MainNav />

        {/* Enhanced Hero Section */}
        <section className="relative">
          <Hero title="Our Leadership Team" bgImage="/images/hero/blog.jpg" />

          {/* Introduction Section */}
          <div className="bg-gradient-to-b from-green-50/50 to-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="w-16 h-1 bg-green-600 rounded-full"></div>
                  <Users className="w-8 h-8 text-green-600" />
                  <div className="w-16 h-1 bg-green-600 rounded-full"></div>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-[Poppins] max-w-4xl mx-auto leading-tight">
                  Meet the Visionaries Behind
                  <span className="text-green-600"> JMSF's Success</span>
                </h2>

                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                  Our leadership team brings together decades of experience in
                  agricultural development, business strategy, and international
                  consulting. Each leader is a specialist in their field, united
                  by a shared commitment to transforming Nigeria's agricultural
                  landscape.
                </p>


              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Grid Section */}
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="py-20 bg-gradient-to-br from-gray-50 to-green-50/30">
          <motion.div
            variants={fadeInUp}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 font-[Poppins]">
                Our Executive Team
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Each member brings unique expertise and passion to drive
                agricultural innovation and sustainable growth across Nigeria
                and Africa.
              </p>
            </div>

            <TeamGrid />
          </motion.div>
        </motion.section>

        {/* Leadership Philosophy Section */}
        <motion.section variants={fadeInUp} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 font-[Poppins]">
                Our Leadership Philosophy
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Collaborative Excellence",
                  description:
                    "We believe in the power of teamwork, bringing together diverse expertise to solve complex agricultural challenges.",
                  icon: Users,
                },
                {
                  title: "Innovation-Driven",
                  description:
                    "Our leaders champion innovative approaches, leveraging technology and best practices to transform traditional farming.",
                  icon: Star,
                },
                {
                  title: "Results-Oriented",
                  description:
                    "Every decision is made with measurable impact in mind, ensuring tangible value for all stakeholders.",
                  icon: Award,
                },
              ].map((principle, index) => {
                const IconComponent = principle.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="text-center p-8 bg-gradient-to-br from-gray-50 to-green-50/30 rounded-2xl border border-green-100 hover:shadow-lg transition-shadow duration-300">
                    <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 font-[Poppins]">
                      {principle.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {principle.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section variants={fadeInUp} className="py-20 bg-green-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-[Poppins]">
              Ready to Work with Our
              <span className="text-green-200"> Expert Team?</span>
            </h2>
            <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Connect with our leadership team to explore how we can drive
              sustainable growth and create lasting value in your agricultural
              ventures.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-10 py-4 bg-white text-green-600 hover:bg-green-50 font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                Schedule a Meeting
              </motion.a>

              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold text-lg rounded-xl transition-all duration-300">
                Explore Our Services
              </motion.a>
            </div>
          </div>
        </motion.section>

        <Footer />
      </>
    );
} 

export default Leadership