// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});

// Type helpers
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
