import React from 'react';
import {useGetAttractionsQuery} from "@/store/attractions.api.ts";
import {useGetFoodsQuery} from "@/store/foods.api.ts";
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";

export const Admin: React.FC = ({}) => {
    const {data: attractions} = useGetAttractionsQuery();
    const {data: foods} = useGetFoodsQuery();

    console.log(attractions);

    return (
        <div className="container">
            <Helmet>
                <title>Админ панель</title>
            </Helmet>

            <h1 className="text-5xl font-bold w-full mt-5 mb-10">Админ панель</h1>

            <article className="attractions p-3 rounded-lg border-2 border-app-accent">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">Аттракционы</h2>
                    <Link
                        to="attractions/create"
                        className="py-2 px-5 bg-app-accent text-app-blue rounded-md shadow font-semibold"
                    >Создать</Link>
                </div>

                {attractions && <div>
                    {attractions.map(attraction => {
                        return (
                            <div>
                                {attraction.name}
                            </div>
                        )
                    })}
                </div>}
            </article>
        </div>
    );
}