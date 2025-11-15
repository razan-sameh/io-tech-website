// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import menuReducer from "./menuSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
        menu: menuReducer,

  },
});

// Type helpers
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
