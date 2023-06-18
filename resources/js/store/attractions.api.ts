import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {RootState} from "@/store";
import {prepareAuthHeader} from "@/store/utils/prepareAuthHeader.ts";

export interface IAttraction {
    id: number;
    name: string;
    price: number;
    description: string;
    restrictions: string;
    image: string;
}

export const attractionsApi = createApi({
    reducerPath: 'attractions/api',
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

        getAttractions: builder.query<IAttraction, void>({
            query: () => ({
                url: `attractions`,
            }),
        }),

    })
});

export const {
    useGetAttractionsQuery,
} = attractionsApi;