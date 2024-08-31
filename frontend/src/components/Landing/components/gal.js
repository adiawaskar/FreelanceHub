import React from 'react';
import './gal.css';  // Import the gal.css file

const images = [
    { src: require('../assets/img1.png'), alt: 'Image 1' },
    { src: require('../assets/img2.png'), alt: 'Image 2' },
    { src: require('../assets/img3.png'), alt: 'Image 3', tall: true },
    { src: require('../assets/img4.png'), alt: 'Image 4' },
    { src: require('../assets/img5.png'), alt: 'Image 5' },
    { src: require('../assets/img6.png'), alt: 'Image 6', tall: true },
    { src: require('../assets/img1.png'), alt: 'Image 7' },
    { src: require('../assets/img2.png'), alt: 'Image 8' },
    { src: require('../assets/img3.png'), alt: 'Image 9' },
    { src: require('../assets/img4.png'), alt: 'Image 10' },
];

const Gal = () => {
    return (
        <div className="gallery">
            {images.map((image, index) => (
                <div key={index} className={`image-container ${image.tall ? 'tall' : ''}`}>
                    <img src={image.src} alt={image.alt} />
                </div>
            ))}
        </div>
    );
};

export default Gal;
