import React from 'react';
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  MessageCircle,
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import Map from '../components/map';
import Form from '../components/form';
import Info from '../components/info';
import MainNav from '../components/MainNav';
import Hero from "../components/Hero";
import Footer from '../components/Footer';

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

function Contact(){
    return (
      <>
        <MainNav />

        {/* Enhanced Hero Section */}
        <section className="relative">
          <Hero title="Contact Us" bgImage="/images/hero/blog.jpg" />

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
                  <MessageCircle className="w-8 h-8 text-green-600" />
                  <div className="w-16 h-1 bg-green-600 rounded-full"></div>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-[Poppins] max-w-4xl mx-auto leading-tight">
                  Let's Start a Conversation About Your
                  <span className="text-green-600"> Agricultural Vision</span>
                </h2>

                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                  Ready to transform your agricultural venture? Our team of
                  experts is here to provide strategic guidance, answer your
                  questions, and help you unlock sustainable growth
                  opportunities across Nigeria's agricultural value chain.
                </p>


              </motion.div>
            </div>
          </div>
        </section>

        {/* Enhanced Contact Information Section */}
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 font-[Poppins]">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Multiple ways to connect with our team for all your agricultural
                consulting needs
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Contact Cards */}
              {[
                {
                  icon: MapPin,
                  title: "Visit Our Office",
                  content:
                    "Suite 12, Candizelux Plaza, Kubwa Road, FCT Abuja, Nigeria",
                  action: "Get Directions",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  content: "info@jmsfagribusiness.com",
                  action: "Send Email",
                  color: "from-green-500 to-green-600",
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  content: "+234-812-946-0848",
                  action: "Call Now",
                  color: "from-orange-500 to-orange-600",
                },
              ].map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-gradient-to-br from-gray-50 to-green-50/30 p-8 rounded-2xl border border-green-100 hover:shadow-lg transition-all duration-300 text-center group">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${contact.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 font-[Poppins]">
                      {contact.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {contact.content}
                    </p>
                    <button className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                      {contact.action}
                    </button>
                  </motion.div>
                );
              })}
            </div>

            {/* Contact Form and Info */}
            <motion.div
              variants={fadeInUp}
              className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Enhanced Contact Form */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 font-[Poppins]">
                  Send Us a Message
                </h3>
                <Form />
              </div>

              {/* Enhanced Info Card */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6 font-[Poppins]">
                    Why Contact JMSF?
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Free initial consultation to understand your needs",
                      "Expert advice from 15+ years of industry experience",
                      "Customized solutions for your specific challenges",
                      "Ongoing support throughout your agricultural journey",
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        </div>
                        <span className="text-green-100">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-6 font-[Poppins] flex items-center gap-2">
                    <Clock className="w-6 h-6 text-green-600" />
                    Business Hours
                  </h3>
                  <div className="space-y-3">
                    {[
                      { day: "Monday - Friday", hours: "8:00 AM - 5:00 PM" },
                      { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
                      { day: "Sunday", hours: "Closed" },
                    ].map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">
                          {schedule.day}
                        </span>
                        <span className="text-gray-600">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-white rounded-2xl p-8 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-6 font-[Poppins]">
                    Follow Us
                  </h3>
                  <div className="flex gap-4">
                    {[
                      {
                        icon: Facebook,
                        href: "http://facebook.com/jmsfagribiz",
                        color: "hover:bg-blue-600",
                      },
                      {
                        icon: Twitter,
                        href: "http://twitter.com/jmsfagribiz",
                        color: "hover:bg-blue-400",
                      },
                      { icon: Linkedin, href: "#", color: "hover:bg-blue-700" },
                      {
                        icon: Instagram,
                        href: "#",
                        color: "hover:bg-pink-600",
                      },
                    ].map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 ${social.color} hover:text-white transition-all duration-300 transform hover:scale-110`}>
                          <IconComponent className="w-5 h-5" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Enhanced Map Section */}
        <motion.section
          variants={fadeInUp}
          className="py-20 bg-gradient-to-br from-gray-50 to-green-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 font-[Poppins]">
                Find Our Office
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Located in the heart of FCT Abuja, we're easily accessible and
                ready to welcome you
              </p>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-green-100">
              <Map />
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section variants={fadeInUp} className="py-20 bg-green-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-[Poppins]">
              Ready to Start Your
              <span className="text-green-200"> Agricultural Journey?</span>
            </h2>
            <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Don't wait to transform your agricultural vision into reality.
              Contact us today for a free consultation and discover how we can
              help you achieve sustainable success.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="/book-consultation"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-10 py-4 bg-white text-green-600 hover:bg-green-50 font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                Book Free Consultation
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

export default Contact