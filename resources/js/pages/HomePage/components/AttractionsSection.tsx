import React from 'react';
import {AttractionCard} from "@assets/Attractions/AttractionCard.tsx";
import {Link} from "react-router-dom";
import {useGetAttractionsQuery} from "@/store/attractions.api.ts";

export const AttractionsSection: React.FC = () => {
    const {data: attractions} = useGetAttractionsQuery({limit: 6});

    if(!attractions) return null;

    return (<div className="relative bg-app-blue px-8 w-screen">
            <section className="py-12 container mx-auto">
                <div className="text-5xl font-bold text-center font-kids tracking-widest mb-16">
                    <h2>30 уникальных аттракционов</h2>
                </div>

                <div className="grid grid-cols-3 gap-5">

                    {attractions.map(attraction => (
                        <AttractionCard
                            attraction={attraction}
                            key={attraction.id}
                        />
                    ))}

                </div>

                <div className="mt-10 text-center">
                    <Link to="/attractions" className="px-4 py-3 border-cyan-50 border-2 rounded-lg text-lg md:text-2xl hover:text-black hover:bg-cyan-50 shadow-lg shadow-app-accent">
                        Смотреть все аттракционы
                    </Link>
                </div>
            </section>
        </div>
    );
}