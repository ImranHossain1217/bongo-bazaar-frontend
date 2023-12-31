import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const categoryService = createApi({
  reducerPath: "category",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
  }),
  endpoints: (builder) => {
    return {
      createCategory: builder.mutation({
        query: (name) => {
          return {
            url: "/create-category",
            method: "POST",
            body: name,
          };
        },
      }),
    };
  },
});

export const { useCreateCategoryMutation } = categoryService;

export default categoryService;
