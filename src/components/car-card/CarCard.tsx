import React from "react";
import styles from "./CarCard.module.css";
import { useNavigate } from "react-router-dom";

export const CarCard = () => {
  const navigate = useNavigate();

const handleClick = () => {
  navigate(`/car/1`);
}

  return (
    <div className={styles.card}>
      <img
        className={styles.car__img}
        src="https://photobank.maximum.expert/photo/fotobankN/664dc5f0204d55001d866bd6.jpg"
        alt="car"
      />
      <div className={styles.car__info}>
        <p className={styles.car__title}>Chery Tiggo 4 PRO Action MT</p>
        <div className={styles.car__description}>1,5 / 113 Л.С. / MT5</div>
      </div>
      <button className={styles.card__btn} onClick={handleClick}>
        Подробнее
      </button>
    </div>
  );
};
