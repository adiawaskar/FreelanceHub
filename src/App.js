import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Footer from './components/Footer';
import Features from './components/Features';
import FAQs from './components/FAQs';
import Testimonial from './components/Testimonial'
import EscrowForm from './components/EscrowForm';
import Spline from '@splinetool/react-spline';

function App() {
  return (
    <div className="App">
      <Spline className="app-background" scene="https://prod.spline.design/fmsIAQTVvZBiU4s5/scene.splinecode" />
      <div className="app-content">
        <Header />
        <HeroSection />
        <About />
        <Features/>
        <Testimonial/>
        <FAQs/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
