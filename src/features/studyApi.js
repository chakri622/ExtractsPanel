import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const studyApi = createApi({
  reducerPath: "studyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
  }),
  endpoints: (builder) => ({
    studies: builder.query({
      query: () => "/study",
    }),
  }),
});

export const { useStudyQuery } = studyApi;
