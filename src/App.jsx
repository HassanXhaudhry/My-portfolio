import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
    <Navbar/>
      <Home/>
      <Services/>
      <Resume/>
      <Experience/>
      <Contact/>
    </div>
  );
};

export default App;
