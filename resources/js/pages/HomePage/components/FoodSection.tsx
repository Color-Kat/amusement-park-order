import React from 'react';
import {FoodCard} from "@assets/Foods/FoodCard.tsx";
import {Link} from "react-router-dom";
import {useGetFoodsQuery} from "@/store/foods.api.ts";


export const FoodSection: React.FC = () => {
    const {data: foods} = useGetFoodsQuery({limit: 3});

    if(!foods) return null;

    return (
        <div className="relative bg-app-accent px-8 w-screen">
            <section className="py-12 container mx-auto">
                <div className="text-5xl font-bold text-center font-kids mb-5" style={{letterSpacing: "0.6rem"}}>
                    <h2>Проголодались? Перекусите!</h2>
                </div>

                <p className="text-white mb-12 text-lg text-center mx-auto max-w-2xl">
                    Активный отдых на свежем воздухе всегда приводит к желанию подкрепиться. На этот случай в парке есть множество мест, в которых можно отдохнуть и вкусно перекусить
                </p>

                <div className="grid grid-cols-3 gap-5">
                    {foods.map(food => (
                        <FoodCard
                            food={food}
                            key={food.id}
                        />
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <Link to="/foods" className="px-4 py-3 border-white border-2 rounded-lg text-lg font-semibold md:text-2xl hover:text-black hover:bg-cyan-50 shadow-lg shadow-white">
                        Смотреть меню
                    </Link>
                </div>
            </section>
        </div>
    );
}