import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Skills />
        <TechStack />
        <Projects />
        <Articles />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;

