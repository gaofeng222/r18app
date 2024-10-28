import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CounterReducer";
import TaskOkReucer from "./TaskOkReucer.js";
export const store = configureStore({
  reducer: {
    count: CounterReducer,
    task: TaskOkReucer,
    // other reducers
  },
});

export default store;
