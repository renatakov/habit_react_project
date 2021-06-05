import axios from 'axios';

import { habitAddRequest, habitAddSuccess, habitAddError } from './actions';

const addHabit = habitData => async dispatch => {
  dispatch(habitAddRequest());

  try {
    const response = await axios.post('/habits', habitData);
    const newHabit = response.data;

    dispatch(habitAddSuccess(newHabit));
  } catch (error) {
    dispatch(habitAddError(error.message));
  }
};

export default { addHabit };