import React, {useCallback} from 'react';
import {useDeleteAttractionMutation, useGetAttractionsQuery} from "@/store/attractions.api.ts";
import {useGetFoodsQuery} from "@/store/foods.api.ts";
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import {Button} from "@UI/Buttons/Button.tsx";

export const Admin: React.FC = ({}) => {
    const {data: attractions, refetch: refetchAttractions} = useGetAttractionsQuery();
    const {data: foods} = useGetFoodsQuery();

    const [deleteAttraction] = useDeleteAttractionMutation();
    const handleDeleteAttraction = async (id: number) => {
        const confirmed = confirm('Вы уверены, что хотите удалить аттракцион?');
        if(!confirmed) return;

        await deleteAttraction({id});

        refetchAttractions();
    }

    return (
        <div className="container px-5">
            <Helmet>
                <title>Админ панель</title>
            </Helmet>

            <h1 className="text-5xl font-bold w-full mt-5 mb-10">Админ панель</h1>

            <article className="attractions p-3 rounded-lg ">
                <div className="flex items-center justify-between mb-3">
                    <h2 className="text-xl font-bold">Аттракционы</h2>
                    <Link
                        to="/admin/attractions/create"
                        className="py-2 px-5 bg-app-accent text-app-blue rounded-md shadow font-semibold"
                    >Создать</Link>
                </div>

                {attractions && <div className="space-y-5">
                    {attractions.map(attraction => {
                        return (
                            <div
                                className="w-full flex gap-8 md:flex-row flex-col justify-between border-2 border-app-accent rounded-xl p-5"
                                key={attraction.id}
                            >
                                <img src={attraction.image} alt={attraction.name} className="h-64 rounded-lg object-contain"/>

                                <div className="flex flex-col flex-1">
                                    <h3 className="text-3xl font-bold mb-2">{attraction.name}</h3>
                                    <p className="text-gray-200 text-sm ">{attraction.description}</p>
                                    <div className="text-lg mt-5">Цена: <b>{attraction.price}</b> ({attraction.cardPrice} по карте)</div>

                                    <div className="md:mt-auto mt-5 flex flex-wrap gap-3 justify-end">
                                        <Button
                                            colorClass="red-500"
                                            className="mx-0"
                                            onClick={() => handleDeleteAttraction(attraction.id)}
                                        >Удалить</Button>

                                        <Link to={`/admin/attractions/${attraction.id}/edit`} className="">
                                            <Button filled={false}>Изменить</Button>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        )
                    })}
                </div>}
            </article>
        </div>
    );
}