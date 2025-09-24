import React from 'react';
import hero from "../assets/hero.png";
import { motion } from 'framer-motion';

const Hero = ({ title, bgImage }) => {
  return (
    <section
      className="relative w-full h-[200px] md:h-[200px] bg-center bg-cover flex items-center justify-center "
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Title */}
      <motion.h1
        className="relative z-20 text-white text-4xl md:text-5xl font-bold text-Left px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h1>
    </section>
  );
};

export default Hero;
