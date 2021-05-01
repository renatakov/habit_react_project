import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/auth/reducers";
console.log(userReducer);

const store = configureStore({
  reducer: userReducer,
});

export default store;
