import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
// import Services from './components/Services';
import Footer from './components/Footer';
import Features from './components/Features';
import FAQs from './components/FAQs';
import Testimonial from './components/Testimonial'
// import Gal from './components/gal'

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <About />
      {/* <Services /> */}
      {/* <Gal/> */}
      <Features/>
      <Testimonial/>
      <FAQs/>
      <Footer />
    </div>
  );
}

export default App;

