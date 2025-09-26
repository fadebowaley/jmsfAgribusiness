import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { Users, ChevronRight } from "lucide-react";
import imagesData from '../data/images.json';

const Team = () => {
  // Get team members from JSON data
  const teamMembers = imagesData.teamMembers.leadership;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50/30 to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-1 bg-green-600 rounded-full"></div>
            <Users className="w-8 h-8 text-green-600" />
            <div className="w-12 h-1 bg-green-600 rounded-full"></div>
          </div>

          <p className="text-lg font-semibold text-green-600 mb-4 uppercase tracking-wider">
            Our Dedicated Team
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 font-[Poppins]">
            Meet Our <span className="text-green-600">Leadership</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experienced professionals driving agricultural transformation across
            Nigeria and Africa with proven expertise and innovative solutions.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-white rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-green-100/50">
              <div className="flex flex-col items-center text-center">
                {/* Profile Image */}
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-48 h-48 object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Member Info */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 font-[Poppins] group-hover:text-green-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">
                    {member.position}
                  </p>
                </div>

                {/* Social Links */}
                {member.linkedin && (
                  <div className="flex gap-4">
                    <a
                      href={member.linkedin}
                      className="group/social w-12 h-12 bg-gray-100 hover:bg-green-600 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                      aria-label={`${member.name} LinkedIn`}
                      target="_blank"
                      rel="noopener noreferrer">
                      <FaLinkedin className="w-5 h-5 text-gray-600 group-hover/social:text-white transition-colors" />
                    </a>
                    <a
                      href={member.facebook}
                      className="group/social w-12 h-12 bg-gray-100 hover:bg-green-600 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                      aria-label={`${member.name} Facebook`}
                      target="_blank"
                      rel="noopener noreferrer">
                      <FaFacebookF className="w-5 h-5 text-gray-600 group-hover/social:text-white transition-colors" />
                    </a>
                    <a
                      href={member.twitter}
                      className="group/social w-12 h-12 bg-gray-100 hover:bg-green-600 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                      aria-label={`${member.name} Twitter`}
                      target="_blank"
                      rel="noopener noreferrer">
                      <FaTwitter className="w-5 h-5 text-gray-600 group-hover/social:text-white transition-colors" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            to="/leadership"
            className="inline-flex items-center gap-3 px-10 py-4 bg-white border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl group">
            <Users className="w-6 h-6" />
            VIEW FULL LEADERSHIP TEAM
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Team;
