import React, {ReactNode, useCallback, useEffect} from 'react';
import {IAttraction, useDeleteAttractionMutation, useGetAttractionsQuery} from "@/store/attractions.api.ts";
import {IFood, useDeleteFoodMutation, useGetFoodsQuery} from "@/store/foods.api.ts";
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import {Button} from "@UI/Buttons/Button.tsx";

interface AdminSectionProps {
    title: string;
    createTo: string;
    items: any[];
    ItemComponent: any
}

export const AdminSection: React.FC<AdminSectionProps> = ({
                                                              title,
                                                              createTo,
                                                              items,
                                                              ItemComponent
                                                          }) => {


    return (
        <article className="attractions p-3 rounded-lg mb-10">
            <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-bold">{title}</h2>
                <Link
                    to={createTo}
                    className="py-2 px-5 bg-app-accent text-app-blue rounded-md shadow font-semibold"
                >Создать</Link>
            </div>

            {items && <div className="space-y-5 overflow-y-scroll no-scrollbar" style={{maxHeight: '70vh'}}>
                {items.map(item => {
                    return <ItemComponent item={item} key={item.id} />;
                })}
            </div>}

            {!items && <div className="w-full py-16 px-5 flex justify-center items-center font-bold text-3xl">
                Здесь пока ничего нет ;)
            </div>}
        </article>
    );
}

export const Admin: React.FC = ({}) => {
    const {data: attractions, refetch: refetchAttractions} = useGetAttractionsQuery();
    const {data: foods, refetch: refetchFoods} = useGetFoodsQuery();

    const [deleteAttraction] = useDeleteAttractionMutation();
    const handleDeleteAttraction = async (id: number) => {
        const confirmed = confirm('Вы уверены, что хотите удалить аттракцион?');
        if (!confirmed) return;

        await deleteAttraction({id} as any);

        refetchAttractions();
    }

    const [deleteFood] = useDeleteFoodMutation();
    const handleDeleteFood = async (id: number) => {
        const confirmed = confirm('Вы уверены, что хотите удалить это блюдо?');
        if (!confirmed) return;

        await deleteFood({id} as any);

        refetchFoods();
    }

    useEffect(() => {
        refetchAttractions();
        refetchFoods();
    }, []);

    return (
        <div className="container px-5">
            <Helmet>
                <title>Админ панель</title>
            </Helmet>

            <h1 className="text-5xl font-bold w-full mt-5 mb-10">Админ панель</h1>

            {/* Attractions section */}
            <AdminSection
                title="Аттракционы"
                createTo="/admin/attractions/create"
                items={attractions as any}
                ItemComponent={({item}: {item: IAttraction}) => {
                    return (
                        <div
                            className="w-full flex gap-8 md:flex-row flex-col justify-between border-2 border-app-accent rounded-xl p-5"
                            key={item.id}
                        >
                            <img src={item.image} alt={item.name}
                                 className="h-64 rounded-lg object-contain"/>

                            <div className="flex flex-col flex-1">
                                <h3 className="text-3xl font-bold mb-2">{item.name}</h3>
                                <p className="text-gray-200 text-sm ">{item.description}</p>
                                <div
                                    className="text-lg mt-5">Цена: <b>{item.price}</b> ({item.cardPrice} по
                                    карте)
                                </div>

                                <div className="md:mt-auto mt-5 flex flex-wrap gap-3 justify-end">
                                    <Button
                                        colorClass="red-500"
                                        className="mx-0"
                                        onClick={() => handleDeleteAttraction(item.id)}
                                    >Удалить</Button>

                                    <Link to={`/admin/attractions/${item.id}/edit`} className="">
                                        <Button filled={false}>Изменить</Button>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    )
                }}
            />

            {/* Foods section */}
            <AdminSection
                title="Еда"
                createTo="/admin/foods/create"
                items={foods as any}
                ItemComponent={({item}: {item: IFood}) => {
                    return (
                        <div
                            className="w-full flex gap-8 md:flex-row flex-col justify-between border-2 border-app-accent rounded-xl p-5"
                            key={item.id}
                        >
                            <img src={item.image} alt={item.name}
                                 className="h-64 rounded-lg object-contain"/>

                            <div className="flex flex-col flex-1">
                                <h3 className="text-3xl font-bold mb-2">{item.name}</h3>
                                <p className="text-gray-200 text-sm ">{item.description}</p>
                                <div
                                    className="text-lg mt-5">Цена: <b>{item.price}</b> руб
                                </div>

                                <div className="md:mt-auto mt-5 flex flex-wrap gap-3 justify-end">
                                    <Button
                                        colorClass="red-500"
                                        className="mx-0"
                                        onClick={() => handleDeleteFood(item.id)}
                                    >Удалить</Button>

                                    <Link to={`/admin/foods/${item.id}/edit`} className="">
                                        <Button filled={false}>Изменить</Button>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    )
                }}
            />

            {/*<article className="attractions p-3 rounded-lg">*/}
            {/*    <div className="flex items-center justify-between mb-3">*/}
            {/*        <h2 className="text-xl font-bold">Аттракционы</h2>*/}
            {/*        <Link*/}
            {/*            to="/admin/attractions/create"*/}
            {/*            className="py-2 px-5 bg-app-accent text-app-blue rounded-md shadow font-semibold"*/}
            {/*        >Создать</Link>*/}
            {/*    </div>*/}

            {/*    {attractions && <div className="space-y-5 overflow-y-scroll no-scrollbar" style={{maxHeight: '70vh'}}>*/}
            {/*        {attractions.map(attraction => {*/}
            {/*            return (*/}
            {/*                <div*/}
            {/*                    className="w-full flex gap-8 md:flex-row flex-col justify-between border-2 border-app-accent rounded-xl p-5"*/}
            {/*                    key={attraction.id}*/}
            {/*                >*/}
            {/*                    <img src={attraction.image} alt={attraction.name}*/}
            {/*                         className="h-64 rounded-lg object-contain"/>*/}

            {/*                    <div className="flex flex-col flex-1">*/}
            {/*                        <h3 className="text-3xl font-bold mb-2">{attraction.name}</h3>*/}
            {/*                        <p className="text-gray-200 text-sm ">{attraction.description}</p>*/}
            {/*                        <div*/}
            {/*                            className="text-lg mt-5">Цена: <b>{attraction.price}</b> ({attraction.cardPrice} по*/}
            {/*                            карте)*/}
            {/*                        </div>*/}

            {/*                        <div className="md:mt-auto mt-5 flex flex-wrap gap-3 justify-end">*/}
            {/*                            <Button*/}
            {/*                                colorClass="red-500"*/}
            {/*                                className="mx-0"*/}
            {/*                                onClick={() => handleDeleteAttraction(attraction.id)}*/}
            {/*                            >Удалить</Button>*/}

            {/*                            <Link to={`/admin/attractions/${attraction.id}/edit`} className="">*/}
            {/*                                <Button filled={false}>Изменить</Button>*/}
            {/*                            </Link>*/}
            {/*                        </div>*/}

            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            )*/}
            {/*        })}*/}
            {/*    </div>}*/}
            {/*</article>*/}

        </div>
    );
}