import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import VisionMission from './components/VisionMission';
import MarketProblems from './components/MarketProblems';
import Technologies from './components/Technologies';
import QRChainEcosystem from './components/QRChainEcosystem';
import Benefits from './components/Benefits';
import BusinessModel from './components/BusinessModel';
import Impact from './components/Impact';
import HowItWorks from './components/HowItWorks';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <VisionMission />
      <MarketProblems />
      <Technologies />
      <QRChainEcosystem />
      <Benefits />
      <BusinessModel />
      <Impact />
      <HowItWorks />
      <Roadmap />
      <Team />
      <Footer />
    </div>
  );
}

export default App;