
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import LazyImage from './LazyImage';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  const projects = [
    {
      id: 1,
      title: 'Prep-AI',
      desc: 'Prep-AI is a full-stack web application designed to help candidates prepare for interviews based on selected roles. It leverages AI to generate tailored questions—both theoretical and coding',
      image: '/lovable-uploads/974ee4db-e390-4b67-ad8d-0923b95698af.png',
      githubLink: 'https://github.com/Durga1534/Prep_AI',
      liveLink: 'https://prep-ai-git-master-durgaprasads-projects-e0a9901b.vercel.app/',
      tech: ['React.js', 'JavaScript', 'Node.js', 'Tailwind CSS', 'Firebase'],
      featured: true,
      category: 'Full-Stack',
    },
    {
      id: 2,
      title: 'Project Management System',
      desc: 'A comprehensive management system designed to maintain users, tasks, teams, and projects with real-time collaboration features.',
      image: '/lovable-uploads/23b098a8-011f-47d0-8c85-f0731a32cd58.png',
      githubLink: 'https://github.com/Durga1534/project-management',
      liveLink: null,
      tech: ['React.js', 'Node.js', 'Tailwind CSS', 'Express', 'MongoDB'],
      featured: true,
      category: 'Full-Stack',
    },
    {
      id: 3,
      title: '3D-Travel destination showcase',
      desc: 'An immersive travel destination webpage showcasing famous destinations with stunning 3D visuals and interactive elements.',
      image: '/lovable-uploads/fe06fbea-dcd5-4cfc-a990-d354750d1be6.png',
      githubLink: 'https://github.com/Durga1534/3D-Image-site',
      liveLink: 'https://3-d-image-site.vercel.app/',
      tech: ['HTML', 'CSS'],
      featured: false,
      category: 'Frontend',
    },
    {
      id: 4,
      title: 'Mortgage Calculator',
      desc: 'An intelligent mortgage calculator designed to provide accurate repayment calculations based on loan amount, interest rate, and term.',
      image: '/lovable-uploads/831a99d0-0fd9-4c2f-b75f-ca39d1888510.png',
      githubLink: 'https://github.com/Durga1534/Mortgage_Repayment',
      liveLink: 'https://mortgage-repayment-bay.vercel.app/',
      tech: ['JavaScript', 'CSS'],
      featured: false,
      category: 'Frontend',
    },
    {
      id: 5,
      title: 'Poke-Slider',
      desc: 'Interactive 3D webpage showcasing various Pokemon with detailed information including stats, moves, and evolution chains.',
      image: '/lovable-uploads/51732865-b757-44ac-8a94-c7e875db2fb4.png',
      githubLink: 'https://github.com/Durga1534/poke-slider',
      liveLink: 'https://poke-slider-tan.vercel.app/',
      tech: ['HTML', 'CSS'],
      featured: false,
      category: 'Frontend',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.15,
        duration: prefersReducedMotion ? 0 : 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: prefersReducedMotion ? 0 : 60, 
      scale: prefersReducedMotion ? 1 : 0.85
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: prefersReducedMotion ? 0 : 0.7
      }
    }
  };

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: prefersReducedMotion ? 0 : 50 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: prefersReducedMotion ? 1 : 0.8 }}
            animate={isInView ? { scale: 1 } : { scale: prefersReducedMotion ? 1 : 0.8 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 0.2 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-300/30 rounded-full text-purple-200 dark:text-purple-200 text-sm font-medium backdrop-blur-sm">
              My Work
            </span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Featured <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my latest work in web development, featuring modern technologies and innovative solutions.
          </p>
        </motion.div>

        {/* Featured Projects - Larger Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={prefersReducedMotion ? {} : { 
                y: -15,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <Card className="h-full glass glass-hover border border-gray-200/50 dark:border-white/20 hover:border-purple-400/50 transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-purple-500/25 bg-white/80 dark:bg-white/5">
                <div className="relative overflow-hidden h-64">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20" />
                  <LazyImage
                    src={project.image}
                    alt={`Screenshot of ${project.title} project showing the main interface and features`}
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  
                  {/* Project Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full shadow-lg backdrop-blur-sm">
                      Featured
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-black/30 text-white border-white/20 backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-8 flex flex-col flex-grow backdrop-blur-sm bg-white/5">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-700 dark:text-gray-200 mb-6 flex-grow text-base leading-relaxed">
                    {project.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-purple-500/20 text-purple-700 dark:text-purple-200 border-purple-400/40 text-xs px-3 py-1 hover:scale-105 transition-transform duration-200 backdrop-blur-sm"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 mt-auto">
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                        aria-label={`View source code for ${project.title} on GitHub`}
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                    
                    {project.liveLink && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1 border-gray-300 dark:border-white/30 text-gray-700 dark:text-white bg-white/50 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20 hover:border-purple-400 dark:hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
                      >
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                          aria-label={`View live demo of ${project.title}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects - Smaller Grid */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 0.4 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            More Projects
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {otherProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={prefersReducedMotion ? {} : { 
                y: -8,
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <Card className="h-full glass glass-hover border border-gray-200/50 dark:border-white/20 hover:border-purple-400/50 transition-all duration-300 overflow-hidden shadow-xl bg-white/80 dark:bg-white/5">
                <div className="relative overflow-hidden h-48">
                  <LazyImage
                    src={project.image}
                    alt={`Screenshot of ${project.title} project`}
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-black/30 text-white border-white/20 backdrop-blur-sm text-xs">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6 flex flex-col flex-grow backdrop-blur-sm bg-white/5">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h4>
                  
                  <p className="text-gray-700 dark:text-gray-200 mb-4 flex-grow text-sm leading-relaxed">
                    {project.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-purple-500/20 text-purple-700 dark:text-purple-200 border-purple-400/30 text-xs backdrop-blur-sm"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs text-gray-500 dark:text-gray-300 self-center">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3 mt-auto">
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-xs"
                    >
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1"
                        aria-label={`View source code for ${project.title}`}
                      >
                        <Github className="w-3 h-3" />
                        Code
                      </a>
                    </Button>
                    
                    {project.liveLink && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1 border-gray-300 dark:border-white/30 text-gray-700 dark:text-white bg-white/50 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20 text-xs backdrop-blur-sm"
                      >
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1"
                          aria-label={`View live demo of ${project.title}`}
                        >
                          <ExternalLink className="w-3 h-3" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Want to see more of my work?
          </p>
          <Button
            asChild
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <a
              href="https://github.com/Durga1534"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
              aria-label="View all projects on GitHub"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
