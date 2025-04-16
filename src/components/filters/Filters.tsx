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
  const selectedBrand = useSelector(
    (state: { car: { brand: string } }) => state.car.brand
  );

  const selectedVolume = useSelector(
    (state: {
      car: { brand: string; engineVolume: string; complectation: string };
    }) => state.car.engineVolume
  );
  const selectedComplectation = useSelector(
    (state: {
      car: { brand: string; engineVolume: string; complectation: string };
    }) => state.car.complectation
  );
  const car = useSelector(
    (state: {
      car: { brand: string; engineVolume: string; complectation: string };
    }) => state.car
  );
  console.log(car);

  const onSelectBrand = ({ brand }: { brand: string }) => {
    dispatch({ type: "car/getCars", payload: brand });
  };

  const onSelectVolume = ({ volume }: { volume: string }) => {
    dispatch({
      type: "car/getCarsByVolume",
      payload: volume,
    });
  };

  const onSelectComplectation = ({
    complectation,
  }: {
    complectation: string;
  }) => {
    dispatch({
      type: "car/getCarsByComplectation",
      payload: complectation,
    });
  };

  return (
    <nav className={styles.filters__group_sidebar}>
      <aside className={styles.filter__group}>
        <p className={styles.filters__title}>Бренд</p>
        <div className={styles.filter__buttons}>
          {brands.map((brand) => (
            <div
              className={`${brand === selectedBrand && styles.active} `}
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
              className={`${volume === selectedVolume && styles.active} `}
              key={volume}
              onClick={() => onSelectVolume({ volume })}
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
                complectation === selectedComplectation && styles.active
              } `}
              key={complectation}
              onClick={() => onSelectComplectation({ complectation })}
            >
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
