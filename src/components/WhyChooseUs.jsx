import { motion } from "framer-motion";
import {
  TrendingUp,
  DollarSign,
  Shield,
  Scale,
  Leaf,
  Ban,
  Lightbulb,
  Users,
} from "lucide-react";
import gardener from "../assets/gardener.png";

const coreValues = [
  {
    title: "Value Creation",
    description:
      "We deliberately analyse the value chain of the investment to identify gaps and provide smart solutions that strengthen the market system for both investors and beneficiaries.",
    icon: TrendingUp,
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Economic Growth",
    description:
      "We explore every viable avenue within investments to fuel local economies, boosting services and opportunities within our business locations.",
    icon: DollarSign,
    color: "from-green-500 to-green-600",
  },
  {
    title: "Integrity",
    description:
      "We fulfill every obligation with precision and protect all sensitive client information with unwavering discipline.",
    icon: Shield,
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Fair Trade",
    description:
      "Objectivity, consistency, and fairness are non-negotiable in all client and stakeholder engagements throughout transactions.",
    icon: Scale,
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "Sustainability",
    description:
      "Every solution we offer is built to last — protecting current needs while safeguarding future generations.",
    icon: Leaf,
    color: "from-emerald-500 to-emerald-600",
  },
  {
    title: "Environmental Protection",
    description:
      "If a project threatens the environment and we can't offer a safer alternative, we prioritize ecological preservation.",
    icon: Ban,
    color: "from-red-500 to-red-600",
  },
  {
    title: "Innovation",
    description:
      "We deliver creative, strategic, and tech-savvy solutions that make a measurable impact across agricultural value chains.",
    icon: Lightbulb,
    color: "from-yellow-500 to-yellow-600",
  },
];

function WhyChooseUs() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Enhanced Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-green-600" />
                <span className="text-green-600 font-semibold text-lg uppercase tracking-wider">
                  Why Choose Us
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6 font-[Poppins] leading-tight">
                <span className="border-b-4 border-green-600 pb-2 inline-block">
                  People
                </span>{" "}
                Choose Us
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed mb-12">
                We've built a reputation for excellence, reliability, and
                customer satisfaction. Our team delivers decades of experience,
                tailored strategies, and award-winning service into every
                project.
              </p>
            </div>

            {/* Enhanced Values Grid */}
            <div className="space-y-6">
              {coreValues.map((val, idx) => {
                const IconComponent = val.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="group flex gap-6 p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-lg hover:border-green-200 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${val.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300 font-[Poppins]">
                        {val.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-r from-green-50 to-green-100/50 rounded-2xl p-8 border border-green-200/50">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 font-[Poppins] text-center">
                Our Track Record
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "15+", label: "Years Experience" },
                  { number: "500+", label: "Farmers Supported" },
                  { number: "₦500M+", label: "Value Created" },
                  { number: "100%", label: "Client Satisfaction" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1 font-[Poppins]">
                      {stat.number}
                    </div>
                    <div className="text-sm font-medium text-gray-700">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src={gardener}
                  alt="Agricultural Excellence - JMSF Team"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/30 to-transparent"></div>
              </div>

              {/* Floating Achievement Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl border border-green-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800 font-[Poppins]">
                      15+
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Years of Excellence
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
