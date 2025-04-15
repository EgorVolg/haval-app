import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "../api/makeRequest";
import { getCars } from "./carSlice";

const reducers = combineReducers({
  cars: getCars,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
