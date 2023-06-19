import React, {useCallback} from 'react';
import {attractionsApi, IAttraction} from "@/store/attractions.api.ts";
import image_1 from "@pages/HomePage/assets/1.jpg";
import {useNavigate} from "react-router-dom";

interface AttractionCardProps {
    attraction: IAttraction;
}

export const AttractionCard: React.FC<AttractionCardProps> = ({attraction}) => {
    const navigate = useNavigate();

    const handleClick = useCallback(() => {
        navigate('/attractions');
    }, []);

    return (
        <article
            className="flex flex-col text-app-accent bg-app-cian text-2xl font-bold rounded-lg overflow-hidden hover:-translate-y-5 hover:scale-105 will-change-transform shadow hover:shadow-xl hover:z-10 transition-all cursor-pointer"
            onClick={handleClick}
        >
            <img src={attraction.image} alt={attraction.name}/>

            <div className="px-5 py-12">
                <h3>{attraction.name}</h3>
                <p>Цена: <b>{attraction.cardPrice}</b></p>

                {/*<p className="mt-2 text-sm text-gray-200">{attraction.description}</p>*/}
            </div>

        </article>
    );
}