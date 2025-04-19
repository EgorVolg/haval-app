import React from "react";
import { Link } from "react-router-dom";
import logo from "../../UI/images/logo.svg";
import styles from "./Header.module.css"; 

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo__container}>
        <img src={logo} alt="logo" className={styles.logo__img} />
        <div className={styles.vertical_line}></div>
        <span className={styles.logo__text}>Официальный дилер Максимум</span>
      </Link>
    </header>
  );
};
