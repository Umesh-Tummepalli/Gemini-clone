import { configureStore } from "@reduxjs/toolkit";
import slice from "../slices/gemSlice";
const store = configureStore({
  reducer: {
    gemini: slice.reducer,
  },
});
export default store;
