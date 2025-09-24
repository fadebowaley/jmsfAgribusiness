import MainNav from "../components/MainNav";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Leaf,
  MapPin,
  TrendingUp,
  BookOpen,
  Zap,
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Target,
  ChevronDown,
  ChevronUp,
  Star,
  Clock,
  Briefcase,
} from "lucide-react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Services() {
  const [expandedServices, setExpandedServices] = useState({});

  const toggleService = (slug) => {
    setExpandedServices((prev) => ({
      ...prev,
      [slug]: !prev[slug],
    }));
  };

  const services = [
    {
      title: "Agricultural Advisory",
      slug: "agricultural-advisory",
      description:
        "Comprehensive strategic guidance for agricultural investments, analyzing value chains to identify gaps and provide smart solutions that strengthen market systems for both investors and beneficiaries.",
      longDescription:
        "Our agricultural advisory services provide end-to-end support for agricultural ventures, from feasibility studies to implementation strategies. We work closely with stakeholders to develop sustainable agricultural business models that create lasting value.",
      detailedContent: {
        overview:
          "We deliberately analyse the value chain of the investment to understand the gaps and provide smart solutions to improve the market system for investors and beneficiaries. Our approach ensures that agricultural investments are not only profitable but also contribute to sustainable development and community empowerment.",
        keyServices: [
          "Comprehensive feasibility studies and market analysis",
          "Value chain mapping and gap analysis",
          "Investment strategy development and optimization",
          "Business model design and implementation",
          "Stakeholder engagement and partnership facilitation",
          "Risk assessment and mitigation strategies",
          "Performance monitoring and evaluation systems",
        ],
        outcomes: [
          "Increased agricultural productivity and profitability",
          "Enhanced market access for smallholder farmers",
          "Improved value chain efficiency and sustainability",
          "Stronger partnerships between investors and communities",
        ],
      },
      image: "/agricAdvisory.png",
      icon: Leaf,
      color: "from-green-500 to-green-600",
      benefits: [
        "Value Chain Analysis",
        "Market System Strengthening",
        "Investment Strategy",
        "Risk Assessment",
      ],
    },
    {
      title: "Agro‑Tourism",
      slug: "agro-tourism",
      description:
        "Innovative integration of hospitality and recreation within farming environments, creating sustainable lifetime experiences for guests while maintaining ecological balance and agricultural productivity.",
      longDescription:
        "We design and develop agro-tourism projects that combine sustainable farming with memorable visitor experiences, creating new revenue streams for agricultural enterprises.",
      detailedContent: {
        overview:
          "Who says hospitality or recreation cannot thrive within a farming system environment? We bring all these together and create a lifetime experience for guests and operators. Nature has a way of balancing itself and we just have to fit into it — not the other way round.",
        keyServices: [
          "Agro-tourism destination development and planning",
          "Farm-to-table experience design and implementation",
          "Sustainable hospitality infrastructure development",
          "Visitor experience optimization and management",
          "Community-based tourism initiatives",
          "Marketing and promotion strategies",
          "Revenue diversification planning",
        ],
        outcomes: [
          "Additional income streams for farming operations",
          "Enhanced awareness of sustainable agriculture",
          "Job creation in rural communities",
          "Preservation of agricultural heritage and practices",
        ],
      },
      image: "/agroTourism.png",
      icon: MapPin,
      color: "from-blue-500 to-blue-600",
      benefits: [
        "Eco-Tourism Development",
        "Farm Experience Design",
        "Hospitality Integration",
        "Sustainable Operations",
      ],
    },
    {
      title: "Commodity Trading & Market Development",
      slug: "commodity-trading",
      description:
        "Sustainable market-driven solutions for commodity trading, value chain optimization, and market development, serving institutional, local, and international investors in Nigeria's agricultural sector.",
      longDescription:
        "Complete commodity trading services with focus on value addition and market system development, ensuring fair prices and reliable market access for producers.",
      detailedContent: {
        overview:
          "We provide sustainable market driven solutions to institutional, local and international investors entering the Nigerian Agricultural Industry. Our comprehensive approach ensures efficient commodity flow from farm to market while maximizing value for all stakeholders.",
        keyServices: [
          "Commodity market analysis and price forecasting",
          "Trading platform development and management",
          "Quality assurance and certification systems",
          "Logistics and supply chain optimization",
          "Export facilitation and international trade support",
          "Farmer aggregation and cooperative development",
          "Digital marketplace solutions",
        ],
        outcomes: [
          "Improved market access for smallholder farmers",
          "Better price transparency and fair trading",
          "Reduced post-harvest losses",
          "Enhanced export competitiveness",
        ],
      },
      image: "/marketDevelopment.png",
      icon: TrendingUp,
      color: "from-orange-500 to-orange-600",
      benefits: [
        "Market Analysis",
        "Trading Solutions",
        "Value Chain Development",
        "Export Facilitation",
      ],
    },
    {
      title: "Training & Capacity Building",
      slug: "training-provision",
      description:
        "Transformative training programs designed to disrupt traditional systems and create value through systemic change, offering professional services in commodity exports, brokerage, and supply chain management.",
      longDescription:
        "Comprehensive training programs that build capacity and drive innovation in agricultural practices, empowering farmers and agribusiness professionals.",
      detailedContent: {
        overview:
          "We deliberately think out of the box to disrupt the system and create value to achieve systemic change in the market system through training and capacity building. We offer professional services in commodity exports, brokerage and supply for Nigerian cash crop, fruits and vegetables.",
        keyServices: [
          "Good Agricultural Practices (GAP) training",
          "Financial literacy and business skills development",
          "Farmer Business School implementation",
          "Technology adoption and digital literacy",
          "Leadership and organizational development",
          "Export procedures and quality standards training",
          "Cooperative formation and management",
        ],
        outcomes: [
          "Improved agricultural productivity and quality",
          "Enhanced business and financial management skills",
          "Increased adoption of modern farming techniques",
          "Stronger farmer organizations and cooperatives",
        ],
      },
      image: "/trainingProvision.png",
      icon: BookOpen,
      color: "from-purple-500 to-purple-600",
      benefits: [
        "Professional Training",
        "Capacity Building",
        "Export Training",
        "Supply Chain Management",
      ],
    },
    {
      title: "Renewable Energy & Environmental Management",
      slug: "renewable-energy-environmental-waste",
      description:
        "Comprehensive renewable energy solutions and environmental management services that promote sustainable agricultural practices while protecting natural resources for future generations.",
      longDescription:
        "Sustainable energy and environmental solutions tailored for agricultural operations, helping farms reduce costs while minimizing environmental impact.",
      detailedContent: {
        overview:
          "We offer renewable energy, environmental and waste management services that integrate seamlessly with agricultural operations. Our solutions help farms become more sustainable while reducing operational costs and environmental footprint.",
        keyServices: [
          "Solar energy system design and installation",
          "Biogas and biomass energy solutions",
          "Water management and irrigation optimization",
          "Waste-to-energy conversion systems",
          "Environmental impact assessment",
          "Carbon footprint reduction strategies",
          "Sustainable farming practice implementation",
        ],
        outcomes: [
          "Reduced energy costs and carbon emissions",
          "Improved resource efficiency and conservation",
          "Enhanced environmental sustainability",
          "Compliance with environmental regulations",
        ],
      },
      image: "/renewableEnergy.png",
      icon: Zap,
      color: "from-emerald-500 to-emerald-600",
      benefits: [
        "Solar Solutions",
        "Waste Management",
        "Environmental Consulting",
        "Sustainability Planning",
      ],
    },
  ];

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

  const slideContent = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3 },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <MainNav />

      {/* Enhanced Hero Section */}
      <section className="relative">
        <Hero title="Our Services" bgImage="/images/hero/blog.jpg" />

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
                <Target className="w-8 h-8 text-green-600" />
                <div className="w-16 h-1 bg-green-600 rounded-full"></div>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-[Poppins] max-w-4xl mx-auto leading-tight">
                Comprehensive
                <span className="text-green-600"> Agribusiness Services</span>
              </h2>

              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                From strategic advisory to hands-on implementation, we provide
                end-to-end solutions that drive sustainable growth, innovation,
                and value creation across Nigeria's agricultural value chain.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Grid with Expandable Content */}
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 font-[Poppins]">
              Our Service Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Click on any service to explore detailed information about our
              comprehensive solutions and their impact.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isExpanded = expandedServices[service.slug];

              return (
                <motion.div
                  key={service.slug}
                  variants={fadeInUp}
                  className="group">
                  <div className="bg-gradient-to-br from-gray-50 to-green-50/30 rounded-2xl overflow-hidden border border-green-100 hover:shadow-xl transition-all duration-300">
                    {/* Service Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                      {/* Service Icon */}
                      <div className="absolute top-6 left-6">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center shadow-lg`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Service Content */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 font-[Poppins] group-hover:text-green-600 transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Benefits List */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span className="text-sm text-gray-700 font-medium">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Expandable Content */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={slideContent}
                            className="overflow-hidden">
                            <div className="border-t border-green-200 pt-6 mt-6 space-y-6">
                              {/* Overview */}
                              <div>
                                <h4 className="text-lg font-bold text-gray-800 mb-3 font-[Poppins] flex items-center gap-2">
                                  <Star className="w-5 h-5 text-green-600" />
                                  Service Overview
                                </h4>
                                <p className="text-gray-600 leading-relaxed">
                                  {service.detailedContent.overview}
                                </p>
                              </div>

                              {/* Key Services */}
                              <div>
                                <h4 className="text-lg font-bold text-gray-800 mb-3 font-[Poppins] flex items-center gap-2">
                                  <Briefcase className="w-5 h-5 text-green-600" />
                                  Key Services
                                </h4>
                                <div className="grid gap-2">
                                  {service.detailedContent.keyServices.map(
                                    (keyService, idx) => (
                                      <div
                                        key={idx}
                                        className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="text-gray-600 text-sm">
                                          {keyService}
                                        </span>
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>

                              {/* Expected Outcomes */}
                              <div>
                                <h4 className="text-lg font-bold text-gray-800 mb-3 font-[Poppins] flex items-center gap-2">
                                  <Award className="w-5 h-5 text-green-600" />
                                  Expected Outcomes
                                </h4>
                                <div className="grid gap-2">
                                  {service.detailedContent.outcomes.map(
                                    (outcome, idx) => (
                                      <div
                                        key={idx}
                                        className="flex items-start gap-3">
                                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-600 text-sm">
                                          {outcome}
                                        </span>
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>

                              {/* CTA Buttons */}
                              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                                <button className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors duration-300">
                                  Get Quote
                                </button>
                                <button className="flex-1 px-6 py-3 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold rounded-xl transition-all duration-300">
                                  Book Consultation
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Toggle Button */}
                      <button
                        onClick={() => toggleService(service.slug)}
                        className="w-full flex items-center justify-between mt-4 p-3 bg-green-50 hover:bg-green-100 rounded-xl transition-colors duration-300 group">
                        <span className="text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                          {isExpanded ? "Show Less" : "Learn More"}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-green-600 group-hover:text-green-700 transition-all" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-green-600 group-hover:text-green-700 transition-all" />
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>;

      {
        /* Why Choose Our Services */
      }
      <motion.section
        variants={fadeInUp}
        className="py-20 bg-gradient-to-br from-gray-50 to-green-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 font-[Poppins]">
              Why Choose JMSF Services?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Proven Expertise",
                description:
                  "15+ years of successful project implementation across Nigeria and Africa with measurable results.",
                icon: Award,
              },
              {
                title: "End-to-End Solutions",
                description:
                  "Comprehensive services from strategic planning to implementation and ongoing support.",
                icon: Target,
              },
              {
                title: "Sustainable Impact",
                description:
                  "Focus on creating lasting value that benefits communities, environment, and economic development.",
                icon: CheckCircle,
              },
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="text-center p-8 bg-white rounded-2xl border border-green-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 font-[Poppins]">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>;

      {/* Call to Action */}
      <motion.section variants={fadeInUp} className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-[Poppins]">
            Ready to Transform Your
            <span className="text-green-200"> Agricultural Vision?</span>
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Partner with JMSF Agribusiness to unlock the full potential of your
            agricultural investments and create sustainable value for all
            stakeholders.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              href="/book-consultation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-green-600 hover:bg-green-50 font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
              Book Consultation
            </motion.a>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold text-lg rounded-xl transition-all duration-300">
              Get in Touch
            </motion.a>
          </div>
        </div>
      </motion.section>

      <Footer />
    </>
  );
}

export default Services;
