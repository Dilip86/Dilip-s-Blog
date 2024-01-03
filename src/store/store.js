import { configureStore } from "@reduxjs/toolkit";
import authSclice from "./authSlice";
const store = configureStore({
  reducer: {
    auth: authSclice,
  },
});

export default store;
