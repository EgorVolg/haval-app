import React from "react";
import styles from "./CarCard.module.css";

export const CarCard = () => {
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
      <button className={styles.card__btn}>Подробнее</button>
    </div>
  );
};
