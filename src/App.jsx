import Header from "./components/Header";
import Hero from "./components/hero";
import About from "./About";
import Projects from "./components/Projects";
import Skills from "./components/skills";
import Contact from "./components/contect";
import Footer from "./components/footer";
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
