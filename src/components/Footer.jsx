import React from "react";
import {FaFacebookF, FaGooglePlusG, FaPinterestP, FaInstagram} from "react-icons/fa";
import { FaX } from "react-icons/fa6"; // Import any specific icons if needed
import { GrSend } from "react-icons/gr";
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#161616] py-20 px-10 font-[Roboto] text-[15px] text-[#C4C4C4] flex justify-center">
      <div className="container flex flex-col gap-10 sm:flex-col md:flex-row md:justify-between px-10 sm:px-10">
        {/* About Us */}
        <div className="w-full md:w-[45%] lg:w-[22%]">
          <h3 className="text-xl font-bold mb-4 font-[Poppins] text-[24px] text-white">About Us</h3>
          <div className="w-1/3 h-[3px] bg-green-600 rounded-md mb-4"/>
          <p className=" text-sm leading-[28px] mb-7">
            We are an agricultural advisory services provision consulting firm. Our team of experts have in the last 15 years worked in the International Development sector in Nigeria and Africa delivering results and creating value for stakeholders in the agribusiness sector.
          </p>
          <div>
            <div className="flex gap-7">
              <a href="#" className=" hover:text-green-600 transition">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="hover:text-green-600 transition">
                <FaX size={20} />
              </a>
              <a href="#" className="hover:text-green-600 transition">
                <FaGooglePlusG size={20} />
              </a>
              <a href="#" className="hover:text-green-600 transition">
                <FaPinterestP size={20} />
              </a>
              <a href="#" className="hover:text-green-600 transition">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="w-full md:w-[50%] lg:w-[22%]">
          <h3 className="text-xl font-bold mb-4 font-[Poppins] text-[24px] text-white">Quick Links</h3>
          <div className="w-1/3 h-[3px] bg-green-600 rounded-md mb-4"/>
          <ul className="space-y-2">
            <li><Link to="/about" className="text-sm hover:text-green-600">About us</Link></li>
            <li><Link to="/teamMembers" className="text-sm hover:text-green-600">Our Team</Link></li>
            <li><Link to="/blogs" className="text-sm hover:text-green-600">Featured Project</Link></li>
            <li><Link to="/services" className="text-sm hover:text-green-600">Services</Link></li>
            <li><Link to="/contact" className="text-sm hover:text-green-600">Contact Us</Link></li>
          </ul>
        </div>
        
        {/* Tag Cloud */}
        <div className="w-full md:w-[45%] lg:w-[22%]">
          <h3 className="text-xl font-bold mb-4 font-[Poppins] text-white text-[24px]">Tag Cloud</h3>
          <div className="w-1/3 h-[3px] bg-green-600 rounded-md mb-4"/>
          <div className="flex flex-wrap gap-2">
            {['Advisory (1)', 'Advocacy (1)', 'Agriculture (1)', 'Agro Support (1)', 'communication (1)'].map((tag) => (
              <span key={tag} className="bg-slate-700 px-3 py-2 rounded-full text-xs shadow-sm hover:bg-green-600 hover:text-white transition">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="w-full md:w-[45%] lg:w-[22%]">
          <h3 className="text-xl font-bold mb-4 font-[Poppins] text-white text-[24px]">SignUp For Newsletter</h3>
          <div className="w-1/3 h-[3px] bg-green-600 rounded-md mb-5"/>
          <p className="text-sm mb-10">
            Get updated with our latest news and offers.
          </p>
          <div className="flex bg-[#2D2D2D] rounded-md overflow-hidden">
            <input 
              type="email" 
              placeholder="Enter your e-mail here" 
              className="px-4 py-2 text-sm text-slate-400 w-full rounded-l-md focus:outline-none"
            />
            <button className="text-white px-4 py-4 rounded-r-md text-sm transition">
              <GrSend className="inline-block mr-2 hover:text-green-500 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Copyright would typically go here */}
    </footer>
  );
};

export default Footer;