import React from "react";
import styles from "./TitleBlock.module.css";
import { useSelector } from "react-redux";

export const TitleBlock = () => {
  const car = useSelector((state: { car: { brand: string } }) => state.car);

  return (
    <div className={styles.title__block}>
      <p className={styles.main__title}>Автомобили {car.brand} в СПб</p>
      <div className={styles.vin}>vin {" 123456789123"}</div>
    </div>
  );
};
