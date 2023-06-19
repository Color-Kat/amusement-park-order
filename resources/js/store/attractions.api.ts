import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {RootState} from "@/store";
import {prepareAuthHeader} from "@/store/utils/prepareAuthHeader.ts";

export interface IAttraction {
    id: number;
    name: string;
    price: number;
    cardPrice?: number;
    description: string;
    restrictions: string;
    image: string;
}

export interface IResponse {
    status: number;
    message?: string;
    data: any;
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
        getAttraction: builder.query<IAttraction, {id: number}>({
            query: (payload) => ({
                url: `attractions/${payload.id}`,
            }),
        }),
        createAttraction: builder.mutation<IResponse, FormData>({
            query: (payload) => ({
                url: `admin/attractions`,
                method: 'POST',
                body: payload,
            }),
        }),
        editAttraction: builder.mutation<IResponse, FormData>({
            query: (payload) => ({
                url: `admin/attractions`,
                method: 'POST',
                body: payload,
            }),
        }),
        deleteAttraction: builder.mutation<IResponse, {id: number}>({
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