import { createSlice } from '@reduxjs/toolkit';

const user = JSON.parse(localStorage.getItem('user') || "null")

const initialState = {
    user: user || null,
    loader: false
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            return { ...state, user: action?.payload }
        },
        logoutSuccess: (state) => {
            return { ...state, user: null, }
        },
    }
});


export const { loginSuccess, logoutSuccess } = authSlice.actions;

export default authSlice.reducer;