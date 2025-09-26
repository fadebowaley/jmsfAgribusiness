import MainNav from "../components/MainNav";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Building,
  CheckCircle,
  Users,
  Award,
  Target,
  FileText,
  Clock,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  MapPin,
  Briefcase,
} from "lucide-react";
import Hero from '../components/Hero';
import Footer from '../components/Footer';

// Enhanced project data with categories
const projects = [
  {
    id: 1,
    name: "Survey of Medium to Large-Scale Agribusinesses in Nigeria",
    dates: "October 2018 - April 2019",
    client: "AFOS Foundation",
    category: "Market Research & Analysis",
    status: "Completed",
    brief: "An in-depth study on agribusinesses in Nigeria to understand their activities and engage with them to develop agriculture value chains through a combination of capacity building interventions and facilitating linkages between value chain actors and financial service providers.",
    fullDescription: "This comprehensive study involved interviewing 84 respondents across agribusiness, development agencies, government and farmer groups in 7 locations. The project utilized extensive quantitative and qualitative datasets to provide insights into the agricultural value chain ecosystem in Nigeria.",
    outcomes: [
      "Comprehensive database of medium to large-scale agribusinesses",
      "Value chain mapping and analysis across 7 key locations",
      "Strategic recommendations for capacity building interventions",
      "Framework for linking value chain actors with financial services"
    ],
    contact: "Ladi Akoni, Program Manager",
    email: "akoni@afos.ng",
    phone: "09033122969",
    impact: "High",
    scope: "National"
  },
  {
    id: 2,
    name: "Operationalizing the Inter-Ministerial Agriculture Nutrition Working Group (IANWG)",
    dates: "November 2018 - December 2018",
    client: "GAIN PLAN",
    category: "Policy Analysis & Development",
    status: "Completed",
    brief: "An in-depth study on the inter-Ministerial Agriculture Nutrition Working Group (IANWG) of the Federal Ministry of Agriculture and Rural Development to understand why the working group failed to deliver on its mandate to aid the improvement of nutrition outcomes in Nigeria.",
    fullDescription: "The study was carried out by interviewing 18 respondents aided by pretested questionnaires that covered all aspects of the IANWG proposed operations. A comprehensive desk review of IANWG documents was conducted to understand where fault lines occurred in its past operations. The study utilized primarily qualitative datasets.",
    outcomes: [
      "Comprehensive analysis of IANWG operational challenges",
      "Identification of structural and operational fault lines",
      "Strategic recommendations for improving nutrition outcomes",
      "Framework for effective inter-ministerial coordination"
    ],
    contact: "Adeyinka Onabolu PhD, Senior Advisor on Food Security & Nutrition to the Honourable Minister of Agriculture",
    email: "adeyinkaonabolu@yahoo.com",
    phone: "+2348034002756",
    impact: "High",
    scope: "Federal"
  },
  {
    id: 3,
    name: "Landscape Analysis of Current Tomato Processing Methods in Nigeria",
    dates: "March 2018 - April 2018",
    client: "GAIN PLAN",
    category: "Technology Assessment",
    status: "Completed",
    brief: "An in-depth study to conduct a review of tomato processing technologies in Nigeria and identify processing, preservation and packaging technologies suitable for commercialization by MSMEs.",
    fullDescription: "The study reviewed tomato processing technologies developed by National Agricultural Research Institutes (NARIs) and ranked their suitability and scalability for commercialization by MSMEs. It also assessed the market size for locally processed tomato products across various distribution channels including supermarkets, institutions, and open markets.",
    outcomes: [
      "Comprehensive inventory of available tomato processing technologies",
      "Ranking system for technology suitability and scalability",
      "Market size analysis for locally processed tomato products",
      "Technology adoption recommendations for MSMEs"
    ],
    contact: "Dr. Augustine Okoruwa, Senior Project Manager",
    email: "aokoruwa@gainhealth.org",
    phone: "+2348035052634",
    impact: "Medium",
    scope: "National"
  },
  {
    id: 4,
    name: "Source of Growth in Agribusiness SMEs: Nigeria-Vietnam Comparative Analysis",
    dates: "December 2019 - June 2020",
    client: "The World Bank Group",
    category: "Comparative Analysis",
    status: "Completed",
    brief: "A comparative value chain analysis of cassava, rice, poultry and cashew value chains between Vietnam and Nigeria to ascertain levels of competitiveness and share lessons for SME development.",
    fullDescription: "This comprehensive study reviewed four key value chains using comparative analysis methodology to assess competitiveness levels between Vietnam and Nigeria. The research aimed to identify best practices and lessons that could be shared between both nations for internal support and development of small and medium-sized agribusinesses in Nigeria.",
    outcomes: [
      "Comprehensive comparative analysis of 4 key value chains",
      "Competitiveness assessment framework",
      "Best practice identification and documentation",
      "Strategic recommendations for SME development"
    ],
    contact: "Dr. Elliot W. Mghenyi, Senior Agricultural Economist",
    email: "emghenyi@worldbank.org",
    phone: "+2348100210274 and +12022470096",
    impact: "High",
    scope: "International"
  },
  {
    id: 5,
    name: "Livelihood Enhancement Training for Nigerian Smallholder Farmers",
    dates: "November 2021 - October 2024",
    client: "AFOS Foundation",
    category: "Capacity Building",
    status: "Ongoing",
    brief: "Capacity building program targeting 30,000 smallholder farmers in Sesame, Maize, Soybean and Poultry to improve yield and profitability and enhance their livelihoods and finances.",
    fullDescription: "This comprehensive 3-year program focuses on training Nigerian smallholder farmers in Good Agricultural Practices (GAP), Financial literacy, Farmer Business School (FBS) methodologies, Group Formation, and facilitating Access to Markets and Finance. The program aims to significantly improve farmer incomes and agricultural productivity.",
    outcomes: [
      "30,000 smallholder farmers trained across multiple value chains",
      "JMSF trained 5,000 farmers covering poultry, sesame, soybean and maize",
      "Improved agricultural practices and productivity",
      "Enhanced financial literacy and business skills",
      "Strengthened farmer organizations and market access"
    ],
    contact: "Moses Olatunji, Project Coordinator AFOS Livelihood Enhancement Training Program",
    email: "olatunji@afos.ng",
    phone: "+2348139570612",
    impact: "High",
    scope: "National"
  },
  {
    id: 6,
    name: "Tomato Industry Position Paper: Market-Oriented Policy Framework",
    dates: "November 2021",
    client: "The GB Foods Nigeria",
    category: "Policy Development",
    status: "Completed",
    brief: "Development of strategic policy recommendations to make the Nigerian tomato sector work better for industry players and stimulate economic growth, value addition, and job creation.",
    fullDescription: "An in-depth review of the tomato sector vis-à-vis the policy direction of the Federal Government of Nigeria towards controlling importation of tomato products due to shortage from internal production and processing. The paper provided strategic approaches for making the tomato sector more effective for all actors, especially smallholder farmers.",
    outcomes: [
      "Comprehensive tomato sector policy analysis",
      "Strategic framework for sector improvement",
      "Import substitution strategy recommendations",
      "Smallholder farmer empowerment guidelines"
    ],
    contact: "Dr Ted Ngu",
    email: "Tngu@thegbfoods.com",
    phone: "+2348058021258",
    impact: "Medium",
    scope: "National"
  },
  {
    id: 7,
    name: "CAP-F Value Chain Cluster Mapping and Investment Database",
    dates: "November 2021",
    client: "AU-NEPAD/GROW AFRICA",
    category: "Investment Mapping",
    status: "Completed", 
    brief: "Comprehensive review of Nigeria's Agricultural Investment Plan (NAIP) and Agricultural Promotion Plan (APP) to identify investment opportunities and multi-stakeholder platforms within clusters.",
    fullDescription: "This project involved an in-depth review of Nigeria's key agricultural policy frameworks to identify opportunities for investment and development of multi-stakeholder platforms (MSPs) within agricultural clusters. Value chains of focus included rice, tomato, soybean, sorghum, maize, oil palm, sesame and wheat.",
    outcomes: [
      "Comprehensive investment opportunity database",
      "Multi-stakeholder platform mapping",
      "Cluster development recommendations",
      "Strategic framework for agricultural investment"
    ],
    contact: "Obinna Igwebuike, Programme Coordinator Grow Africa/AU-NEPAD project",
    email: "o.igwebuike@sawobonang.com",
    phone: "+2348106397244",
    impact: "High",
    scope: "Continental"
  },
  {
    id: 8,
    name: "Proposal and Grant Writing Training for Milk Value Chain Foundation",
    dates: "October 2021",
    client: "Milk Value Chain Foundation",
    category: "Capacity Building",
    status: "Completed",
    brief: "Capacity building program for senior technical staff of MVCF and its partners in writing technical proposals and managing grant responses for better project management.",
    fullDescription: "This specialized training program focused on building the capacity of senior technical staff of the Milk Value Chain Foundation (MVCF) and its partners CORETS in technical proposal writing, grant application processes, and service provider management as a strategy for improving project implementation and management.",
    outcomes: [
      "Enhanced proposal writing capabilities",
      "Improved grant application success rates",
      "Strengthened project management systems",
      "Better service provider coordination"
    ],
    contact: "Dr. Ishak Bello, Chief Executive Officer (CEO)",
    email: "isbel@arlafoods.com", 
    phone: "+2348034501972",
    impact: "Medium",
    scope: "Sectoral"
  },
  {
    id: 9,
    name: "Food Loss Initiative Project in Nigeria",
    dates: "August - October 2020",
    client: "Danish Embassy Business Desk",
    category: "International Cooperation",
    status: "Completed",
    brief: "Study to review possible areas of collaboration, support, and intervention between Nigeria and Denmark based on cooperation agreements for both countries.",
    fullDescription: "This strategic study assessed potential areas for bilateral cooperation between Nigeria and Denmark in the agricultural sector, focusing on food loss reduction initiatives and identifying opportunities for Danish expertise and technology transfer to support Nigeria's agricultural development goals.",
    outcomes: [
      "Bilateral cooperation framework development",
      "Food loss reduction strategy recommendations",
      "Technology transfer opportunity identification",
      "Partnership development guidelines"
    ],
    contact: "Mr. Poul Erikstrup, Head, Agriculture Desk, Danish Embassy",
    email: "pierik@um.dk",
    phone: "+2348066132063",
    impact: "Medium",
    scope: "International"
  },
  {
    id: 10,
    name: "Nigerian Agriculture Landscape Study for Danish Government",
    dates: "January - March 2021",
    client: "Danish Embassy Business Desk",
    category: "Strategic Analysis",
    status: "Completed",
    brief: "Background study of Nigerian agricultural landscape to identify potential areas of collaboration between Denmark and Nigeria based on existing cooperation agreements.",
    fullDescription: "Comprehensive study to review and analyze the Nigerian agricultural landscape, identifying strategic opportunities for collaboration, support, and intervention between Nigeria and Denmark within the framework of existing bilateral cooperation agreements.",
    outcomes: [
      "Comprehensive agricultural landscape analysis",
      "Strategic collaboration opportunities identified",
      "Investment priority recommendations",
      "Bilateral partnership development framework"
    ],
    contact: "Mr. Poul Erikstrup, Head, Agriculture Desk, Danish Embassy",
    email: "pierik@um.dk",
    phone: "+2348066132063",
    impact: "Medium",
    scope: "International"
  },
  {
    id: 11,
    name: "Tomato Triangle States Policy Analysis and Coordination",
    dates: "August 2019 - February 2020",
    client: "TechnoServe Solutions to Poverty",
    category: "Policy Analysis",
    status: "Completed",
    brief: "Analysis of policies and development of recommendations to ensure effective coordination and organization of tomato triangle states comprising Plateau, Kaduna, Kano, Jigawa and Katsina states.",
    fullDescription: "Comprehensive review of tomato triangle states and relevant policies to improve the sector within TechnoServe project states. The study focused on developing a synthesized framework for effective coordination between the five key tomato-producing states.",
    outcomes: [
      "Multi-state coordination framework",
      "Policy harmonization recommendations",
      "Sector improvement strategies",
      "Inter-state collaboration mechanisms"
    ],
    contact: "Barrister Femi Oluruntobi",
    email: "aayuba@tns.org, oloruntobi@tns.org",
    phone: "+234 09037810176; 08025914000; 09062873765",
    impact: "High",
    scope: "Regional"
  },
  {
    id: 12,
    name: "5000 Tomato Farmers Outgrowers Project Management",
    dates: "October 2019 - August 2020", 
    client: "Tomani Agro-Industries (GB Foods) Nigeria",
    category: "Outgrower Management",
    status: "Completed",
    brief: "Management of outgrower program for tomato farmers in Kebbi State to supply new tomato processing factory with 250mt/day paste production capacity.",
    fullDescription: "Comprehensive outgrower program management for 5000 tomato farmers to supply Tomani Farms' new processing facility. The program focused on improving farmer livelihoods through increased yields, revenues, and quality tomato production to meet factory requirements in Kebbi state's agricultural development structure.",
    outcomes: [
      "5000 farmers integrated into formal value chain",
      "Improved tomato quality and yields",
      "Reliable supply chain for processing factory",
      "Enhanced farmer incomes and livelihoods"
    ],
    contact: "Dr. Ted Ng",
    email: "tng@thegbfoods.com",
    phone: "+2348058021258",
    impact: "High",
    scope: "Regional"
  },
  {
    id: 13,
    name: "Pilot Outgrower Scheme for Tomani Farms",
    dates: "January - August 2019",
    client: "Tomani Farms and Agro-Industries Nigeria (GB Foods)",
    category: "Pilot Program", 
    status: "Completed",
    brief: "Management of pilot outgrower scheme for farmers in Katsina and Kaduna State to feed the new 30mt tomato paste processing factory in Kaduna.",
    fullDescription: "Strategic pilot outgrower program designed to test and refine farmer engagement models for Tomani Farms' 30mt capacity tomato processing facility. The program served as a proof of concept for larger-scale outgrower initiatives.",
    outcomes: [
      "Successful pilot model development",
      "Farmer engagement framework established",
      "Supply chain optimization achieved",
      "Scalable outgrower model created"
    ],
    contact: "Dr. Ted Ng",
    email: "tng@thegbfoods.com",
    phone: "+2348058021258",
    impact: "Medium",
    scope: "Regional"
  },
  {
    id: 14,
    name: "YieldWise Project Curriculum Review and Training",
    dates: "June - September 2018",
    client: "YieldWise Project, Pyxera Global (Rockefeller Foundation)",
    category: "Curriculum Development",
    status: "Completed",
    brief: "Review of curriculum for improved agronomic practices for tomato production and training on GAP/GHP/Use of plastic crates and agro-processing hubs for Katsina, Kano and Jigawa states.",
    fullDescription: "Comprehensive review and enhancement of training curriculum for extension agents and farmers in three northern states. The project included development of Good Agricultural Practices (GAP), Good Handling Practices (GHP), and agro-processing hub management training materials.",
    outcomes: [
      "Enhanced curriculum for tomato production",
      "Improved extension agent capabilities", 
      "Better post-harvest handling practices",
      "Strengthened agro-processing hub operations"
    ],
    contact: "Mr. Lekan Tobe, Programme Manager",
    email: "ltobe@pyxeraglobal.org",
    phone: "+2348034521177",
    impact: "Medium",
    scope: "Regional"
  }
];

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
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideContent = {
  hidden: { 
    opacity: 0, 
    height: 0,
    transition: { duration: 0.3 }
  },
  visible: { 
    opacity: 1, 
    height: 'auto',
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

function JobsDone() {
  const [expandedProjects, setExpandedProjects] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const projectsPerPage = 6;

  const toggleProject = (id) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Get unique categories
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  // Filter projects by category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // Pagination
  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Get impact color
  const getImpactColor = (impact) => {
    switch (impact) {
      case "High":
        return "text-green-600 bg-green-100";
      case "Medium":
        return "text-orange-600 bg-orange-100";
      case "Low":
        return "text-blue-600 bg-blue-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "text-green-600 bg-green-100";
      case "Ongoing":
        return "text-blue-600 bg-blue-100";
      case "Planned":
        return "text-orange-600 bg-orange-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <>
      <MainNav />

      {/* Enhanced Hero Section */}
      <section className="relative">
        <Hero title="Our Track Record" bgImage="/images/hero/blog.jpg" />

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
                <Award className="w-8 h-8 text-green-600" />
                <div className="w-16 h-1 bg-green-600 rounded-full"></div>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-[Poppins] max-w-4xl mx-auto leading-tight">
                Proven Success in
                <span className="text-green-600">
                  {" "}
                  Agricultural Development
                </span>
              </h2>

              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                Over 15 years of successful project implementation across
                Nigeria and Africa. Explore our comprehensive portfolio of
                completed projects that demonstrate our commitment to
                sustainable agricultural development and stakeholder success.
              </p>

              {/* Project Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {[
                  {
                    icon: FileText,
                    number: "14+",
                    label: "Completed Projects",
                  },
                  {
                    icon: Building,
                    number: "20+",
                    label: "Partner Organizations",
                  },
                  { icon: Users, number: "15K+", label: "Farmers Impacted" },
                  {
                    icon: Target,
                    number: "100%",
                    label: "Project Success Rate",
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

      {/* Project Categories Filter */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-green-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700"
                }`}>
                {category}
              </button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="py-20 bg-gradient-to-br from-gray-50 to-green-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => {
              const isExpanded = expandedProjects[project.id];

              return (
                <motion.div
                  key={project.id}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                  {/* Project Header */}
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-800 mb-2 font-[Poppins] leading-tight">
                          {project.name}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                          <Calendar className="w-4 h-4" />
                          {project.dates}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                          <Building className="w-4 h-4" />
                          {project.client}
                        </div>
                      </div>
                    </div>

                    {/* Status and Impact Badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                          project.status
                        )}`}>
                        {project.status}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${getImpactColor(
                          project.impact
                        )}`}>
                        {project.impact} Impact
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold text-purple-600 bg-purple-100">
                        {project.scope}
                      </span>
                    </div>

                    {/* Category */}
                    <div className="flex items-center gap-2 text-sm text-green-600 font-medium mb-4">
                      <Briefcase className="w-4 h-4" />
                      {project.category}
                    </div>

                    {/* Brief Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.brief}
                    </p>
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
                        <div className="p-6 space-y-6 bg-gray-50">
                          {/* Full Description */}
                          <div>
                            <h4 className="text-md font-bold text-gray-800 mb-3 font-[Poppins] flex items-center gap-2">
                              <FileText className="w-4 h-4 text-green-600" />
                              Project Details
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {project.fullDescription}
                            </p>
                          </div>

                          {/* Key Outcomes */}
                          <div>
                            <h4 className="text-md font-bold text-gray-800 mb-3 font-[Poppins] flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              Key Outcomes
                            </h4>
                            <div className="space-y-2">
                              {project.outcomes.map((outcome, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-gray-600 text-sm">
                                    {outcome}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Contact Information */}
                          <div className="bg-white rounded-xl p-4 border border-gray-200">
                            <h4 className="text-md font-bold text-gray-800 mb-3 font-[Poppins]">
                              Client Contact
                            </h4>
                            <div className="space-y-2">
                              <div className="flex items-start gap-2">
                                <Users className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700 text-sm">
                                  {project.contact}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-green-600 flex-shrink-0" />
                                <a
                                  href={`mailto:${project.email}`}
                                  className="text-green-600 text-sm hover:underline">
                                  {project.email}
                                </a>
                              </div>
                              <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-green-600 flex-shrink-0" />
                                <a
                                  href={`tel:${project.phone}`}
                                  className="text-green-600 text-sm hover:underline">
                                  {project.phone}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Toggle Button */}
                  <div className="p-6 pt-0">
                    <button
                      onClick={() => toggleProject(project.id)}
                      className="w-full flex items-center justify-between p-3 bg-green-50 hover:bg-green-100 rounded-xl transition-colors duration-300 group">
                      <span className="text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                        {isExpanded ? "Show Less" : "View Details"}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-green-600 group-hover:text-green-700 transition-all" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-green-600 group-hover:text-green-700 transition-all" />
                      )}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center gap-2 mt-12">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                    currentPage === i + 1
                      ? "bg-green-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-green-100 hover:text-green-700 border border-gray-200"
                  }`}
                  onClick={() => {
                    setCurrentPage(i + 1);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}>
                  {i + 1}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-[Poppins]">
            Ready to Add Your Project to Our
            <span className="text-green-200"> Success Stories?</span>
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join our growing list of successful partnerships. Let's work
            together to create sustainable agricultural solutions that make a
            lasting impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-green-600 hover:bg-green-50 font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Your Project
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

export default JobsDone;
