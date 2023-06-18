import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {RootState} from "@/store";
import {prepareAuthHeader} from "@/store/utils/prepareAuthHeader.ts";

export interface IFood {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
}

export const attractionsApi = createApi({
    reducerPath: 'foods/api',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/',
        prepareHeaders: prepareAuthHeader,
    }),
    endpoints: (builder) => ({
        // register: builder.mutation<{user: any, token: string}, {
        //     name: string,
        //     email: string,
        //     password: string,
        // }>({
        //     query: (payload) => ({
        //         url: `sdf`,
        //         method: 'POST',
        //         body: payload
        //     }),
        // }),

        getFoods: builder.query<IFood, void>({
            query: () => ({
                url: `foods`,
            }),
        }),

    })
});

export const {
    useGetFoodsQuery,
} = attractionsApi;