import { React, Suspense, lazy } from 'react';
import Navbar from './Navbar';
import Hero from '../Pages/Hero';
import About from '../Pages/About'; 
import Contact from '../Pages/Contact';
import Skill from '../Pages/Skill';
import Projects from '../Pages/Projects'
import Footer from '../Component/Footer'; 


const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <Hero /> 
        <About />
        <Skill />
        <Projects />
        <Contact />
        <Footer /> 
    </div>
  );
}

export default Portfolio;

