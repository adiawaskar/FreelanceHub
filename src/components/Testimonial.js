import React, { useState } from 'react';
import './Testimonial.css';
import Img3 from '../assets/img3.png'; 
import Img4 from '../assets/img4.png'; 
import Img5 from '../assets/img5.png'; 
import Img6 from '../assets/img6.png'; 

const testimonials = [
  {
    id: 1,
    logo: Img3,
    name: 'Reiko Enomoto',
    position: 'Senior Training Manager | Rainforest Alliance',
    testimonial: `“Now that I have FreelanceHub, I feel like I have a team. Although they don’t report to me as full-time employees, I know that I have people I can count on, with the expertise that I look for. We start to build relationships and, although we’ve never met in person, I feel that I can count on them whenever I need their support.”`,
  },
  {
    id: 2,
    logo: Img4,
    name: 'Sagih Keinan',
    position: 'Global Brand Marketing Director | MyHeritage',
    testimonial: `“Our project manager streamlined the creative process and enabled us to produce a powerful video that would've required significant internal and external resources to create. It was a pleasure to have someone who gets our needs and is highly efficient.”`,
  },
  {
    id: 3,
    logo: Img5,
    name: 'Reiko Enomoto',
    position: 'Senior Training Manager | Rainforest Alliance',
    testimonial: `“Now that I have FreelanceHub, I feel like I have a team. Although they don’t report to me as full-time employees, I know that I have people I can count on, with the expertise that I look for. We start to build relationships and, although we’ve never met in person, I feel that I can count on them whenever I need their support.”`,
  },  
  {
    id: 4,
    logo: Img6,
    name: 'Sagih Keinan',
    position: 'Global Brand Marketing Director | MyHeritage',
    testimonial: `“Our project manager streamlined the creative process and enabled us to produce a powerful video that would've required significant internal and external resources to create. It was a pleasure to have someone who gets our needs and is highly efficient.”`,
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonial-section">
      <h2>What customers are saying</h2>
      <div className="testimonial-carousel">
        <button className="arrow-card left-arrow" onClick={prevTestimonial}>
          &#10094;
        </button>
        <div className="testimonial-card active">
          <div className="testimonial-content">
            <img src={testimonials[current].logo} alt={`${testimonials[current].name} Logo`} className="testimonial-logo" />
            <div className="testimonial-text">
              <h3>{testimonials[current].name}</h3>
              <p>{testimonials[current].position}</p>
              <p>{testimonials[current].testimonial}</p>
              <button className="case-study-button">Read case study</button>
            </div>
          </div>
        </div>
        <button className="arrow-card right-arrow" onClick={nextTestimonial}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Testimonial;