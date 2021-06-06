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
  updateUserRequest,
  updateUserSuccess,
  updateUserError,
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
  console.log(credentials);
  dispatch(registerRequest());
  try {
    const response = await axios.post('/auth/register', credentials);
    const data = response.data;
    console.log(data);
    token.set(data.token);
    dispatch(registerSuccess(data));
  } catch (error) {
    dispatch(registerError(error.message));
  }
};

export const login = credentials => async dispatch => {
  dispatch(loginRequest());
  try {
    const response = await axios.post('/auth/login', credentials);
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

export const updateUser = credentials => async dispatch => {
  dispatch(updateUserRequest());
  try {
    const response = await axios.patch('./', credentials);
    const data = response.data;
    dispatch(updateUserSuccess(data));
  } catch (error) {
    dispatch(error.message);
  }
};

// export default { register, login, logout };
