import React from 'react'; 
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Hero from '../Pages/Hero';
import Projects from '../Pages/Projects';
import Skill from '../Pages/Skill';
import Navbar from './Navbar';
const Portfolio = () => {
  return (
    <div> 
      <Navbar/>
      <Hero/>
      <About/>
      <Skill/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default Portfolio;
