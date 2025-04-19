import React from "react";
import styles from "./CarPage.module.css";
import { Header } from "../header/Header";
import { Container } from "../../UI/Container";

export const CarPage = () => {
  return (
    <>
      <Container containerType="header__container">
        <Header />
      </Container>
    </>
  );
};
