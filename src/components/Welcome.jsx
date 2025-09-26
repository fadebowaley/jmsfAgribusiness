import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaDownload, FaBookOpen, FaPaperPlane, FaCheck, FaTimes } from 'react-icons/fa';
import { CheckCircle, Award, Users, TrendingUp, Mail, FileText, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Welcome = () => {
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [email, setEmail] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [emailError, setEmailError] = useState('');

  const achievements = [
    {
      icon: Award,
      text: "15+ Years Experience",
      subtext: "International Development",
    },
    {
      icon: Users,
      text: "500+ Farmers Supported",
      subtext: "Across Nigeria & Africa",
    },
    {
      icon: TrendingUp,
      text: "Agricultural Growth",
      subtext: "Sustainable Solutions",
    },
    {
      icon: CheckCircle,
      text: "Proven Results",
      subtext: "Stakeholder Value Creation",
    },
  ];

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleDownloadClick = () => {
    setShowDownloadModal(true);
    setEmail('');
    setEmailError('');
    setDownloadSuccess(false);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setEmailError('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setEmailError('');
    setIsDownloading(true);

    // Simulate download process with animation
    setTimeout(() => {
      setIsDownloading(false);
      setDownloadSuccess(true);
      
      // Trigger actual download
      const link = document.createElement('a');
      link.href = '/public/doc/JMSF-PROFILE-UPDATE.pdf';
      link.download = 'JMSF-Agribusiness-Profile.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Close modal after success
      setTimeout(() => {
        setShowDownloadModal(false);
        setDownloadSuccess(false);
        setEmail('');
      }, 2000);
    }, 2000);
  };

  const closeModal = () => {
    if (!isDownloading) {
      setShowDownloadModal(false);
      setEmail('');
      setEmailError('');
      setDownloadSuccess(false);
    }
  };

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 font-[Roboto] bg-gradient-to-br from-gray-50 to-green-50/30">
        <div className="max-w-7xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
            {/* Hero Image & CTA */}
            <div className="flex flex-col w-full lg:order-1">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-8 group">
                <img
                  src="/about.jpg"
                  alt="JMSF Agribusiness - Agricultural Excellence"
                  className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-2">
                    Growing Nigeria's Future
                  </h3>
                  <p className="text-sm opacity-90">
                    Sustainable Agricultural Solutions
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/book-consultation"
                  className="flex justify-center items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg group">
                  <FaBookOpen className="group-hover:rotate-12 transition-transform" />
                  Book Consultation
                </Link>

                <motion.button 
                  onClick={handleDownloadClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 group">
                  <FaDownload className="group-hover:animate-bounce" />
                  Download Brochure
                </motion.button>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 lg:order-2">
              {/* Header Section */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-1 bg-green-600 rounded-full"></div>
                  <span className="text-green-600 font-semibold text-lg uppercase tracking-wider">
                    Welcome to Excellence
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 font-[Poppins] mb-6 leading-tight">
                  JMSF <span className="text-green-600">Agribusiness</span>
                </h1>

                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 font-[Poppins] mb-8 leading-relaxed">
                  Leading Agricultural Advisory Services & Consulting Excellence
                </h2>

                <div className="w-24 h-1.5 bg-gradient-to-r from-green-600 to-green-400 rounded-full mb-8"></div>
              </div>

              {/* Achievements Grid */}
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-green-100/50">
                      <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 text-lg mb-1">
                          {achievement.text}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {achievement.subtext}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Description Section */}
              <div className="prose prose-lg max-w-none mb-12">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-green-100/50">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    We are a premier{" "}
                    <strong className="text-green-600">
                      agricultural advisory services
                    </strong>{" "}
                    consulting firm with over 15 years of proven experience in the
                    International Development sector across Nigeria and Africa.
                    Our expert team delivers exceptional results and creates
                    sustainable value for stakeholders in the agribusiness
                    ecosystem.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mt-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        Market Challenge
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Nigeria's economy has long been driven by Oil and Gas with
                        minimal improvements in non-oil sectors, particularly
                        agriculture. Our mission is to transform this landscape
                        through strategic interventions.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                        Our Solution
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        We believe every agribusiness investment should create
                        value, improve livelihoods, develop local economies, and
                        guarantee sustainable returns through innovative market
                        system solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Modal */}
      <AnimatePresence>
        {showDownloadModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={closeModal}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl max-w-md w-full p-8 relative"
              onClick={(e) => e.stopPropagation()}>
              
              {/* Close Button */}
              <button
                onClick={closeModal}
                disabled={isDownloading}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50">
                <FaTimes className="w-5 h-5" />
              </button>

              {!downloadSuccess ? (
                <>
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Download Our Brochure
                    </h3>
                    <p className="text-gray-600">
                      Get our comprehensive company profile and learn more about our services
                    </p>
                  </div>

                  {/* Email Form */}
                  <form onSubmit={handleEmailSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                          disabled={isDownloading}
                        />
                      </div>
                      {emailError && (
                        <p className="text-red-500 text-sm mt-2 flex items-center gap-2">
                          <FaTimes className="w-4 h-4" />
                          {emailError}
                        </p>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isDownloading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3">
                      {isDownloading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Preparing Download...
                        </>
                      ) : (
                        <>
                          <FaDownload />
                          Download Brochure
                        </>
                      )}
                    </motion.button>
                  </form>

                  {/* Benefits */}
                  <div className="mt-6 p-4 bg-green-50 rounded-xl">
                    <h4 className="font-semibold text-green-800 mb-2">What you'll get:</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li className="flex items-center gap-2">
                        <FaCheck className="w-3 h-3" />
                        Complete company profile
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheck className="w-3 h-3" />
                        Service offerings overview
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheck className="w-3 h-3" />
                        Success stories and case studies
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheck className="w-3 h-3" />
                        Contact information
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                /* Success State */
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.6 }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaCheck className="w-10 h-10 text-green-600" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Download Complete!
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    Thank you for your interest in JMSF Agribusiness. 
                    Your brochure has been downloaded successfully.
                  </p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex gap-3">
                    <button
                      onClick={closeModal}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300">
                      Close
                    </button>
                    <Link
                      to="/contact"
                      className="flex-1 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                      Contact Us
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Welcome;
