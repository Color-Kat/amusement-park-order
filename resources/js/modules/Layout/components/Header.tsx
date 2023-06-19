import React from 'react';
import {Logo} from "@UI/Elements/Logo/Logo";
import {Link} from "react-router-dom";


export const Header = () => {

    return (
        <header
            className="top-header sticky top-0 flex justify-center items-center flex-0 h-16 px-5 py-5 w-full shadow-lg bg-app-blue z-40"
        >
            <div className="container flex justify-between items-center">
                <div>
                    <Link to="/">
                        <h1 className="text-orange-500 font-bold text-3xl italic font-roboto">
                            Парк Чудес
                        </h1>
                    </Link>
                </div>

                <div className="flex md:gap-8 gap-4 text-lg font-semibold">
                    <Link to="/news">Новости</Link>
                    <Link to="/news">Услуги</Link>
                    <Link to="/contacts">Контакты</Link>
                </div>
            </div>
        </header>
    );
};