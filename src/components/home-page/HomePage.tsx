import React from "react";
import { Filters } from "../filters/Filters";
import { CarList } from "../car-list/CarList";
import styles from "./HomePage.module.css";
import { useSelector } from "react-redux"; 

export const HomePage = () => {
  const car = useSelector((state: { car: { brand: string } }) => state.car);

  return (
    <div className={styles.app}> 
        <main className={styles.main}>
          <div className={styles.main__inner}>
            <Filters />
            <CarList />
          </div>
        </main> 
    </div>
  );
};
