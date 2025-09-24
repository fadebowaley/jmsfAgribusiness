import { motion } from "framer-motion";
import { Award, Target, Eye, CheckCircle } from "lucide-react";
import back_image from "../assets/back_image.jpg";
import front_image from "../assets/about-img-1.jpg";

function CompanyHistory() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative">
            <div className="relative">
              {/* Background Image */}
              <div className="w-full max-w-lg mx-auto">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transform rotate-3 hover:rotate-1 transition-transform duration-500">
                  <img
                    src={back_image}
                    alt="JMSF Agribusiness Heritage"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-transparent"></div>
                </div>
              </div>

              {/* Foreground Image */}
              <div className="absolute -bottom-8 -right-8 w-64 h-64">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500 border-8 border-white">
                  <img
                    src={front_image}
                    alt="Agricultural Excellence"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-green-600" />
                <span className="text-green-600 font-semibold text-lg uppercase tracking-wider">
                  Our Journey
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6 font-[Poppins] leading-tight">
                <span className="border-b-4 border-green-600 pb-2 inline-block">
                  Our
                </span>{" "}
                Company History
              </h2>

              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-8 font-[Poppins]">
                From Local Roots to National Agricultural Impact
              </h3>
            </div>

            {/* Company Description */}
            <div className="prose prose-lg">
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                JMSF Agribusiness is a premier agricultural advisory services
                consulting firm with a distinguished track record spanning over
                15 years in the International Development sector. Our expert
                team has consistently delivered exceptional results across
                Nigeria and Africa, creating substantial value for stakeholders
                throughout the agribusiness ecosystem.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                Recognizing that Nigeria's economy has historically been driven
                by Oil and Gas with limited advancement in non-oil
                sectors—particularly agriculture—we are committed to
                transforming this landscape through strategic, innovative
                interventions that drive sustainable growth.
              </p>
            </div>

            {/* Vision & Mission Cards */}
            <div className="space-y-6">
              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-r from-green-50 to-green-100/50 p-8 rounded-2xl border border-green-200/50 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Eye className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 font-[Poppins] flex items-center gap-2">
                      Our <span className="text-green-600">Vision</span>
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      To promote accelerated development of opportunities in the
                      agribusiness services markets, creating value, jobs and
                      incomes, improving quality of finished produce and
                      reducing wastage, while ensuring environmental protection
                      and sustainability.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-gradient-to-r from-gray-50 to-green-50/50 p-8 rounded-2xl border border-gray-200/50 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Target className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 font-[Poppins] flex items-center gap-2">
                      Our <span className="text-green-600">Mission</span>
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      To provide sustainable, market-driven solutions to
                      institutional, local and international investors entering
                      the Nigerian Agribusiness Sector, fostering growth,
                      innovation, and long-term value creation across the
                      agricultural value chain.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Key Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                Key Achievements
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "15+ Years International Development Experience",
                  "500+ Farmers Successfully Supported",
                  "10,000+ Jobs Created Through Programs",
                  "Sustainable Market System Development",
                ].map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CompanyHistory;
