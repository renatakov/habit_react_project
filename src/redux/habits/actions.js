import { createAction } from '@reduxjs/toolkit';

// создаем экшены для привычек

export const habitUpdateRequest = createAction('HABITUPDATE_REQUEST');
export const habitAddRequest = createAction('HABITADD_REQUEST');
export const habitDeleteRequest = createAction('HABITDELETE_REQUEST');
export const getAllHabitsRequest = createAction('GETALLHABITS_REQUEST');

export const habitUpdateSuccess = createAction('HABITUPDATE_SUCCESS');
export const habitAddSuccess = createAction('HABITADD_SUCCESS');
export const habitDeleteSuccess = createAction('HABITDELETE_SUCCESS');
export const getAllHabitsSuccess = createAction('GETALLHABITS_SUCCESS');

export const habitUpdateError = createAction('HABITUPDATE_ERROR');
export const habitAddError = createAction('HABITADD_ERROR');
export const habitDeleteError = createAction('HABITDELETE_ERROR');
export const getAllHabitsError = createAction('GETALLHABITS_ERROR');


