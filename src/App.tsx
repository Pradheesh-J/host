import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Interests } from './components/Interests';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-arch-bg text-arch-text-primary">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
