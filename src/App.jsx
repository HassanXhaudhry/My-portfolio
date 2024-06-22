import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <Resume />
      <Experience />
      <Contact />
    </div>
  );
};

export default App;
