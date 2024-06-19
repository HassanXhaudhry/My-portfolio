import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Slider from "./components/Slider";
import About from "./components/About";
import Faq from "./components/Faq";
import Pricing from "./components/Pricing";
import ContactUs from "./components/ContactUs";

const App = () => {
  return (
    <div>
    <Navbar/>
      <Home/>
      <Slider/>
      <About/>
      <Pricing/>
      <Faq/>
      <ContactUs/>
    </div>
  );
};

export default App;
