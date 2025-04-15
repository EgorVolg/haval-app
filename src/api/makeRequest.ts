import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "https://test2.maximum-haval.ru/public/test-task/v1/brand";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["cars"],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),

  endpoints: (builder) => ({
    getCarList: builder.query({
      query: (brand) => `/${brand}`,
      providesTags: [{ type: "cars" }],
    }),
  }),
});

export const { useGetCarListQuery } = api;
