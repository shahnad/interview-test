import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    countries: [],
    loader: false
};

export const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        fetchCountriesBegins: (state,) => {
            return { ...state, loader: true }
        },
        fetchCountriesSuccess: (state, action) => {
            return { ...state, loader: false, countries: action?.payload }
        },
        fetchCountriesFails: (state,) => {
            return { ...state, loader: false }
        }
    }
});


export const { fetchCountriesBegins, fetchCountriesSuccess, fetchCountriesFails } = countriesSlice.actions;

export default countriesSlice.reducer;