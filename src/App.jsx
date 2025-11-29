import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contect";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <div className="wrap">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
