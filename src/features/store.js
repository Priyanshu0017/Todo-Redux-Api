import { configureStore } from "@reduxjs/toolkit";
import todoreducer from "./todos/todoSlice";

const store = configureStore({
  reducer: {
    todos: todoreducer,
  },
});
export default store;
