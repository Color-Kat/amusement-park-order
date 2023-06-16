import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "@/store/auth/auth.slice.ts";
import {authApi} from "@/store/auth/auth.api.ts";


export const store = configureStore({
   reducer: {
       // test: testSlice.reducer
       auth: authReducer,
       [authApi.reducerPath]: authApi.reducer,
   },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authApi.middleware)
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch