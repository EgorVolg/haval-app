import { createSlice } from "@reduxjs/toolkit";

export const carsSlice = createSlice({
  name: "cars",
  initialState: [],
  reducers: {
    getCars: (state, action) => {
      state = action.payload.cars;
      return state;
    },
    default: () => console.log("error"),
  },
});

export const { getCars } = carsSlice.actions;

export default carsSlice.reducer;
