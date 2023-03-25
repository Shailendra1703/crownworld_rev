import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Blockchain from "./components/Blockchain";
import OurTeam from "./components/ourTeam";
import Footer from "./components/Footer";
import Partners from "./components/Partners";
import EcoSystem from "./components/EcoSystem";
import Portfolio from "./components/Portfolio";
import Card from "./components/card";
import Chains from "./components/Chains";
import "./App.css";

const App = () => {
  return (
    <div className="mainbg">
      <NavBar />
      <Hero title="hero" id="hero" />
      <Chains />
      <Card />
      <Portfolio />
      <EcoSystem />
      <Partners />
      <OurTeam />
      <Footer title="footer" id="footer" />
    </div>
  );
};

export default App;
