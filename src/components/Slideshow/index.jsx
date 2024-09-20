import React, { useState } from 'react';
import '../../styles/slideshow.css'; 

const Slideshow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Индекс текущего изображения

  // 
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  // 
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshow">
      {/* Картинка текущего слайда */}
      <img src={pictures[currentIndex]} alt="Slideshow" className="slide" />

      {/* Стрелка влево */}
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>

      {/* Стрелка вправо */}
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>

      {/* Индикатор текущего слайда */}
      <div className="indicator">
        {currentIndex + 1} / {pictures.length}
      </div>
    </div>
  );
};

export default Slideshow;
