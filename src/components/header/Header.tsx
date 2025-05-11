import React from "react";
import { Link } from "react-router-dom";
import logo from "../../UI/images/logo.svg";
import styles from "./Header.module.css";
import { Container } from "../../UI/Container";

export const Header = () => {
  return (
    <div className={styles.header}>
      <Container containerType="body">
        <header className={styles.header__wrap}>
          <Link to="/" className={styles.logo__container}>
            <img src={logo} alt="logo" className={styles.logo__img} />
            <div className={styles.vertical_line}></div>
            <span className={styles.logo__text}>
              Официальный дилер Максимум
            </span>
          </Link>
        </header>
      </Container>
    </div>
  );
};
