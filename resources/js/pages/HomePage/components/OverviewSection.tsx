import React from 'react';
import {BsArrowDownCircleFill} from "react-icons/bs";
import image_1 from "@pages/HomePage/assets/1.jpg";
import image_2 from "@pages/HomePage/assets/2.jpg";
import image_3 from "@pages/HomePage/assets/3.jpg";
import {Link} from "react-router-dom";


export const OverviewSection: React.FC = () => {

    return (
        <div className="relative bg-app-cian px-8 w-screen">

            <BsArrowDownCircleFill className="absolute -top-5 animate-bounce text-app-accent w-full text-center left-0 right-0" size={40}/>

            <section className="py-12 h-[calc(100vh-64px)] container mx-auto">
                <div className="text-5xl font-bold text-center font-kids tracking-widest mb-16">
                    <h1>Твоё лето в парке аттракционов</h1>
                </div>

                <div className="animate-slide-up grid grid-cols-3 gap-5">
                    <article className="flex flex-col text-app-cian bg-app-accent text-2xl font-bold rounded-lg overflow-hidden">
                        <img src={image_1} alt=""/>

                        <div className="px-5 py-12">
                            Популярные мировые аттракционы и спортивные игры
                        </div>

                    </article>

                    <article className="flex flex-col text-app-cian bg-app-accent text-2xl font-bold rounded-lg overflow-hidden">
                        <img src={image_2} alt=""/>

                        <div className="px-5 py-12">
                            Безопасные катания и комфортный отдых
                        </div>

                    </article>

                    <article className="flex flex-col text-app-cian bg-app-accent text-2xl font-bold rounded-lg overflow-hidden">
                        <img src={image_3} alt=""/>

                        <div className="px-5 py-12">
                            Вкусный перекус прямо в парке
                        </div>

                    </article>
                </div>

                <div className="mt-8 text-right">
                    <Link to="/news" className="text-xl font-semibold underline">Наши новости &#62;&#62;</Link>
                </div>
            </section>
        </div>
    );
}