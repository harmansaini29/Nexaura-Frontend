import React from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import { TypeAnimation } from "react-type-animation";
import heroAnimation from "../assets/hero-lottie.json";
import { FaChevronDown } from "react-icons/fa";

const Hero = () => {
  const handleScroll = () => {
    const target = document.querySelector("#highlights");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative text-white text-center py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* ✅ Background Video with Fallback */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/assets/hero-bg.mp4"
        poster="/assets/hero-fallback.jpg" // ✅ Place a fallback image in public/assets
      >
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 p-6 bg-white/5 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Text Section */}
        <div className="text-left w-full md:w-1/2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tight text-white drop-shadow-xl">
            NEXAURA: <span className="text-sky-400">Seamless Connectivity</span>
          </h1>

          {/* Typed Text Effect */}
          <TypeAnimation
            sequence={[
              "Smart integration for enterprises.",
              2000,
              "Secure, scalable data exchange.",
              2000,
              "Real-time B2B platform.",
              2000,
            ]}
            wrapper="p"
            speed={50}
            className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-6 font-medium"
            repeat={Infinity}
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:ring-sky-300 text-white px-8 py-3 md:px-10 md:py-4 text-base md:text-lg font-semibold rounded-xl shadow-lg transition duration-300"
          >
            Explore Now
          </motion.button>
        </div>

        {/* Lottie Animation */}
        <div className="w-full md:w-1/2">
          <Player
            autoplay
            loop
            src={heroAnimation}
            className="w-full max-w-md mx-auto"
          />
        </div>
      </motion.div>

      {/* Scroll Down Arrow */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={handleScroll}
        aria-label="Scroll to next section"
      >
        <FaChevronDown className="text-white text-xl opacity-70 hover:opacity-100 transition duration-300" />
      </motion.div>
    </section>
  );
};

export default Hero;
