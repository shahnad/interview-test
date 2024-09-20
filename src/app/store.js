import { configureStore } from '@reduxjs/toolkit'; 
import authenticationReducer from '../features/authentication/authSlice';
import  countriesSlice  from '../features/countries/countrySlice';

export const store = configureStore({
  reducer: { 
    auth:authenticationReducer ,
    countries:countriesSlice
  },
});
