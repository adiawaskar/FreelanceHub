import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import "./gallery.css"

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import slide_image_1 from '../assets/img1.png';
import slide_image_2 from '../assets/img2.png';
import slide_image_3 from '../assets/img3.png';
import slide_image_4 from '../assets/img4.png';
import slide_image_5 from '../assets/img5.png';
import slide_image_6 from '../assets/img6.png';
import slide_image_7 from '../assets/img4.png'; 

const Gallery = () => {
    return (
        <div className="gallery gallery-container"> {/* Added gallery class */}
          <h1 className="gallery-heading">Flower Gallery</h1>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: '.gallery-swiper-pagination', clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="gallery-swiper_container"
          >
            <SwiperSlide className='gallery-swiper-slide'>
              <img src={slide_image_1} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide className='gallery-swiper-slide'>
              <img src={slide_image_2} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide className='gallery-swiper-slide'>
              <img src={slide_image_3} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide className='gallery-swiper-slide'>
              <img src={slide_image_4} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide className='gallery-swiper-slide'>
              <img src={slide_image_5} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide className='gallery-swiper-slide'>
              <img src={slide_image_6} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide className='gallery-swiper-slide'>
              <img src={slide_image_7} alt="slide_image" />
            </SwiperSlide>
    
            <div className="gallery-slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="gallery-swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      );
};

export default Gallery;
