import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    file: null,
    recaptchaToken: ''
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleRecaptcha = (value) => {
    setFormData({ ...formData, recaptchaToken: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.recaptchaToken) {
      Swal.fire({
        title: 'Error!',
        text: 'Please complete the reCAPTCHA to verify you are not a robot.',
        icon: 'error',
        confirmButtonText: 'OK',
        background: '#1f2937',
        color: '#fff',
        confirmButtonColor: '#6B46C1',
      });
      return;
    }

 
    if (formData.file) {
      console.log('File uploaded:', formData.file.name);
    }

   
    Swal.fire({
      title: 'Success!',
      text: 'Your message has been sent successfully.',
      icon: 'success',
      confirmButtonText: 'OK',
      background: '#1f2937',
      color: '#fff',
      confirmButtonColor: '#6B46C1',
    });

    setFormData({
      name: '',
      email: '',
      message: '',
      file: null,
      recaptchaToken: ''
    });
  };

  return (
    <div id="contact" className="py-20 bg-gray-900 text-white px-4">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 rounded-md text-white"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 rounded-md text-white"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 rounded-md text-white"
            rows="6"
            required
          ></textarea>
        </div>


        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="file">
            Upload File (Optional)
          </label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 rounded-md text-white"
          />
        </div>

        <div className="mb-6">
          <ReCAPTCHA
            sitekey="6Le2HwwrAAAAAH0IQv6-BzJhqx2PWgrtqL-s3N3R" 
            onChange={handleRecaptcha}
          />
        </div>

        <motion.button
          type="submit"
          className="w-full py-3 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600 transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </div>
  );
};

export default Contact;
