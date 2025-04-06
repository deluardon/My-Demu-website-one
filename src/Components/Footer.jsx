import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-8 px-4">
      <div className="max-w-screen-xl mx-auto text-center">
    
        <motion.h3
          className="text-2xl font-semibold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Connect with Me
        </motion.h3>
        
        
        <motion.div
          className="flex justify-center gap-6 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.a
            href="https://www.facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-500 transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FaFacebook size={28} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin size={28} />
          </motion.a>
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300 transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub size={28} />
          </motion.a>
          <motion.a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FaTwitter size={28} />
          </motion.a>
        </motion.div>

   
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Your Name. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
