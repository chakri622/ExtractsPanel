import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { serversApi } from "../features/serversApi";

export const store = configureStore({
  reducer: {
    [serversApi.reducerPath]: serversApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(serversApi.middleware),
});

export default store;
