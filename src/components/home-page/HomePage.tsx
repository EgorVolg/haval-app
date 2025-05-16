import React from "react";
import { Filters } from "../filters/Filters";
import { CarList } from "../car-list/CarList";
import styles from "./HomePage.module.css";
import { Container } from "../../UI/Container";
import { TitleBlock } from "../../UI/TitleBlock";

export const HomePage = () => {
  return (
    <>
      <TitleBlock />
      <Container>
        <div className={styles.app}>
          <main className={styles.main}>
            <div className={styles.main__inner}>
              <Filters />
              <CarList />
            </div>
          </main>
        </div>
      </Container>
    </>
  );
};
