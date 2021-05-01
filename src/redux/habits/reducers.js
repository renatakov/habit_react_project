import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  habitUpdateRequest,
  habitUpdateSuccess,
  habitUpdateError,
  habitAddRequest,
  habitAddSuccess,
  habitAddError,
  habitDeleteRequest,
  habitDeleteSuccess,
  habitDeleteError,
  getAllHabitsRequest,
  getAllHabitsSuccess,
  getAllHabitsError,
} from './actions';

const initState = {
  id: '',
  description: '',
  repeat: '',
  color: '',
  remind: false,
};

const habit = createReducer(initState, {
  [habitAddSuccess]: (_, action) => {
    return action.payload;
  },
  [habitUpdateSuccess]: (_, action) => {
    return action.payload;
  },
  [habitDeleteSuccess]: () => {
    return initState;
  },

});

const habitsState = [];

const habitError = createReducer(null, {
  [getAllHabitsError]: (_, action) => {
    return action.payload;
  },
  [habitAddError]: (_, action) => {
    return action.payload;
  },
  [habitDeleteError]: (_, action) => {
    return action.payload;
  },
  [habitUpdateError]: (_, action) => {
    return action.payload;
  },
})

const allHabits = createReducer(habitsState, {
  [getAllHabitsSuccess]: (_, action) => {
    return action.payload;
  },
  [habitAddSuccess]: (habitsState, action) => {
    return [...habitsState, action.payload];
  },
  [habitDeleteSuccess]: (habitsState, action) => {
    return habitsState.filter(habit => {
      return habit.id !== action.payload
    });
  },
  [habitUpdateSuccess]: (habitsState, action) => {
    return habitsState.map((habit) => {
      return habit.id === action.payload.id ? action.payload : habit;
    })
  }
});

export default combineReducers({
  habit,
  allHabits,
  habitError,
});
