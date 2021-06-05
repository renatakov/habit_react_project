import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/reducers";
import habitsReducer from './habits/reducers';

const store = configureStore({
  reducer: {
    auth: authReducer,
    habits: habitsReducer,
  },
});

export default { store };