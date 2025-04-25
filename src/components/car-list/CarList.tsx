import React from "react";
import styles from "./CarList.module.css";
import { useGetCarListQuery } from "../../api/makeRequest";
import { CarCard } from "../car-card/CarCard";
import { useSelector } from "react-redux"; 

export type CarDetails = {
  _id: string;
  Color: string;
  Complectation: string;
  DriveType: string;
  EngineSize: number;
  FuelType: string;
  Power: number;
  Transmission: string;
  Year: number;
  bodyType: string;
  brandName: string;
  car_id: string;
  interiorColor: string;
  modelName: string;
  modelYear: number;
  modificationName: string;
  photos: {
    imgs: string[];
    wrap: boolean;
  };
  price: number;
  steeringWheelSide: string;
  storageAdress: string;
  transmissionRu: string;
  vin: string;
};

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
