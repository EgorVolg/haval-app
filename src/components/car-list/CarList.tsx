import React from "react";
import styles from "./CarList.module.css";
import { useGetCarListQuery } from "../../api/makeRequest";
import { CarCard } from "../car-card/CarCard";

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
  const { isLoading, data } = useGetCarListQuery({});

  return (
    <div className={styles.list}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data.map((car: CarDetails, index: number) => <CarCard key={index} car={car} />)
      )}
    </div>
  );
};
