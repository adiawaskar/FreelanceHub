import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Footer from './components/Footer';
import Features from './components/Features';
import FAQs from './components/FAQs';
import Testimonial from './components/Testimonial'
import Gallery from './components/gallery'
// import Proposal from './components/proposal'

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <About />
      <Features/>
      <Gallery/>
      <Testimonial/>
      <FAQs/>
      <Footer />
      {/* <Proposal/> */}
    </div>
  );
}

export default App;

