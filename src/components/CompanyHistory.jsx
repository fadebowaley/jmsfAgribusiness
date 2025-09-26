import { motion, AnimatePresence } from "framer-motion";
import { Award, Target, Eye, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import imagesData from "../data/images.json";

function CompanyHistory() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Get slider images from JSON data
  const sliderImages = imagesData.aboutPage.companyHistory.sliderImages.sort((a, b) => a.order - b.order);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  };

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Image Slider Section (Left Column) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative">
            <div className="relative w-full mx-auto rounded-2xl shadow-2xl overflow-hidden h-[768px]">
              <AnimatePresence initial={false}>
                <motion.img
                  key={currentSlide}
                  src={sliderImages[currentSlide].src}
                  alt={sliderImages[currentSlide].alt}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Slider Text Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-8">
                <motion.h3
                  key={sliderImages[currentSlide].title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-3xl font-bold text-white mb-2 font-[Poppins]">
                  {sliderImages[currentSlide].title}
                </motion.h3>
                <motion.p
                  key={sliderImages[currentSlide].description}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-lg text-green-200">
                  {sliderImages[currentSlide].description}
                </motion.p>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition-all duration-300 z-10">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition-all duration-300 z-10">
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {sliderImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === idx ? "bg-green-500 scale-125" : "bg-white/50 hover:bg-white/80"
                    }`}
                  ></button>
                ))}
              </div>
            </div>

            {/* Key Achievements (Moved here, directly under the slider) */}
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

          {/* Text Section (Right Column) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CompanyHistory;
