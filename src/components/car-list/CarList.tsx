import React from "react";
import styles from "./CarList.module.css";
import { useGetCarListQuery } from "../../api/makeRequest";
import { CarCard } from "../car-card/CarCard";
import { useSelector } from "react-redux";
import { CarDetails } from "../types/types";

export const CarList = () => {
  const filterParams = useSelector(
    (state: {
      car: {
        brand: string;
        details: { complectation: string; engineVolume: string };
      };
    }) => state.car
  );

  const { isLoading, data } = useGetCarListQuery(filterParams.brand);

  const cars = data
    ?.filter(
      (car: CarDetails) =>
        !filterParams.details.complectation ||
        car.Complectation === filterParams.details.complectation
    )
    .filter(
      (car: CarDetails) =>
        !filterParams.details.engineVolume ||
        car.EngineSize === Number(filterParams.details.engineVolume)
    );

  return (
    <div className={styles.list}>
     {cars?.length === 0 && <div>Ничего не найдено</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        cars.map((car: CarDetails, index: number) => (
          <CarCard key={index} car={car} />
        ))
      )}
    </div>
  );
};
