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
        className="text-gray-700 dark:text-yellow-400 hover:text-yellow-500 transition-colors duration-300"
        title="GitHub Profile"
      >
        <FaGithub size={20} />
      </a>
    </DockIcon>
    <DockIcon>
      <a
        href="https://www.linkedin.com/in/durgaprasad23"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 dark:text-yellow-400 hover:text-yellow-500 transition-colors duration-300"
        title="LinkedIn Profile"
      >
        <FaLinkedin size={20} />
      </a>
    </DockIcon>
    <DockIcon>
      <a
        href="mailto:kondurudurgaprasad.2@gmail.com"
        className="text-gray-700 dark:text-yellow-400 hover:text-yellow-500 transition-colors duration-300"
        title="Send Email"
      >
        <FaEnvelope size={20} />
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
      const offsetTop = element.offsetTop - 80; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  //Updated to downlaod actual resume
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
      className="relative min-h-screen flex flex-col items-center justify-center px-8 py-16 bg-white dark:bg-black scroll-mt-20"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-200 rounded-full opacity-20 animate-pulse" />
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-pulse delay-75" />
        <div className="absolute top-1/2 right-32 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-pulse delay-150" />
        <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-green-200 rounded-full opacity-15 animate-pulse delay-300" />
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Profile Image with better error handling */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
          className="mb-8"
        >
          <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 p-1 shadow-2xl overflow-hidden">
            {image && !imageError ? (
              <Image
                src={image}
                alt={`${name} - Full Stack Developer`}
                className="w-full h-full rounded-full object-cover bg-gray-100"
                onError={() => setImageError(true)}
                width={200}
                height={200}
                loading="eager"
              />
            ) : (
              <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-4xl font-bold text-gray-700">
                {name.split(' ').map(word => word.charAt(0)).join('')}
              </div>
            )}
          </div>
        </motion.div>

        {/* Enhanced Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-yellow-400 leading-tight"
        >
          Hello, I&apos;m{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            {name}
          </span>
        </motion.h1>

        {/* Enhanced Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8"
        >
          I&apos;m a{" "}
          <span className="text-yellow-500 font-semibold bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded-lg">
            {desc}
          </span>
        </motion.p>

        {/* Enhanced Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Passionate about creating beautiful, functional, and user-friendly applications
          that solve real-world problems with clean, efficient code and modern technologies.
        </motion.p>

        {/* Enhanced CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
        >
          <button 
            onClick={() => scrollToSection('projects')}
            className="group px-10 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="flex items-center justify-center gap-2">
                <a href="#projects">
                    View My Work
                </a>
              <motion.span
                className="inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </button>
          <button 
            onClick={downloadResume}
            className="px-10 py-4 border-2 border-yellow-500 text-yellow-600 dark:text-yellow-400 hover:bg-yellow-500 hover:text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Download Resume
          </button>
        </motion.div>

        {/* Magic UI Social Dock */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex justify-center"
        >
          <SocialDock />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-300 rounded-full mt-2"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;