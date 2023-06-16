import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {RootState} from "@/store";
import {IUser} from "@/store/auth/auth.slice.ts";

export const authApi = createApi({
    reducerPath: 'auth/api',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/',
        prepareHeaders: (headers: any, { getState, endpoint }) => {
            const token = (getState() as RootState).auth.token;

            if (token && endpoint !== 'refresh')
                headers.set('Authorization', `Bearer ${token}`)

            return headers;
        },
        // credentials: 'include', // This allows server to set cookies
    }),
    endpoints: (builder) => ({
        register: builder.mutation<{user: any, token: string}, {
            name: string,
            email: string,
            password: string,
        }>({
            query: (payload) => ({
                url: `register`,
                method: 'POST',
                body: payload
            }),
        }),
        login: builder.mutation<{user: any, token: string}, {
            email: string,
            password: string,
        }>({
            query: (payload) => ({
                url: `login`,
                method: 'POST',
                body: payload,
            }),
        }),
        getUser: builder.query<IUser, void>({
            query: () => ({
                url: `user`,
            }),
        }),

    })
});

export const {
    useRegisterMutation,
    useLoginMutation
} = authApi;