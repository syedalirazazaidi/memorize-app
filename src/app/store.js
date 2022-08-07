import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import memoryReducer from "../features/memorys/memorySlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    memorys: memoryReducer,
  },
});
