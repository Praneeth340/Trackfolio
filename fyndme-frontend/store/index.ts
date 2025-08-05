import { configureStore } from "@reduxjs/toolkit";
import csvReducer from "./csvSlice"; // Make sure this is named correctly

const store = configureStore({
  reducer: {
    csv: csvReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
