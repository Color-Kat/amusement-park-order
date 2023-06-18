import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "@/store/auth/auth.slice.ts";
import {authApi} from "@/store/auth/auth.api.ts";
import {attractionsApi} from "@/store/attractions.api.ts";
import {foodsApi} from "@/store/foods.api.ts";


export const store = configureStore({
    reducer: {
        // test: testSlice.reducer
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer,
        [attractionsApi.reducerPath]: attractionsApi.reducer,
        [foodsApi.reducerPath]: foodsApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(
        authApi.middleware,
        attractionsApi.middleware,
        foodsApi.middleware,
    )
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch