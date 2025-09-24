import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  CheckCircle,
  DollarSign,
  FileText,
  Send,
  Clock,
  Users,
  Award,
  Phone,
  Mail,
  MessageCircle,
  User,
  Building,
  MapPin,
  Calendar,
  Zap,
} from "lucide-react";
import MainNav from "../components/MainNav";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

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

function Quote() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    location: "",
    projectType: "",
    projectSize: "",
    timeline: "",
    budget: "",
    message: "",
    urgency: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quote request submitted:", formData);
    // Handle form submission
  };

  return (
    <>
      <MainNav />

      {/* Enhanced Hero Section */}
      <section className="relative">
        <Hero title="Get Your Project Quote" bgImage="./" />

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
                <Calculator className="w-8 h-8 text-green-600" />
                <div className="w-16 h-1 bg-green-600 rounded-full"></div>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-[Poppins] max-w-4xl mx-auto leading-tight">
                Get a Detailed Quote for Your
                <span className="text-green-600"> Agricultural Project</span>
              </h2>

              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                Ready to move forward with your agricultural venture? Get a
                comprehensive quote tailored to your specific needs, timeline,
                and budget. Our transparent pricing ensures you know exactly
                what to expect for your investment.
              </p>

              {/* Quote Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {[
                  { icon: Clock, number: "24hrs", label: "Quote Delivery" },
                  { icon: FileText, number: "Detailed", label: "Breakdown" },
                  { icon: Users, number: "500+", label: "Projects Quoted" },
                  { icon: Award, number: "Transparent", label: "Pricing" },
                ].map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="text-center group">
                      <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-700 transition-colors duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-gray-800 mb-1 font-[Poppins]">
                        {stat.number}
                      </div>
                      <div className="text-sm font-medium text-gray-600">
                        {stat.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Quote Form */}
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="py-20 bg-gradient-to-br from-gray-50 to-green-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 font-[Poppins]">
              Request Your Custom Quote
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Fill out the detailed form below and receive a comprehensive quote
              within 24 hours
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Enhanced Quote Form */}
            <motion.div variants={fadeInUp}>
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-green-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 font-[Poppins]">
                  Project Details
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-gray-50 focus:bg-white"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-gray-50 focus:bg-white"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                          className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-gray-50 focus:bg-white"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Company/Organization
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Enter company name"
                          className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-gray-50 focus:bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Location *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="State, region, or specific location"
                        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-gray-50 focus:bg-white"
                        required
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Type *
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-gray-50 focus:bg-white"
                        required>
                        <option value="">Select service type</option>
                        <option value="agricultural-advisory">
                          Agricultural Advisory
                        </option>
                        <option value="agro-tourism">Agro-Tourism</option>
                        <option value="commodity-trading">
                          Commodity Trading & Market Development
                        </option>
                        <option value="training-provision">
                          Training & Capacity Building
                        </option>
                        <option value="renewable-energy">
                          Renewable Energy & Environmental Management
                        </option>
                        <option value="comprehensive">
                          Comprehensive Package
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Project Scale
                      </label>
                      <select
                        name="projectSize"
                        value={formData.projectSize}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-gray-50 focus:bg-white">
                        <option value="">Select project scale</option>
                        <option value="small">
                          Small Scale (1-10 hectares)
                        </option>
                        <option value="medium">
                          Medium Scale (10-50 hectares)
                        </option>
                        <option value="large">
                          Large Scale (50+ hectares)
                        </option>
                        <option value="enterprise">Enterprise Level</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-gray-50 focus:bg-white">
                        <option value="">Select budget range</option>
                        <option value="under-500k">Under ₦500K</option>
                        <option value="500k-2m">₦500K - ₦2M</option>
                        <option value="2m-10m">₦2M - ₦10M</option>
                        <option value="over-10m">Over ₦10M</option>
                        <option value="discuss">Prefer to discuss</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Timeline
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-gray-50 focus:bg-white">
                          <option value="">Select timeline</option>
                          <option value="immediate">Immediate (ASAP)</option>
                          <option value="1-month">Within 1 month</option>
                          <option value="3-months">1-3 months</option>
                          <option value="6-months">3-6 months</option>
                          <option value="planning">Still planning</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Urgency Level
                    </label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-gray-50 focus:bg-white">
                      <option value="">Select urgency level</option>
                      <option value="low">Low - No rush</option>
                      <option value="medium">Medium - Standard timeline</option>
                      <option value="high">High - Need quote soon</option>
                      <option value="urgent">Urgent - Need quote today</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Description *
                    </label>
                    <div className="relative">
                      <MessageCircle className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="5"
                        placeholder="Describe your project in detail - goals, current situation, specific challenges, expected outcomes..."
                        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-gray-50 focus:bg-white resize-none"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl transition font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
                    <Send className="w-5 h-5" />
                    Get My Quote
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Quote Information */}
            <motion.div variants={fadeInUp} className="space-y-8">
              {/* What's Included */}
              <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 font-[Poppins]">
                  What's Included in Your Quote
                </h3>
                <div className="space-y-4">
                  {[
                    "Detailed project assessment and scope definition",
                    "Comprehensive cost breakdown by phase",
                    "Timeline with key milestones and deliverables",
                    "Resource requirements and team composition",
                    "Risk analysis and contingency planning",
                    "Payment schedule and terms",
                    "Post-project support options",
                    "Valid for 30 days from issue date",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-200 flex-shrink-0 mt-0.5" />
                      <span className="text-green-100">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote Process */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 font-[Poppins]">
                  Our Quote Process
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Form Submission",
                      description:
                        "Submit your detailed project requirements through our form.",
                      icon: FileText,
                    },
                    {
                      step: "2",
                      title: "Initial Review",
                      description:
                        "Our team reviews your submission within 4 hours.",
                      icon: Users,
                    },
                    {
                      step: "3",
                      title: "Clarification Call",
                      description:
                        "We may call to clarify details and understand your needs better.",
                      icon: Phone,
                    },
                    {
                      step: "4",
                      title: "Quote Delivery",
                      description:
                        "Receive your comprehensive quote within 24 hours.",
                      icon: Zap,
                    },
                  ].map((step, index) => {
                    const IconComponent = step.icon;
                    return (
                      <div key={index} className="flex gap-4">
                        <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-800 mb-1 font-[Poppins]">
                            {step.title}
                          </h4>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-6 font-[Poppins]">
                  Need Help with Your Quote?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700 font-medium">
                      +234-812-946-0848
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700 font-medium">
                      quotes@jmsfagribusiness.com
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700 font-medium">
                      Mon-Fri: 8AM-6PM
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section variants={fadeInUp} className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-[Poppins]">
            Ready to Get Started with Your
            <span className="text-green-200"> Agricultural Project?</span>
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Don't let uncertainty hold you back. Get a detailed quote today and
            take the first step toward transforming your agricultural vision
            into a profitable reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              href="#quote-form"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-green-600 hover:bg-green-50 font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Quote Now
            </motion.a>

            <motion.a
              href="/book-consultation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold text-lg rounded-xl transition-all duration-300">
              Book Consultation
            </motion.a>
          </div>
        </div>
      </motion.section>

      <Footer />
    </>
  );
}

export default Quote;
