import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Parallax,
} from "swiper/modules";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Play, Users } from "lucide-react";
import imagesData from "../data/images.json";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/parallax";

export default function Slides() {
  // Get slides data from JSON
  const slides = imagesData.homePage.heroSlides;

  return (
    <div className="w-full relative">
      <Swiper
        modules={[EffectFade, Autoplay, Navigation, Pagination, Parallax]}
        slidesPerView={1}
        loop
        effect="fade"
        speed={2000}
        parallax={true}
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 9000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{
          el: ".swiper-pagination-custom",
          clickable: true,
          bulletClass: "swiper-pagination-bullet-custom",
          bulletActiveClass: "swiper-pagination-bullet-active-custom",
        }}
        className="overflow-hidden slider-container">
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative">
            <div className="relative w-full h-screen">
              {/* Background Image with Enhanced Parallax */}
              <div
                className="absolute inset-0 overflow-hidden"
                data-swiper-parallax="-23%">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover scale-animation"
                />
                {/* Dynamic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent opacity-70"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 via-transparent to-transparent"></div>
              </div>

              {/* Floating Particles Animation */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="particle particle-1"></div>
                <div className="particle particle-2"></div>
                <div className="particle particle-3"></div>
                <div className="particle particle-4"></div>
                <div className="particle particle-5"></div>
              </div>

              {/* Content with Enhanced Animations */}
              <div className="absolute inset-0 flex items-center justify-center text-white z-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-5xl mx-auto text-center lg:text-left">
                    {/* Animated Badge */}
                    <div
                      className="inline-flex items-center gap-2 px-4 py-2 bg-green-600/20 backdrop-blur-sm border border-green-400/30 rounded-full mb-6 animate-slide-in-from-top"
                      style={{ animationDelay: "0.2s" }}
                      data-swiper-parallax="-200">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-300 font-medium text-sm">
                        {slide.subtitle}
                      </span>
                    </div>

                    {/* Main Title with Stagger Animation */}
                    <h1
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight"
                      data-swiper-parallax="-300">
                      {slide.title.split(" ").map((word, wordIndex) => (
                        <span
                          key={wordIndex}
                          className="inline-block animate-slide-in-from-bottom mr-3"
                          style={{
                            animationDelay: `${0.4 + wordIndex * 0.1}s`,
                            animationFillMode: "both",
                          }}>
                          <span className="bg-gradient-to-r from-white via-green-100 to-green-200 bg-clip-text text-transparent">
                            {word}
                          </span>
                        </span>
                      ))}
                    </h1>

                    {/* Description with Typewriter Effect */}
                    <p
                      className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-100 mb-10 max-w-4xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up"
                      style={{ animationDelay: "0.8s" }}
                      data-swiper-parallax="-100">
                      {slide.description}
                    </p>

                    {/* Enhanced CTA Buttons */}
                    <div
                      className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-in-from-bottom"
                      style={{ animationDelay: "1s" }}
                      data-swiper-parallax="-50">
                      {/* Primary CTA Button */}
                      <Link
                        to={slide.primaryCtaLink}
                        className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-lg rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl overflow-hidden">
                        <span className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-600/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                        <span className="relative flex items-center gap-2">
                          {slide.primaryCta}
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </Link>

                      {/* Secondary CTA Button */}
                      <Link
                        to={slide.secondaryCtaLink}
                        className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 hover:border-white/80 backdrop-blur-sm hover:bg-white/10 text-white font-semibold text-lg rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-xl">
                        <span className="flex items-center gap-2">
                          {slide.secondaryCta}
                          <Play className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                        </span>
                      </Link>
                    </div>

                    {/* Progress Bar */}
                    <div
                      className="mt-12 animate-fade-in-up"
                      style={{ animationDelay: "1.2s" }}>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-300 font-medium">
                          0{index + 1} / 0{slides.length}
                        </span>
                        <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full progress-bar"
                            style={{
                              width: `${((index + 1) / slides.length) * 100}%`,
                              transition: "width 0.5s ease-in-out",
                            }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Scroll Indicator */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                <div className="flex flex-col items-center gap-2 animate-bounce-slow">
                  <span className="text-white/60 text-xs font-medium tracking-wider">
                    SCROLL
                  </span>
                  <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-scroll-indicator"></div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Enhanced Custom Navigation */}
      <div className="swiper-button-prev-custom absolute left-6 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 bg-black/30 hover:bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-500 cursor-pointer border border-white/20 hover:border-white/40 group">
        <ChevronRight className="h-6 w-6 text-white rotate-180 group-hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="swiper-button-next-custom absolute right-6 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 bg-black/30 hover:bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-500 cursor-pointer border border-white/20 hover:border-white/40 group">
        <ChevronRight className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
      </div>

      {/* Enhanced Custom Pagination */}
      <div className="swiper-pagination-custom absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3"></div>

      {/* Enhanced CSS Animations */}
      <style jsx global>{`
        @keyframes kenBurnsZoom {
          0% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.05) rotate(0.5deg);
          }
          100% {
            transform: scale(1.1) rotate(1deg);
          }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(60px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInFromTop {
          0% {
            opacity: 0;
            transform: translateY(-30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInFromBottom {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatParticle {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.3;
          }
        }

        @keyframes scrollIndicator {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          50% {
            opacity: 0.3;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .scale-animation {
          animation: kenBurnsZoom 15s ease-in-out infinite alternate;
        }

        .animate-fade-in-up {
          animation: fadeInUp 1.2s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-from-top {
          animation: slideInFromTop 1s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-from-bottom {
          animation: slideInFromBottom 1s ease-out forwards;
          opacity: 0;
        }

        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }

        .animate-scroll-indicator {
          animation: scrollIndicator 2s ease-in-out infinite;
        }

        /* Floating Particles */
        .particle {
          position: absolute;
          background: radial-gradient(
            circle,
            rgba(34, 197, 94, 0.3) 0%,
            transparent 70%
          );
          border-radius: 50%;
          pointer-events: none;
          animation: floatParticle 6s ease-in-out infinite;
        }

        .particle-1 {
          width: 4px;
          height: 4px;
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .particle-2 {
          width: 6px;
          height: 6px;
          top: 40%;
          right: 15%;
          animation-delay: 2s;
        }

        .particle-3 {
          width: 3px;
          height: 3px;
          top: 60%;
          left: 20%;
          animation-delay: 4s;
        }

        .particle-4 {
          width: 5px;
          height: 5px;
          top: 80%;
          right: 25%;
          animation-delay: 1s;
        }

        .particle-5 {
          width: 4px;
          height: 4px;
          top: 30%;
          left: 70%;
          animation-delay: 3s;
        }

        /* Custom pagination styles */
        .swiper-pagination-bullet-custom {
          width: 16px;
          height: 4px;
          background: rgba(255, 255, 255, 0.4);
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.5s ease;
          position: relative;
          overflow: hidden;
        }

        .swiper-pagination-bullet-custom::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          transition: left 0.5s ease;
        }

        .swiper-pagination-bullet-active-custom {
          background: linear-gradient(90deg, #22c55e, #16a34a);
          width: 32px;
          transform: scale(1.1);
        }

        .swiper-pagination-bullet-active-custom::before {
          left: 100%;
        }

        /* Progress bar animation */
        .progress-bar {
          position: relative;
          overflow: hidden;
        }

        .progress-bar::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        /* Ensure text is visible on active slides only */
        .swiper-slide:not(.swiper-slide-active) .animate-fade-in-up,
        .swiper-slide:not(.swiper-slide-active) .animate-slide-in-from-top,
        .swiper-slide:not(.swiper-slide-active) .animate-slide-in-from-bottom {
          opacity: 0 !important;
        }

        .slider-container {
          height: 100vh;
          min-height: 700px;
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .slider-container {
            height: 100vh;
            min-height: 600px;
          }

          .particle {
            display: none;
          }
        }

        /* Enhanced mobile button styling */
        @media (max-width: 640px) {
          .swiper-button-prev-custom,
          .swiper-button-next-custom {
            width: 12px;
            height: 12px;
          }

          .swiper-pagination-bullet-custom {
            width: 12px;
            height: 3px;
          }

          .swiper-pagination-bullet-active-custom {
            width: 24px;
          }
        }
      `}</style>
    </div>
  );
}
