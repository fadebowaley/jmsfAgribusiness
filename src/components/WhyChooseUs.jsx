import { motion } from "framer-motion";
import {
  TrendingUp,
  DollarSign,
  Shield,
  Scale,
  Leaf,
  Lightbulb,
  Users,
  Award,
} from "lucide-react";
import imagesData from "../data/images.json";

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
      "We fulfill our obligations with precision and protect sensitive client information, ensuring trust and reliability in every engagement.",
    icon: Shield,
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Fair Trade",
    description:
      "Objectivity, consistency, and fairness are non-negotiable in all our client and stakeholder engagements, fostering equitable partnerships.",
    icon: Scale,
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "Sustainability",
    description:
      "Our solutions are built to last, protecting current needs while safeguarding future generations through environmentally conscious practices.",
    icon: Leaf,
    color: "from-green-500 to-green-600",
  },
];

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

function WhyChooseUs() {
  // Get main image from JSON data
  const mainImage = imagesData.aboutPage.whyChooseUs.mainImage;

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-green-50/30">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-1 bg-green-600 rounded-full"></div>
            <Lightbulb className="w-8 h-8 text-green-600" />
            <div className="w-16 h-1 bg-green-600 rounded-full"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-[Poppins] max-w-4xl mx-auto leading-tight">
            Why Choose
            <span className="text-green-600"> JMSF Agribusiness?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our commitment to excellence, integrity, and sustainable impact
            sets us apart. Discover the core values that drive our success
            and benefit our partners.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Core Values */}
          <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <div
                    className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 font-[Poppins]">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right Column: Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center items-center">
            <div className="relative w-full max-w-md">
              <img
                src={mainImage.src}
                alt={mainImage.alt}
                className="w-full h-[768px] object-cover rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-8 -left-8 bg-green-600 p-6 rounded-xl shadow-xl transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-white" />
                  <div>
                    <h4 className="text-2xl font-bold text-white">15+ Years</h4>
                    <p className="text-green-100 text-sm">of Excellence</p>
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
