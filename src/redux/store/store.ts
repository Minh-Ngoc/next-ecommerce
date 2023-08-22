import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice, loadingSlice, errorSlice } from "../slices";

const rootReducer = combineReducers({
      [userSlice.name]: userSlice.reducer,
      [loadingSlice.name]: loadingSlice.reducer,
      [errorSlice.name]: errorSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
