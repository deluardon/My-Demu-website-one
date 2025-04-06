import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Project One',
    description: 'A React-based web app.',
    tech: ['React', 'Node.js', 'MongoDB'],
    link: '#',
    github: '#',
    image: 'https://via.placeholder.com/300'
  },
  {
    title: 'Project Two',
    description: 'A full-stack application built with MERN.',
    tech: ['React', 'Express', 'MongoDB'],
    link: '#',
    github: '#',
    image: 'https://via.placeholder.com/300'
  },
 
];

const Portfolio = () => {
  return (
    <div id="projects" className="py-20 bg-gray-900 text-white px-4">
      
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
              whileHover={{ scale: 1.1 }}
            />

            <div className="p-6">
             
              <motion.h3
                className="text-2xl font-bold mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {project.title}
              </motion.h3>

        
              <p className="text-sm mt-2">{project.description}</p>

              
              <div className="mt-4">
                <span className="text-xs font-semibold">Tech Stack: </span>
                <ul className="flex gap-2 text-xs mt-1">
                  {project.tech.map((tech, i) => (
                    <motion.li
                      key={i}
                      className="bg-gray-700 text-white py-1 px-2 rounded-md"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {tech}
                    </motion.li>
                  ))}
                </ul>
              </div>

         
              <div className="flex gap-4 mt-4">
                <motion.a
                  href={project.link}
                  className="text-purple-500 hover:underline"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  Live Demo
                </motion.a>
                <motion.a
                  href={project.github}
                  className="text-purple-500 hover:underline"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  GitHub Repo
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
