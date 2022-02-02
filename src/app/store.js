import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { serversApi } from "../features/serversApi";
import { studyApi } from "../features/studyApi";

export const store = configureStore({
  reducer: {
    [serversApi.reducerPath]: serversApi.reducer,
    [studyApi.reducerPath]: studyApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(serversApi.middleware).concat(studyApi.middleware)
});

export default store;
