import Hero from './components/hero';
import Navigation from './components/navigation';
import SkillSection from './components/SkillSection';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import Contact from './components/Contact';
import Footer from './components/Footer';



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

