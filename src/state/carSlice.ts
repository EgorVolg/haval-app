import { createSlice } from "@reduxjs/toolkit";

export const carsSlice = createSlice({
  name: "car",
  initialState: {
    brand: "Chery",
    engineVolume: "",
    complectation: "",
  },
  reducers: {
    getCars: (state, action) => {
      state.brand = action.payload;
    },
    getCarsByVolume: (state, action) => {
      state.engineVolume = action.payload;
    },
    getCarsByComplectation: (state, action) => {
      state.complectation = action.payload;
    },

    default: () => console.log("error"),
  },
});

export const { getCars, getCarsByVolume, getCarsByComplectation } = carsSlice.actions;

export default carsSlice.reducer;
