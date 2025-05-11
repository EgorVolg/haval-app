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
  photos: photos;
  price: number;
  steeringWheelSide: string;
  storageAdress: string;
  transmissionRu: string;
  vin: string;
};

type photos = {
  imgs: [
    {
      url: string;
    }
  ];
  wrap: boolean;
};
