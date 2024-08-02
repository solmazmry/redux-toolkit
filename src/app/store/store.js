import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../../features/counter/counterSlice";
import todosReducer from "../../features/todos/TodoSlice";
import formReducer from "../../features/form/formSlice";
import productReducer from "../../features/products/productSlice";
import darkModeReducer from "../../features/darkMode/darkModeSlice"
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    form: formReducer,
    products: productReducer,
    darkMode: darkModeReducer,

  },
});
