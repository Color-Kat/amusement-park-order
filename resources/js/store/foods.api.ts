import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {prepareAuthHeader} from "@/store/utils/prepareAuthHeader.ts";
import {IResponse} from "@/types/IResponse.ts";

export interface IFood {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
}

export const foodsApi = createApi({
    reducerPath: 'foods/api',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/',
        prepareHeaders: prepareAuthHeader,
    }),
    endpoints: (builder) => ({
        getFoods: builder.query<IFood[], void>({
            query: () => ({
                url: `foods`,
            }),
        }),
        getFood: builder.query<IFood, { id: string }>({
            query: (payload) => ({
                url: `foods/${payload.id}`,
            }),
        }),

        /* ----- Admin routes ----- */

        createFood: builder.mutation<IResponse, FormData>({
            query: (payload) => ({
                url: `admin/foods`,
                method: 'POST',
                body: payload,
            }),
        }),
        editFood: builder.mutation<IResponse, { id: string, data: FormData }>({
            query: (payload) => {
                payload.data.append('_method', 'PATCH')
                return {
                    url: `admin/foods/${payload.id}`,
                    method: 'POST',
                    body: payload.data,
                }
            },
        }),
        deleteFood: builder.mutation<IResponse, { id: string }>({
            query: (payload) => ({
                url: `admin/foods/${payload.id}`,
                method: 'DELETE',
            }),
        }),
    })
});

export const {
    useGetFoodsQuery,
    useGetFoodQuery,

    useCreateFoodMutation,
    useEditFoodMutation,
    useDeleteFoodMutation
} = foodsApi;