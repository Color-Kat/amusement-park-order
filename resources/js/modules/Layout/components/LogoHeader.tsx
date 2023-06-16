import React from 'react';
import { Logo } from "@UI/Elements/Logo/Logo";
import { Link } from "react-router-dom";

import logo from "@assets/logo.png";


export const LogoHeader = () => {

    return (
        <div className="bottom-header animate-slide-up py-20">
            <Link to="/">
                <img src={logo} alt="Парк Чудес" className="mx-auto rounded-full shadow-2xl my-5"/>
            </Link>
        </div>
    );
};