import React from 'react';
import Hero from '../Components/Hero';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Faq from '../Components/Faq';


const Home = () => {
  return (
    <>
      <div id="hero"><Hero /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="portfolio"><Portfolio /></div>
      <div id="contact"><Contact /></div>
      <div id="faq"><Faq /></div>
    </>
  );
};

export default Home;
