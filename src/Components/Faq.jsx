import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'What is your learning background?',
      answer: 'I learned programming through Programming Hero. It gave me a strong foundation in web development.',
    },
    {
      question: 'What technologies do you work with?',
      answer: 'I work with HTML, CSS, JavaScript, React, Node.js, and more.',
    },
    {
      question: 'How can I contact you?',
      answer: 'You can contact me through the Contact form on my portfolio.',
    },
    {
      question: 'What projects have you worked on?',
      answer: 'I have worked on several web development projects, including personal portfolios and full-stack applications.',
    },
  ];

  return (
    <div id="faq" className="py-20 bg-gray-900 text-white px-4">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg p-6 shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(index)}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <motion.div
                animate={{
                  rotate: activeIndex === index ? 180 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="text-purple-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </motion.div>
            </motion.div>

            {activeIndex === index && (
              <motion.p
                className="mt-4 text-sm text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {faq.answer}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
