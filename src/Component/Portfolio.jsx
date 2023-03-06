import React from 'react'; 
import About from '../Pages/About';
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
    </div>
  );
}

export default Portfolio;
