import { BrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </BrowserRouter>
  );
}

export default App;
