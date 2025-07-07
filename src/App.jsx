import React from 'react';
import Hero from './components/hero';
import Navigation from './components/Navigation';
import SkillSection from './components/SkillSection';
// import AboutSection from './components/AboutSection';
import Contact from './components/Contact';
import ProjectSection from './components/ProjectSection';
import Footer from './components/footer';
import AboutSection from './components/AboutSection';

const App = () => {
  return (
    <>
    
      <Navigation />
      <Hero />
      <AboutSection/>
      <SkillSection/>
     <ProjectSection/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;

