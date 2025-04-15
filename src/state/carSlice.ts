import { createSlice } from "@reduxjs/toolkit";

export const carsSlice = createSlice({
  name: "cars",
  initialState: {
    brand: "Chery",
  },
  reducers: {
    getCars: (state, action) => {
      state.brand = action.payload;
    },

    default: () => console.log("error"),
  },
});

export const { getCars } = carsSlice.actions;

export default carsSlice.reducer;
