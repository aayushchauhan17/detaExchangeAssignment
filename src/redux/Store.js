import { configureStore } from "@reduxjs/toolkit";
import memberReducer from "./memberReducer";

const store = configureStore({
  reducer: {
    memberReducer: memberReducer,
  },
});

export default store;
