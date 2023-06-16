import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'auth/api',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/',
        // prepareHeaders: (headers: any, { getState, endpoint }) => {
        //     const user = (getState() as RootState).user.currentUser
        //
        //     if (user && endpoint !== 'refresh') {
        //         headers.set('Authorization', `Bearer ${user.token.access}`)
        //     }
        //     return headers
        // },
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

        // getOfficeByCrmId: builder.query<IOffice, {crmId: number, typeDeal: 'rent' | 'sell'}>({
        //     query: (data) => ({
        //         url: `get-office/${data.typeDeal}/${data.crmId}`,
        //     }),
        // }),
        // requestCall: builder.mutation<any, {
        //     name: string,
        //     phone: string,
        //     email?: string,
        //     message?: string,
        //     officeSpace?: number,
        //     officeCrmId?: number
        // }>({
        //     query: (payload) => ({
        //         url: `request-call`,
        //         method: 'POST',
        //         body: payload
        //     }),
        // }),

    })
});

export const {
    useRegisterMutation,
} = authApi;