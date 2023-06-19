import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {RootState} from "@/store";
import {prepareAuthHeader} from "@/store/utils/prepareAuthHeader.ts";
import {IResponse} from "@/types/IResponse.ts";

export interface IAttraction {
    id: number;
    name: string;
    price: number;
    cardPrice?: number;
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
        getAttractions: builder.query<IAttraction[], void>({
            query: () => ({
                url: `attractions`,
            }),
        }),
        getAttraction: builder.query<IAttraction, {id: string}>({
            query: (payload) => ({
                url: `attractions/${payload.id}`,
            }),
        }),

        /* ----- Admin routes ----- */

        createAttraction: builder.mutation<IResponse, FormData>({
            query: (payload) => ({
                url: `admin/attractions`,
                method: 'POST',
                body: payload,
            }),
        }),
        editAttraction: builder.mutation<IResponse, {id: string, data: FormData}>({
            query: (payload) => {
                payload.data.append('_method', 'PATCH')
                return {
                    url: `admin/attractions/${payload.id}`,
                    method: 'POST',
                    body: payload.data,
                }
            },
        }),
        deleteAttraction: builder.mutation<IResponse, {id: string}>({
            query: (payload) => ({
                url: `admin/attractions/${payload.id}`,
                method: 'DELETE',
            }),
        }),
    })
});

export const {
    useGetAttractionsQuery,
    useGetAttractionQuery,
    useCreateAttractionMutation,
    useEditAttractionMutation,
    useDeleteAttractionMutation,
} = attractionsApi;