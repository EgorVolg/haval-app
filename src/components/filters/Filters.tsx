import React from "react"; 
import styles from "./Filters.module.css";
import { Button } from "../../UI/Button";

const brands = [
  "Chery",
  "Haval",
  "Geely",
  "Exeed",
  "Omoda",
  "Changan",
  "Jaecoo",
];

const engineVolumes = ["1.5", "1.6", "2.0"];

const complectations = [
  "Action",
  "Techno",
  "Travel",
  "Luxury",
  "Cosmo",
  "Trek",
  "Comfort",
  "Family",
  "Prestige",
  "Elite",
  "Dreamline",
  "Speedline",
  "Ultimate",
];

export const Filters = () => {
  return (
    <nav className={styles.filters__group_sidebar}>
      <aside className={styles.filter__group}>
        <p className={styles.filters__title}>Бренд</p>
        <div className={styles.filter__buttons}>
          {brands.map((brand) => (
            <div className={styles.filter__item} key={brand}>
              <Button>{brand}</Button>
            </div>
          ))}
        </div>
      </aside>

      <aside className={styles.filter__group}>
        <p className={styles.filters__title}>Объем двигателя</p>
        <div className={styles.filter__buttons}>
          {engineVolumes.map((volume) => (
            <div className={styles.filter__item} key={volume}>
              <Button>{volume}</Button>
            </div>
          ))}
        </div>
      </aside>

      <aside className={styles.filter__group}>
        <p className={styles.filters__title}>Комплектация</p>
        <div className={styles.filter__buttons}>
          {complectations.map((complectation) => (
            <div className={styles.filter__item} key={complectation}>
              <Button>{complectation}</Button>
            </div>
          ))}
        </div>
      </aside>

      <div className={styles.filter__reset}>
        <Button>Сбросить фильтр</Button>
      </div>
    </nav>
  );
};