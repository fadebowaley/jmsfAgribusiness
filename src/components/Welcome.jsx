import React from 'react';
import {Link} from 'react-router-dom';
import { FaDownload, FaBookOpen, FaPaperPlane } from 'react-icons/fa';
import { CheckCircle, Award, Users, TrendingUp } from "lucide-react";

const Welcome = () => {

  const achievements = [
    {
      icon: Award,
      text: "15+ Years Experience",
      subtext: "International Development",
    },
    {
      icon: Users,
      text: "500+ Farmers Supported",
      subtext: "Across Nigeria & Africa",
    },
    {
      icon: TrendingUp,
      text: "Agricultural Growth",
      subtext: "Sustainable Solutions",
    },
    {
      icon: CheckCircle,
      text: "Proven Results",
      subtext: "Stakeholder Value Creation",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 font-[Roboto] bg-gradient-to-br from-gray-50 to-green-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          {/* Hero Image & CTA */}
          <div className="flex flex-col w-full lg:order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-8 group">
              <img
                src="/about.jpg"
                alt="JMSF Agribusiness - Agricultural Excellence"
                className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">
                  Growing Nigeria's Future
                </h3>
                <p className="text-sm opacity-90">
                  Sustainable Agricultural Solutions
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/book-consultation"
                className="flex justify-center items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg group">
                <FaBookOpen className="group-hover:rotate-12 transition-transform" />
                Book Consultation
              </Link>

              <button className="flex items-center justify-center gap-3 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                <FaDownload />
                Download Brochure
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 lg:order-2">
            {/* Header Section */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-green-600 rounded-full"></div>
                <span className="text-green-600 font-semibold text-lg uppercase tracking-wider">
                  Welcome to Excellence
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 font-[Poppins] mb-6 leading-tight">
                JMSF <span className="text-green-600">Agribusiness</span>
              </h1>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 font-[Poppins] mb-8 leading-relaxed">
                Leading Agricultural Advisory Services & Consulting Excellence
              </h2>

              <div className="w-24 h-1.5 bg-gradient-to-r from-green-600 to-green-400 rounded-full mb-8"></div>
            </div>

            {/* Achievements Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-green-100/50">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg mb-1">
                        {achievement.text}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {achievement.subtext}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Description Section */}
            <div className="prose prose-lg max-w-none mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-green-100/50">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  We are a premier{" "}
                  <strong className="text-green-600">
                    agricultural advisory services
                  </strong>{" "}
                  consulting firm with over 15 years of proven experience in the
                  International Development sector across Nigeria and Africa.
                  Our expert team delivers exceptional results and creates
                  sustainable value for stakeholders in the agribusiness
                  ecosystem.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Market Challenge
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Nigeria's economy has long been driven by Oil and Gas with
                      minimal improvements in non-oil sectors, particularly
                      agriculture. Our mission is to transform this landscape
                      through strategic interventions.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      Our Solution
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We believe every agribusiness investment should create
                      value, improve livelihoods, develop local economies, and
                      guarantee sustainable returns through innovative market
                      system solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;