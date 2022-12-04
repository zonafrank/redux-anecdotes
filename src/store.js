import { configureStore } from '@reduxjs/toolkit';
import anecdoteReducer from './reducers/anecdotesSlice';
import notificationReducer from './reducers/notificationSlice';
import filterReducer from "./reducers/filterSlice";

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    notification: notificationReducer,
    filter: filterReducer
  }
})

export default store;