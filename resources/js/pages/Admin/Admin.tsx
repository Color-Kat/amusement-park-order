import React from 'react';
import {useGetAttractionsQuery} from "@/store/attractions.api.ts";
import {useGetFoodsQuery} from "@/store/foods.api.ts";

export const Admin: React.FC = ({}) => {
    const {data: attractions} = useGetAttractionsQuery();
    const {data: foods} = useGetFoodsQuery();

    console.log(attractions);

    return (
        <div>
            admin
        </div>
    );
}