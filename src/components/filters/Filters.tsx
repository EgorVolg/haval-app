import React from "react";
import styles from "./Filters.module.css";
import { Button } from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";

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
  const dispatch = useDispatch();

  const car = useSelector(
    (state: {
      car: {
        brand: string;
        details: { complectation: string; engineVolume: string };
      };
    }) => state.car
  );

  const onSelectBrand = ({ brand }: { brand: string }) => {
    dispatch({ type: "car/getCars", payload: brand });
  };

  const onFilter = ({
    complectation,
    volume,
  }: {
    complectation?: string;
    volume?: string;
  }) => {
    dispatch({
      type: "car/filteredByDetails",
      payload: { complectation, volume },
    });
  };

  return (
    <nav className={styles.filters__group_sidebar}>
      <aside className={styles.filter__group}>
        <p className={styles.filters__title}>Бренд</p>
        <div className={styles.filter__buttons}>
          {brands.map((brand) => (
            <div
              className={`${styles.filter__button} ${
                brand === car.brand ? styles.active : ""
              }`}
              key={brand}
              onClick={() => onSelectBrand({ brand })}
            >
              <Button>{brand}</Button>
            </div>
          ))}
        </div>
      </aside>

      <aside className={styles.filter__group}>
        <p className={styles.filters__title}>Объем двигателя</p>
        <div className={styles.filter__buttons}>
          {engineVolumes.map((volume) => (
            <div
              className={`${
                volume === car.details.engineVolume && styles.active
              } `}
              key={volume}
              onClick={() => onFilter({ volume })}
            >
              <Button>{volume}</Button>
            </div>
          ))}
        </div>
      </aside>

      <aside className={styles.filter__group}>
        <p className={styles.filters__title}>Комплектация</p>
        <div className={styles.filter__buttons}>
          {complectations.map((complectation) => (
            <div
              className={`${
                complectation === car.details.complectation && styles.active
              } `}
              key={complectation}
              onClick={() => onFilter({ complectation })}
            >
              <Button>{complectation}</Button>
            </div>
          ))}
        </div>
      </aside>

      <div
        className={styles.filter__reset}
        onClick={() => dispatch({ type: "car/reset" })}
      >
        <Button>Сбросить фильтр</Button>
      </div>
    </nav>
  );
};
