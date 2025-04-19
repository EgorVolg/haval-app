import React from "react";
import { Filters } from "../filters/Filters";
import { CarList } from "../car-list/CarList";
import styles from "./HomePage.module.css";
import { useSelector } from "react-redux";
import { Header } from "../header/Header";
import { Container } from "../../UI/Container";

export const HomePage = () => {
  const car = useSelector((state: { car: { brand: string } }) => state.car);

  return (
    <div className={styles.app}>
      <Container containerType="header__container">
        <Header />
      </Container>

      <Container containerType="main__container">
        <main className={styles.main}>
          <p className={styles.main__title}>Автомобили {car.brand} в СПб</p>
          <div className={styles.main__inner}>
            <Filters />
            <CarList />
          </div>
        </main>
      </Container>
    </div>
  );
};
