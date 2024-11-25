import Spline from "@splinetool/react-spline";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Gallery from "./components/gallery";
import './Landing.css';
function Landing(){

return(
<div className="App">
    <Spline className="app-background" scene="https://prod.spline.design/fmsIAQTVvZBiU4s5/scene.splinecode" />
    <div className="app-content">
        <Header />
        <HeroSection />
        <About />
        <Features/>
        <Gallery/>
        <Testimonial/>
        <FAQs/>
        <Footer />
    </div>
</div>
)
}

export default Landing;