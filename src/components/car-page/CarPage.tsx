import React from "react";
import styles from "./CarPage.module.css"; 
import { Container } from "../../UI/Container";
import { TitleBlock } from "../../UI/TitleBlock";

export const CarPage = () => {
  return (
    <>
      <Container containerType="body">
        <TitleBlock />

        <div className={styles.main__inner}>
          <div>CarPage</div>
        </div>
      </Container>
    </>
  );
};
