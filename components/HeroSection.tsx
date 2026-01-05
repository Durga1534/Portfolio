"use client";

import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Dock, DockIcon } from "./magicui/dock";
import Image from "next/image";

interface HeroProps {
  name?: string;
  desc?: string;
  image?: string;
}

// Reusable Social Dock Component
export const SocialDock: FC<{ className?: string }> = ({ className = "" }) => (
  <Dock className={className}>
    <DockIcon>
      <a
        href="https://github.com/Durga1534"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-yellow-600 transition-colors duration-300"
        title="GitHub Profile"
      >
        <FaGithub size={22} />
      </a>
    </DockIcon>
    <DockIcon>
      <a
        href="https://www.linkedin.com/in/durgaprasad23"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-yellow-600 transition-colors duration-300"
        title="LinkedIn Profile"
      >
        <FaLinkedin size={22} />
      </a>
    </DockIcon>
    <DockIcon>
      <a
        href="mailto:kondurudurgaprasad.2@gmail.com"
        className="text-gray-700 hover:text-yellow-600 transition-colors duration-300"
        title="Send Email"
      >
        <FaEnvelope size={22} />
      </a>
    </DockIcon>
  </Dock>
);

const HeroSection: FC<HeroProps> = ({
  name = "Durga Prasad",
  desc = "Full Stack Developer",
  image = "/Profile.jpg",
}) => {
  const [imageError, setImageError] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Konduru Durga Prasad.pdf';
    link.download = 'Durga_Prasad_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-white to-gray-50 scroll-mt-20"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-200 rounded-full opacity-15 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-6">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
          className="mb-6"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 p-1 shadow-xl">
            {image && !imageError ? (
              <Image
                src={image}
                alt={`${name} - Full Stack Developer`}
                className="w-full h-full rounded-full object-cover bg-white"
                onError={() => setImageError(true)}
                width={160}
                height={160}
                loading="eager"
                priority
              />
            ) : (
              <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-3xl font-bold text-gray-700">
                {name.split(' ').map(word => word.charAt(0)).join('')}
              </div>
            )}
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
        >
          Hello, I'm{" "}
          <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            {name}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-700 font-medium"
        >
          I'm a{" "}
          <span className="text-yellow-600 font-semibold">
            {desc}
          </span>
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4"
        >
          Passionate about creating beautiful, functional, and user-friendly applications
          that solve real-world problems with clean, efficient code and modern technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
        >
          <a 
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            View My Work
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
          <button 
            onClick={downloadResume}
            className="px-8 py-3 border-2 border-gray-300 text-gray-700 hover:border-yellow-400 hover:bg-yellow-50 font-semibold rounded-lg transition-all duration-300 hover:shadow-md"
          >
            Download Resume
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center pt-8"
        >
          <SocialDock />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <motion.button
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => scrollToSection('about')}
            className="cursor-pointer focus:outline-none"
            aria-label="Scroll to next section"
          >
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center hover:border-yellow-400 transition-colors duration-300">
              <div className="w-1 h-3 bg-gray-300 rounded-full mt-2"></div>
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;