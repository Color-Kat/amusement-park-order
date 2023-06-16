import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    user: {}, // for user object
    token: null, // for storing the JWT
    error: null,
    success: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {},
})

export const authReducer = authSlice.reducer;