import React from "react";
import styles from "./TitleBlock.module.css";
import { useSelector } from "react-redux";

export const TitleBlock = ({ vin }: { vin?: string | number }) => {
  const car = useSelector((state: { car: { brand: string } }) => state.car);

  return (
    <div className={styles.title__block}>
      <p className={styles.title}>Автомобили {car.brand} в СПб</p>
      {vin && <div className={styles.vin}>vin {vin}</div>}
    </div>
  );
};
