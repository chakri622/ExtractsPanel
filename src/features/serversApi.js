import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const serversApi = createApi({
  reducerPath: "serversApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
  }),
  endpoints: (builder) => ({
    servers: builder.query({
      query: () => "/resources",
    }),
  }),
});

export const { useServersQuery } = serversApi;
