import React from "react";
import { motion } from "framer-motion";
import {
  Handshake,
  Globe,
  Award,
  TrendingUp,
  Users,
  Building,
} from "lucide-react";
import MainNav from "../components/MainNav";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Partners from "../components/Partners";

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

function Patners() {
  return (
    <>
      <MainNav />

      {/* Enhanced Hero Section */}
      <section className="relative">
        <Hero title="Our Strategic Partners" bgImage="/images/hero/blog.jpg" />

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
                <Handshake className="w-8 h-8 text-green-600" />
                <div className="w-16 h-1 bg-green-600 rounded-full"></div>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-[Poppins] max-w-4xl mx-auto leading-tight">
                Building Strong Partnerships for
                <span className="text-green-600"> Agricultural Excellence</span>
              </h2>

              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                Our success is built on collaborative relationships with leading
                organizations, international development agencies, government
                institutions, and private sector partners who share our vision
                for sustainable agricultural transformation across Nigeria and
                Africa.
              </p>


            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Categories */}
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 font-[Poppins]">
              Partnership Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We collaborate with diverse organizations across multiple sectors
              to maximize our impact and reach
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "International Development Agencies",
                description:
                  "Collaborating with global organizations to implement large-scale agricultural development programs across Nigeria and West Africa.",
                icon: Globe,
                examples: [
                  "DFID/UKaid",
                  "World Bank",
                  "USAID",
                  "EU Development Fund",
                ],
              },
              {
                title: "Government Institutions",
                description:
                  "Working closely with federal and state ministries to align our programs with national agricultural policies and initiatives.",
                icon: Building,
                examples: [
                  "Federal Ministry of Agriculture",
                  "State Agricultural Development Programs",
                  "Research Institutes",
                ],
              },
              {
                title: "Private Sector Partners",
                description:
                  "Partnering with agribusinesses, financial institutions, and technology providers to create sustainable market solutions.",
                icon: TrendingUp,
                examples: [
                  "Agricultural Processors",
                  "Financial Institutions",
                  "Technology Companies",
                  "Input Suppliers",
                ],
              },
              {
                title: "Academic & Research Institutions",
                description:
                  "Collaborating with universities and research centers to leverage cutting-edge agricultural research and innovation.",
                icon: Award,
                examples: [
                  "Agricultural Universities",
                  "Research Centers",
                  "Innovation Hubs",
                  "Extension Services",
                ],
              },
              {
                title: "Farmer Organizations",
                description:
                  "Building direct partnerships with farmer cooperatives and associations to ensure grassroots impact and sustainability.",
                icon: Users,
                examples: [
                  "Farmer Cooperatives",
                  "Producer Associations",
                  "Women's Groups",
                  "Youth Agricultural Groups",
                ],
              },
              {
                title: "Development Finance Institutions",
                description:
                  "Working with financial partners to ensure adequate funding and investment for sustainable agricultural projects.",
                icon: Handshake,
                examples: [
                  "Development Banks",
                  "Impact Investors",
                  "Grant-making Organizations",
                  "Microfinance Institutions",
                ],
              },
            ].map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-gray-50 to-green-50/30 p-8 rounded-2xl border border-green-100 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-700 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 font-[Poppins] group-hover:text-green-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {category.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      Key Partners Include:
                    </h4>
                    {category.examples.map((example, idx) => (
                      <div
                        key={idx}
                        className="text-sm text-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                        {example}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Partners Logos Section */}
      <motion.section
        variants={fadeInUp}
        className="py-20 bg-gradient-to-br from-gray-50 to-green-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 font-[Poppins]">
              Our Valued Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              We're proud to work alongside these respected organizations in
              transforming Nigeria's agricultural landscape
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
            <Partners />
          </div>
        </div>
      </motion.section>

      {/* Partnership Benefits */}
      <motion.section variants={fadeInUp} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 font-[Poppins]">
              Why Partner with JMSF?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  title: "Proven Track Record",
                  description:
                    "15+ years of successful project implementation with measurable impact across Nigeria and Africa.",
                },
                {
                  title: "Local Expertise",
                  description:
                    "Deep understanding of local markets, regulations, and cultural contexts that ensure project success.",
                },
                {
                  title: "Collaborative Approach",
                  description:
                    "We work as true partners, bringing our expertise to complement and enhance your organizational strengths.",
                },
                {
                  title: "Sustainable Impact",
                  description:
                    "Focus on creating lasting change that benefits communities, environment, and economic development.",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 font-[Poppins]">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 font-[Poppins]">
                  Ready to Partner with Us?
                </h3>
                <p className="text-green-100 mb-8 leading-relaxed">
                  Join our network of partners and help us create sustainable
                  agricultural solutions that transform lives and communities
                  across Nigeria and Africa.
                </p>
                <div className="space-y-4">
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="block w-full text-center px-8 py-4 bg-white text-green-600 hover:bg-green-50 font-bold rounded-xl transition-all duration-300">
                    Start a Partnership
                  </motion.a>
                  <motion.a
                    href="/services"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="block w-full text-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold rounded-xl transition-all duration-300">
                    Learn More
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </>
  );
}

export default Patners;
