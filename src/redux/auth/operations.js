import axios from 'axios';
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
} from './actions';

// !!! URL
axios.defaults.baseURL = 'https://goiteens-habits.herokuapp.com/api/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

export const register = credentials => async dispatch => {
  dispatch(registerRequest());
  console.log(credentials);
  try {
    const response = axios.post('/auth/register', credentials);
    const data = response.data;
    token.set(data.token);
    dispatch(registerSuccess(data));
  } catch (error) {
    dispatch(registerError(error.message));
  }
};

export const login = credentials => async dispatch => {
  dispatch(loginRequest());
  try {
    const response = axios.post('/auth/login', credentials);
    const data = response.data;
    token.set(data.token);
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

export const logout = () => async dispatch => {
  dispatch(logoutRequest());
  try {
    token.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};
