import React, { useState, useEffect, useRef } from "react";
import styles from "./Carousel.module.css";

interface CarouselProps {
  images: string[];
  autoPlay?: boolean;
  interval?: number;
  INDICATORS_COUNT?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  autoPlay = true,
  interval = 5000,
  INDICATORS_COUNT = 4,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [startX, setStartX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Определяем мобильное устройство
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Обработчики для свайпа (оптимизированы для мобильных)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartX.current || !carouselRef.current) return;

    const touchX = e.touches[0].clientX;
    const diff = touchStartX.current - touchX;

    if (Math.abs(diff) > 30) { // Более чувствительный свайп на мобильных
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
    if (isMobile) return; // Отключаем на мобильных
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !startX || !carouselRef.current) return;

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

  // Рассчитываем активный индикатор для мобильных
  const getActiveIndicator = () => {
    if (images.length <= INDICATORS_COUNT) return currentIndex;
    return Math.floor((currentIndex / images.length) * INDICATORS_COUNT);
  };

  return (
    <div
      className={styles.carousel}
      ref={carouselRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={isMobile ? undefined : handleMouseDown}
      onMouseMove={isMobile ? undefined : handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        className={styles.carousel_inner}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className={styles.carousel_slide}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className={styles.carousel_image}
              draggable="false"
              loading="lazy" // Ленивая загрузка для мобильных
            />
          </div>
        ))}
      </div>

      {/* Индикаторы */}
      <div className={styles.carousel_indicators}>
        {[...Array(Math.min(INDICATORS_COUNT, images.length))].map((_, index) => (
          <button
            key={index}
            className={`${styles.carousel_indicator} ${
              index === getActiveIndicator() ? styles.active : ""
            }`}
            onClick={() => goToSlide(
              images.length <= INDICATORS_COUNT 
                ? index 
                : Math.floor((index / INDICATORS_COUNT) * images.length)
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;