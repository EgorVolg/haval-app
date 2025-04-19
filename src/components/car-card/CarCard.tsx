import React from "react";
import styles from "./CarCard.module.css";
import { useNavigate } from "react-router-dom";

export const CarCard = ({ car }: { car: any }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/car/1`);
  };

  return (
    <div className={styles.card}>
      <img
        className={styles.car__img}
        src={car.photos.imgs[0].url}
        alt="car"
      />
      <div className={styles.car__info}>
        <p className={styles.car__title}>{car.brandName} {car.modelName}</p>
        <div className={styles.car__description}>
          {car.EngineSize} / {car.Power} Л.С. / {car.Transmission}
        </div>
      </div>
      
      <button className={styles.card__btn} onClick={handleClick}>
        Подробнее
      </button>
    </div>
  );
};
