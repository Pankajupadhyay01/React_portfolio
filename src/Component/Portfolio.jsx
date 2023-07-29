import {React,lazy} from 'react';      
const Hero = lazy(()=>import('../Pages/Hero'))
const About = lazy(()=>import('../Pages/About'))
const Contact = lazy(()=>import('../Pages/Contact'))
const Projects = lazy(()=>import('../Pages/Projects'))
const Skill = lazy(()=>import('../Pages/Skill'))
const Footer = lazy(()=>import('./Footer'))
const Navbar = lazy(()=>import('./Navbar'))


const Portfolio = () => { 
  return (
    <div> 
      <Navbar/>
      <Hero/>
      <About/>
      <Skill/> 
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Portfolio;
 
