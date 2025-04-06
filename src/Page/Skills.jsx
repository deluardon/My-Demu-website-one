
import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNode,
  FaGithub,
} from "react-icons/fa";
import {
  SiFirebase,
  SiTailwindcss,
  SiMongodb,
  SiRedux,
  SiExpress,
  SiVercel,
  SiDaisyui,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-600" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-500" },
  { name: "React", icon: <FaReact />, color: "text-cyan-500" },
  { name: "Redux", icon: <SiRedux />, color: "text-purple-500" },
  { name: "Node.js", icon: <FaNode />, color: "text-green-500" },
  { name: "Express.js", icon: <SiExpress />, color: "text-gray-600" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
  { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-600" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-sky-400" },
  { name: "DaisyUI", icon: <SiDaisyui />, color: "text-pink-500" },
  { name: "Vercel", icon: <SiVercel />, color: "text-black" },
  { name: "GitHub", icon: <FaGithub />, color: "text-white" },
];

const Skills = () => {
  return (
    <div id="skills" className="py-20 bg-gray-950 text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">
          <Typewriter
            words={["My Skills", "Tools I Use", "Technologies I Love ❤️"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
        <motion.p
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-400 text-lg leading-relaxed"
        >
          I’m a passionate front-end web developer who loves building beautiful
          and functional websites. I work with modern tools and frameworks to
          create responsive, interactive, and high-performing web apps. Scroll
          down to see the technologies I’ve mastered!
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skills.map(({ name, icon, color }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 20px rgba(0, 255, 255, 0.6)",
              transition: { duration: 0.3 },
            }}
            className="flex flex-col items-center gap-2 p-5 bg-gray-800 rounded-2xl shadow-md transition-all duration-300 ease-in-out hover:bg-gray-700"
          >
            <div className={`text-4xl ${color}`}>{icon}</div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-base font-medium"
            >
              {name}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
