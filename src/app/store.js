import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import memoryReducer from "../features/memorys/memorySlice";
import authReducer from "../features/auth/authSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    memorys: memoryReducer,
    user: authReducer,
  },
});
