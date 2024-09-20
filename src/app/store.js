import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authenticationReducer from '../features/authentication/authSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth:authenticationReducer 
  },
});
