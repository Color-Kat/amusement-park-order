import {Page} from '@modules/PageTemplates';
import {Helmet} from "react-helmet";
import {LogoHeader} from "@modules/Layout/components/LogoHeader.tsx";

import image_1 from "./assets/1.jpg";
import image_2 from "./assets/2.jpg";
import image_3 from "./assets/3.jpg";
import {BsArrowDownCircleFill} from "react-icons/bs";

export const HomePage = () => {
    return (
        <div className="w-full">
            <Helmet>
                <title>Главная</title>
                <link rel="canonical" href="http://127.0.0.1:8000" />
            </Helmet>

            <LogoHeader />

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
                </section>
            </div>


        </div>
    );
};