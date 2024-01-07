import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </BrowserRouter>
  );
}

export default App;
