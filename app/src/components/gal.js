// import React from 'react';
// import './gal.css';
// import img1 from 'D:/SIH/Hexadecimals/app/src/assets/img1.png';
// import img2 from 'D:/SIH/sihme/src/assets/img2.png';
// import img3 from 'D:/SIH/sihme/src/assets/img3.png';
// import img4 from 'D:/SIH/sihme/src/assets/img4.png';
// import img5 from 'D:/SIH/sihme/src/assets/img5.png';
// import img6 from 'D:/SIH/sihme/src/assets/img6.png';

// const images = [img1, img2, img3, img4, img5, img6];

// // Repeat the images to fill the grid
// const repeatedImages = [...images, ...images, ...images, ...images];

// const Gal = () => {
//     return (
//         <div className="gallery">
//             {repeatedImages.map((src, index) => (
//                 <div
//                     key={index}
//                     className={`image-container ${[2, 5, 10, 11, 14, 15, 17, 18, 19, 21].includes(index) ? 'tall' : ''}`}
//                 >
//                     <img src={src} alt={`img-${index + 1}`} />
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Gal;
