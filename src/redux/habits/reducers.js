import { createReducer, combineReducers } from '@reduxjs/toolkit';
// habitUpdateRequest,
// habitAddRequest,
// habitDeleteRequest,
// getAllHabitsRequest,
import {
  habitUpdateSuccess,
  habitUpdateError,
  habitAddSuccess,
  habitAddError,
  habitDeleteSuccess,
  habitDeleteError,
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
  [habitAddSuccess]: (_, action) => action.payload,
  [habitUpdateSuccess]: (_, action) => action.payload,
  [habitDeleteSuccess]: () => initState,
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
});

const allHabits = createReducer(habitsState, {
  [getAllHabitsSuccess]: (_, action) => {
    return action.payload;
  },
  [habitAddSuccess]: (habitsState, action) => {
    return [...habitsState, action.payload];
  },
  [habitDeleteSuccess]: (habitsState, action) => {
    return habitsState.filter(habit => {
      return habit.id !== action.payload;
    });
  },
  [habitUpdateSuccess]: (habitsState, action) => {
    return habitsState.map(habit => {
      return habit.id === action.payload.id ? action.payload : habit;
    });
  },
});

const state = [];
const habIts = createReducer(state, {
  [getAllHabitsSuccess]: (_, { payload }) => payload,
  [habitAddSuccess]: (state, { payload }) => [...state, payload],
});

export default combineReducers({
  // habit,
  // allHabits,
  habIts,
  habitError,
});
