import { Hero } from './pages/Hero';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { SkillsSection } from './pages/SkillsSection';
import { Contact } from './pages/Contact';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="relative">
      <Navbar />

      <div className="sticky top-0 h-screen z-0">
        <Hero />
      </div>

      <div className="relative z-10">
        <About />
      </div>

      <div className="relative z-20">
        <Projects />
      </div>

      <div className="relative z-30 h-[155vh] md:h-[200vh]">
        <div className="sticky top-[-120px] md:top-[-40px] lg:top-[-160px] min-h-screen">
          <SkillsSection />
        </div>
      </div>

      <div className="relative z-40">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
