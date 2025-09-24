import MainNav from "../components/MainNav";
import React, { useState } from "react";
import {
  CalendarCheck2,
  Send,
  CheckCircle,
  Clock,
  Users,
  Award,
  Phone,
  Mail,
  MessageCircle,
  User,
  Building,
  DollarSign,
  CreditCard,
  MapPin,
  Video,
  GraduationCap,
  UserCheck,
  Briefcase,
  Globe,
  Rocket,
} from "lucide-react";
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
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

function BookConsultation() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
    clientType: "",
    engagementMode: "",
    paymentMethod: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Consultation booking submitted:", formData);
  };

  // Consultation pricing tiers
  const pricingTiers = [
    {
      type: "Students",
      price: "$10.00",
      description: "1-hour consultation session",
      requirement: "Valid student ID required",
      icon: GraduationCap,
      color: "from-blue-500 to-blue-600",
      popular: false,
    },
    {
      type: "Startups",
      price: "$25.00",
      description: "1-hour consultation session",
      requirement: "Registration proof (under 18 months)",
      icon: Rocket,
      color: "from-purple-500 to-purple-600",
      popular: false,
    },
    {
      type: "Cooperatives",
      price: "$40.00",
      description: "1-hour consultation session",
      requirement: "Certificate of registration required",
      icon: UserCheck,
      color: "from-green-500 to-green-600",
      popular: true,
    },
    {
      type: "Corporate/Institutions",
      price: "$75.00",
      description: "1-hour consultation session",
      requirement: "Corporate entities, institutions, government agencies",
      icon: Briefcase,
      color: "from-orange-500 to-orange-600",
      popular: false,
    },
    {
      type: "International Clients",
      price: "$100.00",
      description: "1-hour consultation session",
      requirement: "Corporate & individuals in diaspora",
      icon: Globe,
      color: "from-red-500 to-red-600",
      popular: false,
    },
  ];

  return (
    <>
      <MainNav />

      {/* Enhanced Hero Section */}
      <section className="relative">
        <Hero title="Book Your Consultation" bgImage="/images/hero/blog.jpg" />

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
                <CalendarCheck2 className="w-8 h-8 text-green-600" />
                <div className="w-16 h-1 bg-green-600 rounded-full"></div>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-[Poppins] max-w-4xl mx-auto leading-tight">
                Professional Agricultural Consultation
                <span className="text-green-600"> Tailored to Your Needs</span>
              </h2>

              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                Get expert guidance from our experienced agricultural
                consultants. We offer specialized pricing for different client
                categories and flexible engagement options to meet your specific
                needs and budget.
              </p>

              {/* Consultation Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {[
                  { icon: Clock, number: "1 Hour", label: "Session Duration" },
                  {
                    icon: Users,
                    number: "5 Types",
                    label: "Client Categories",
                  },
                  { icon: Award, number: "Expert", label: "Consultants" },
                  {
                    icon: CalendarCheck2,
                    number: "72hrs",
                    label: "Booking Response",
                  },
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

      {/* Pricing Tiers Section */}
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 font-[Poppins]">
              Consultation Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer specialized pricing for different client categories. All
              sessions are 1 hour and include comprehensive agricultural
              guidance from our expert consultants.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {pricingTiers.map((tier, index) => {
              const IconComponent = tier.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`relative bg-gradient-to-br from-gray-50 to-green-50/30 rounded-2xl p-6 border-2 ${
                    tier.popular
                      ? "border-green-500 shadow-xl scale-105"
                      : "border-green-100 hover:border-green-200"
                  } transition-all duration-300 hover:shadow-lg`}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-600 text-white px-4 py-1 rounded-full text-xs font-bold">
                        POPULAR
                      </span>
                    </div>
                  )}

                  <div className="text-center">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${tier.color} flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-lg font-bold text-gray-800 mb-2 font-[Poppins]">
                      {tier.type}
                    </h3>

                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {tier.price}
                    </div>

                    <p className="text-sm text-gray-600 mb-4">
                      {tier.description}
                    </p>

                    <div className="text-xs text-gray-500 bg-gray-100 rounded-lg p-3">
                      <strong>Requirement:</strong>
                      <br />
                      {tier.requirement}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Payment Procedure Section */}
      <motion.section
        variants={fadeInUp}
        className="py-20 bg-gradient-to-br from-gray-50 to-green-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 font-[Poppins]">
              Booking Procedure
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Simple and secure payment process with confirmation within 72
              hours
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: "1",
                title: "Make Payment",
                description:
                  "Pay online via card or transfer to provided account details",
                icon: CreditCard,
                color: "from-blue-500 to-blue-600",
              },
              {
                step: "2",
                title: "Send Evidence",
                description:
                  "Email payment confirmation along with required documentation",
                icon: Mail,
                color: "from-green-500 to-green-600",
              },
              {
                step: "3",
                title: "Get Confirmation",
                description:
                  "Receive booking confirmation and slot details within 72 hours",
                icon: CalendarCheck2,
                color: "from-purple-500 to-purple-600",
              },
            ].map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="text-center p-8 bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4 text-sm">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 font-[Poppins]">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Engagement Modes */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center font-[Poppins]">
              Mode of Engagement
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-xl border border-blue-200">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2 font-[Poppins]">
                    In-Person Attendance
                  </h4>
                  <p className="text-gray-600">
                    Meet our consultants at our office for face-to-face
                    consultation and detailed project discussions.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-green-50 to-green-100/50 rounded-xl border border-green-200">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2 font-[Poppins]">
                    Online Meeting
                  </h4>
                  <p className="text-gray-600">
                    Join us via video conference from anywhere in the world for
                    convenient remote consultation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Enhanced Form Section */}
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Enhanced Consultation Form */}
            <motion.div variants={fadeInUp}>
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-green-100">
                <h2 className="text-3xl font-bold text-gray-800 mb-2 font-[Poppins]">
                  Book Your Consultation
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below to start the booking process. We'll
                  respond within 72 hours after payment confirmation.
                </p>

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
                          name="fullName"
                          value={formData.fullName}
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

                  {/* Client Type and Engagement Mode */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Client Type *
                      </label>
                      <select
                        name="clientType"
                        value={formData.clientType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-gray-50 focus:bg-white"
                        required>
                        <option value="">Select client type</option>
                        <option value="student">Students ($10.00)</option>
                        <option value="startup">Startups ($25.00)</option>
                        <option value="cooperative">
                          Cooperatives ($40.00)
                        </option>
                        <option value="corporate">
                          Corporate/Institutions ($75.00)
                        </option>
                        <option value="international">
                          International Clients ($100.00)
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Engagement Mode *
                      </label>
                      <select
                        name="engagementMode"
                        value={formData.engagementMode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-gray-50 focus:bg-white"
                        required>
                        <option value="">Select engagement mode</option>
                        <option value="in-person">In-Person Attendance</option>
                        <option value="online">Online Meeting</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Consultation Topic *
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-gray-50 focus:bg-white"
                        required>
                        <option value="">Select consultation topic</option>
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
                        <option value="business-planning">
                          Business Planning
                        </option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Payment Method *
                      </label>
                      <select
                        name="paymentMethod"
                        value={formData.paymentMethod}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-gray-50 focus:bg-white"
                        required>
                        <option value="">Select payment method</option>
                        <option value="card">Online Card Payment</option>
                        <option value="transfer">Bank Transfer</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Tell us about your consultation needs *
                    </label>
                    <div className="relative">
                      <MessageCircle className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="5"
                        placeholder="Describe what you'd like to discuss during the consultation, your current challenges, and specific questions you have..."
                        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-gray-50 focus:bg-white resize-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                    <p className="text-sm text-yellow-800">
                      <strong>Important:</strong> After submitting this form,
                      you'll receive payment details. Please complete payment
                      and email confirmation with required documentation to
                      finalize your booking.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl transition font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
                    <Send className="w-5 h-5" />
                    Submit Booking Request
                  </button>
                </form>
              </div>
            </motion.div>

            {/* What to Expect Section */}
            <motion.div variants={fadeInUp} className="space-y-8">
              {/* What You'll Get */}
              <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 font-[Poppins]">
                  What's Included in Your Consultation
                </h3>
                <div className="space-y-4">
                  {[
                    "1-hour dedicated session with expert consultant",
                    "Personalized advice for your specific situation",
                    "Market insights and opportunity identification",
                    "Risk assessment and mitigation strategies",
                    "Action plan and next steps recommendations",
                    "Follow-up resources and documentation",
                    "Q&A session for all your concerns",
                    "Recording available for online sessions",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-200 flex-shrink-0 mt-0.5" />
                      <span className="text-green-100">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 font-[Poppins]">
                  Payment Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                    <CreditCard className="w-5 h-5 text-blue-600" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Online Card Payment
                      </h4>
                      <p className="text-sm text-gray-600">
                        Secure payment via our online portal
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Bank Transfer
                      </h4>
                      <p className="text-sm text-gray-600">
                        Direct transfer to provided account details
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> Payment confirmation and required
                    documentation must be emailed after payment. We respond
                    within 72 hours to confirm your booking slot.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-6 font-[Poppins]">
                  Need Help with Booking?
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
                      bookings@jmsfagribusiness.com
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700 font-medium">
                      Mon-Fri: 8AM-5PM
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
            Ready to Get Expert Agricultural
            <span className="text-green-200"> Consultation?</span>
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of clients who have transformed their agricultural
            ventures with our expert guidance. Book your consultation today and
            take the first step toward success.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              href="#consultation-form"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-green-600 hover:bg-green-50 font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
              Book Consultation Now
            </motion.a>

            <motion.a
              href="/services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold text-lg rounded-xl transition-all duration-300">
              View All Services
            </motion.a>
          </div>
        </div>
      </motion.section>

      <Footer />
    </>
  );
}

export default BookConsultation;