import React from "react";
import { motion } from "framer-motion";
import { FaThumbsUp, FaCode } from "react-icons/fa"; 
import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <div id="about" className="py-20 bg-gray-900 text-white px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h2
          className="text-5xl font-bold mb-6 text-cyan-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <FaCode className="inline-block mr-4 text-cyan-500" />
          About Me
        </motion.h2>

        <motion.p
          className="text-gray-300 text-lg leading-relaxed mb-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          Hello, I'm <span className="font-semibold text-cyan-400">Deluardon</span>, a passionate web developer specializing in frontend technologies.
        </motion.p>

   
        <motion.p
          className="text-gray-300 text-lg leading-relaxed mb-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Typewriter
            options={{
              strings: [
                "I love coding and creating beautiful, responsive web applications.",
                "Let's create something amazing together!",
                "Focused on frontend development with React, JavaScript, and more!"
              ],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
          />
        </motion.p>

      
        <motion.p
          className="text-gray-300 text-lg leading-relaxed mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          I'm constantly learning and adapting to the latest technologies to improve my skills. My goal is to create intuitive and user-friendly websites.
        </motion.p>

        <motion.div
          className="text-gray-300 text-lg leading-relaxed"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <p>
            Whether it's solving complex problems or building interactive features, I aim to bring ideas to life through code. Let's build something amazing together! 
            <FaThumbsUp className="inline-block ml-4 text-cyan-500" />
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
