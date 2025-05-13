import React, { useState, useEffect, useRef } from "react";
import "./Carousel.css";

interface CarouselProps {
  images: string[];
  autoPlay?: boolean;
  interval?: number;
  INDICATORS_COUNT: number;
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  autoPlay = true,
  interval = 5000,
  INDICATORS_COUNT = 4,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Автопрокрутка
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (autoPlay && !isDragging) {
      timer = setTimeout(() => {
        goToNext();
      }, interval);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [currentIndex, autoPlay, interval, isDragging]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === INDICATORS_COUNT - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? INDICATORS_COUNT - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Обработчики для свайпа
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartX.current || !carouselRef.current) return;

    const touchX = e.touches[0].clientX;
    const diff = touchStartX.current - touchX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
      touchStartX.current = null;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Для мыши
  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!startX || !carouselRef.current) return;

    const mouseX = e.clientX;
    const diff = startX - mouseX;

    if (Math.abs(diff) > 100) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
      setStartX(null);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="carousel"
      ref={carouselRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="carousel-slide">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
              draggable="false"
            />
          </div>
        ))}
      </div>

      {/* Индикаторы */}
      <div className="carousel-indicators">
        {[...Array(INDICATORS_COUNT)].map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
