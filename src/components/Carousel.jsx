import { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://img-c.udemycdn.com/notices/web_carousel_slide/image/10ca89f6-811b-400e-983b-32c5cd76725a.jpg",
    "https://plus.unsplash.com/premium_photo-1706548332644-2600407c133d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "../src/assets/caro4.jpg",
    "../src/assets/caro1.png",
    "../src/assets/caro2.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div>
      <div className="carousel w-full h-[400px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            id={`slide${index + 1}`}
            className={`carousel-item relative w-full ${currentSlide === index ? 'block' : 'hidden'}`}
          >
            <img src={slide} className="w-full h-[400px]" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href={`#slide${(index - 1 + slides.length) % slides.length + 1}`} onClick={handlePrev} className="btn btn-circle">❮</a>
              <a href={`#slide${(index + 1) % slides.length + 1}`} onClick={handleNext} className="btn btn-circle">❯</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
