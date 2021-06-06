import axios from 'axios';

import {
  getAllHabitsRequest,
  habitAddRequest,
  getAllHabitsSuccess,
  habitAddSuccess,
  getAllHabitsError,
  habitAddError,
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
export const addHabit = habitData => async dispatch => {
  dispatch(habitAddRequest());
  console.log(`Add Habit`, habitData);
  const x = {
    id: 0,
    createdAt: '2021-06-06T03:49:47.204Z',
    updatedAt: '2021-06-06T03:49:47.204Z',
    name: 'string',
    motivation: 'string',
    color: '#ffffff',
    remindMe: true,
    repeat: 0,
    ownerId: 0,
  };
  try {
    const response = await axios.post('/habits', x);
    const newHabit = response.data;
    console.log('response', newHabit);
    dispatch(habitAddSuccess(newHabit));
  } catch (error) {
    dispatch(habitAddError(error.message));
  }
};
export const getAllHAbits = () => async dispatch => {
  dispatch(getAllHabitsRequest());
  try {
    const response = await axios.get('/habits');
    const data = response.data;
    dispatch(getAllHabitsSuccess(data));
  } catch (err) {
    console.log(err.message);
    dispatch(getAllHabitsError(err.message));
  }
};

// export default { addHabit };
