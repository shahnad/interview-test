import { createSlice } from '@reduxjs/toolkit';

const user = JSON.parse(localStorage.getItem('user') || "{}")

const initialState = {
    user: user || null,
    loader: false
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            return { ...state, user: action?.payload, loader: false }
        }
    }
});


export const { loginSuccess, } = authSlice.actions;

export default authSlice.reducer;