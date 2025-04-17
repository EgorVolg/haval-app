import { createSlice } from "@reduxjs/toolkit";

export const carsSlice = createSlice({
  name: "car",
  initialState: {
    brand: "Chery",
    details: {
      engineVolume: "",
      complectation: "",
    },
  },
  reducers: {
    getCars: (state, action) => {
      state.brand = action.payload;
    },

    filteredByDetails: (state, action) => {
      action.payload.volume &&
        (state.details.engineVolume = action.payload.volume);
      action.payload.complectation &&
        (state.details.complectation = action.payload.complectation);
    },

    reset: (state, action) => { 
      state.details.engineVolume = "";
      state.details.complectation = "";
    },

    default: () => console.log("error"),
  },
});

export const { getCars, filteredByDetails } = carsSlice.actions;

export default carsSlice.reducer;
