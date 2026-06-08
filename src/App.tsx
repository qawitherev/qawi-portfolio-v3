import { Hero } from "./components/Hero";
import { TechStacks } from "./components/TechStacks";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";

function App() {
  return (
    <main>
      <Hero />
      <TechStacks />
      <Projects />
      <Experience />
      <Footer />
    </main>
  );
}

export default App;
