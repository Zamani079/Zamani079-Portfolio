import { useScrollReveal } from '@/hooks/useScrollReveal';
import Background from '@/components/Background';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Stats from '@/components/Stats';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Interests from '@/components/Interests';
import WhyWorkWithMe from '@/components/WhyWorkWithMe';
import CareerInterests from '@/components/CareerInterests';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  useScrollReveal();

  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Interests />
        <WhyWorkWithMe />
        <CareerInterests />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
