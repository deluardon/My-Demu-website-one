import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Swal from "sweetalert2";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from "framer-motion";

const Hero = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

 
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAlert = () => {
    Swal.fire({
      title: "Welcome!",
      text: "Thanks for visiting my portfolio.",
      icon: "success",
    });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-gradient-to-br from-purple-900 to-indigo-800 text-white px-4 overflow-hidden">
    
      <motion.div
        className="relative z-10 w-full md:w-1/2 text-center md:text-left py-8 px-4"
        initial={{ opacity: 0, x: -200 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1.5, ease: "easeInOut" }} 
      >
    
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="text-4xl md:text-6xl font-bold mb-6 text-shadow-xl"
        >
          Hi, I'm Deluar
        </motion.h1>

     
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }} 
          className="text-xl md:text-2xl mb-6"
        >
          <Typewriter
            words={["Frontend Developer", "React Specialist", "Creative Coder"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.h2>

      
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
          className="text-lg mb-6"
        >
          I am passionate about creating beautiful and functional user interfaces using React and modern web technologies.
        </motion.p>

     
        <motion.button
          onClick={handleAlert}
          whileHover={{ scale: 1.1, backgroundColor: "#5c6bc0" }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-lg text-lg transition duration-300 ease-in-out transform"
        >
          Say Hello
        </motion.button>
      </motion.div>

      
      <motion.div
        className="relative w-full md:w-1/2 h-full flex justify-center items-center"
        initial={{ opacity: 0, x: 200 }} 
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <DotLottieReact
          src="https://lottie.host/beb5d017-1ace-4124-a862-def3aa6ac436/plDERRvPdz.lottie" 
          loop
          autoplay
          className="w-full h-full object-cover"
        />
      </motion.div>

      
      {hasScrolled && (
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }} 
        >
          <p className="text-white text-lg">Welcome to my portfolio! Scroll down for more...</p>
        </motion.div>
      )}
    </div>
  );
};

export default Hero;
