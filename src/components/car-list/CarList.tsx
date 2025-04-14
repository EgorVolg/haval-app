import React from "react";
import styles from "./CarList.module.css";
import { CarCard } from "../car-card/CarCard";

export const CarList = () => {
  return (
    <div className={styles.list}>
      {[...Array(10)].map((_, index) => (
        <CarCard key={index} />
      ))}
    </div>
  );
};
