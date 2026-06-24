import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skils from "../components/Skils";
import About from "../components/About";
import Projects from "../components/Project";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skils />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
