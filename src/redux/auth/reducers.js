import {combineReducers, createReducer} from '@reduxjs/toolkit'

const initialState = {
    firstName: null,
    lastName: null,
    phone: null
}

const user = createReducer(initialState, {})

export default combineReducers({user})
