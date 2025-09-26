import React from 'react';
import { motion } from "framer-motion";
import { Users, Award, Star, ChevronRight } from "lucide-react";
import Footer from '../components/Footer';
import MainNav from '../components/MainNav';
import Hero from "../components/Hero";
import imagesData from '../data/images.json';

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
  // Get team members from JSON data
  const teamMembers = imagesData.teamMembers.leadership;

  return (
    <>
      <MainNav />

      {/* Enhanced Hero Section */}
      <section className="relative">
        <Hero title="Our Leadership Team" bgImage="/public/banner.jpg" />

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

              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our leadership team brings together decades of experience in agricultural development, 
                business strategy, and international consulting. Each member contributes unique expertise 
                to drive sustainable growth and innovation across Nigeria's agricultural landscape.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Leadership Stats */}
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div variants={fadeInUp} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">15+ Years</h3>
                <p className="text-gray-600">Combined Experience</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Expert Team</h3>
                <p className="text-gray-600">Dedicated Professionals</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Proven Results</h3>
                <p className="text-gray-600">Successful Projects</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Leadership Team Grid */}
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="py-20 bg-gradient-to-br from-gray-50 to-green-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-[Poppins]">
                Our <span className="text-green-600">Leadership Team</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Meet the experienced professionals who lead JMSF Agribusiness in transforming 
                Nigeria's agricultural sector through innovative solutions and strategic partnerships.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {teamMembers.map((member) => (
                <motion.div
                  key={member.id}
                  variants={fadeInUp}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-green-100/50">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Profile Image */}
                    <div className="flex-shrink-0">
                      <div className="relative overflow-hidden rounded-2xl">
                        <img
                          src={member.img}
                          alt={member.name}
                          className="w-48 h-48 object-cover transition-all duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>

                    {/* Member Info */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2 font-[Poppins] group-hover:text-green-600 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-green-600 font-semibold text-lg mb-4">
                        {member.position}
                      </p>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {member.bio}
                      </p>

                      {/* Social Links */}
                      <div className="flex gap-4">
                        <a
                          href={member.linkedin}
                          className="w-10 h-10 bg-gray-100 hover:bg-green-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                          aria-label={`${member.name} LinkedIn`}
                          target="_blank"
                          rel="noopener noreferrer">
                          <svg className="w-5 h-5 text-gray-600 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                        <a
                          href={member.facebook}
                          className="w-10 h-10 bg-gray-100 hover:bg-green-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                          aria-label={`${member.name} Facebook`}
                          target="_blank"
                          rel="noopener noreferrer">
                          <svg className="w-5 h-5 text-gray-600 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        </a>
                        <a
                          href={member.twitter}
                          className="w-10 h-10 bg-gray-100 hover:bg-green-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                          aria-label={`${member.name} Twitter`}
                          target="_blank"
                          rel="noopener noreferrer">
                          <svg className="w-5 h-5 text-gray-600 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          variants={fadeInUp}
          className="py-16 bg-gradient-to-r from-green-600 to-green-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-[Poppins]">
              Ready to Work with Our Expert Team?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Connect with our leadership team to discuss your agricultural project 
              and discover how we can help transform your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-green-600 hover:bg-green-50 font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                Contact Our Team
                <ChevronRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="/book-consultation"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold text-lg rounded-xl transition-all duration-300">
                Book Consultation
              </motion.a>
            </div>
          </div>
        </motion.section>
      </section>

      <Footer />
    </>
  );
}

export default Leadership;
