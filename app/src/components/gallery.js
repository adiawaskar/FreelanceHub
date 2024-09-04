import React from 'react';
import "./gallery.css";

 // Assuming the image is in the 'assets' folder

const Gallery = () => {
    const images = [
        { id: 1, src: require('../assets/img9.jpeg'), alt: 'Image 1' },
        { id: 2, src: require('../assets/img10.jpeg'), alt: 'Image 2' },
        { id: 3, src: require('../assets/img11.jpeg'), alt: 'Image 3' },
        { id: 4, src: require('../assets/img12.jpg'), alt: 'Image 4' },
        { id: 5, src: require('../assets/img13.jpg'), alt: 'Image 5' },
        { id: 6, src: require('../assets/img14.jpg'), alt: 'Image 6' },
        { id: 7, src: require('../assets/img15.jpg'), alt: 'Image 7' },
        { id: 8, src: require('../assets/img16.jpg'), alt: 'Image 8' },

      ];

  return (
    <div>
        <div className='gallery-text'>Made on FreelanceHub.  </div>
    <div className="gallery-grid">

      {images.map((image) => (
        <div key={image.id} className="gallery-item">
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
    </div>
    
  );
};

export default Gallery;