import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  registerSuccess,
  loginSuccess,
  logoutSuccess,
  registerError,
  loginError,
  logoutError,
} from "./actions";

const initState = {
  phoneNumber: "",
  password: "",
  firstName: "",
  lastName: "",
  height: 0,
  weight: 0,
  birthday: "",
};

const userReducer = createReducer(initState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => initState,
});

const tokenReducer = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});

const errorReducer = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [logoutError]: (_, { payload }) => payload,
});

export default combineReducers({
  user: userReducer,
  token: tokenReducer,
  error: errorReducer,
});
