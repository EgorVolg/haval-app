import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "../api/makeRequest";
import { carsSlice } from "./carSlice";

const reducers = combineReducers({
  cars: carsSlice.reducer,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
