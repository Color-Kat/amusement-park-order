import React, {useEffect, useState} from 'react';
import {Page} from "@modules/PageTemplates";
import Input from "@UI/Form/Input.tsx";
import {Button} from "@UI/Buttons/Button.tsx";
import {Link} from "react-router-dom";
import {useLoginMutation, useLogoutMutation, useRegisterMutation} from "@/store/auth/auth.api.ts";

interface RegistrationProps {

}

export const Registration: React.FC<RegistrationProps> = ({}) => {
    const [registerUser] = useRegisterMutation();
    const [logout] = useLogoutMutation();

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const result = await registerUser(data);
        console.log(result);
    }

    useEffect(() => {
        logout();
    }, [])
    
    return (
        <Page>
            <form className="login text-center backdrop-blur bg-white/20 px-8 py-16 rounded-xl">
                <div className="text-3xl font-bold font-kids tracking-widest mb-8">
                    <h1>Регистрация</h1>
                </div>

                <div className="space-y-5">
                    <Input
                        data={data}
                        setData={setData}
                        name="name"
                        placeholder="Имя"
                    />
                    <Input
                        data={data}
                        setData={setData}
                        name="email"
                        placeholder="Почта"
                    />
                    <Input
                        data={data}
                        setData={setData}
                        name="password"
                        type="password"
                        placeholder="Пароль"
                    />
                </div>

                <div className="mt-3 text-sm underline text-right">
                    <Link to="/login">
                        Вход
                    </Link>
                </div>

                <Button
                    filled={true}
                    className="mt-6 w-full"
                    onClick={handleSubmit}
                >
                    Зарегистрироваться
                </Button>
            </form>
        </Page>
    );
}