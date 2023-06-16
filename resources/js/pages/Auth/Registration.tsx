import React, {useState} from 'react';
import {Page} from "@modules/PageTemplates";
import Input from "@UI/Form/Input.tsx";
import {Button} from "@UI/Buttons/Button.tsx";
import {Link} from "react-router-dom";
import {useRegisterMutation} from "@/store/auth/auth.api.ts";

interface RegistrationProps {

}

export const Registration: React.FC<RegistrationProps> = ({}) => {
    const [registerUser, result] = useRegisterMutation();

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const register = async (e: any) => {
        e.preventDefault();
        await registerUser(data);
        console.log(result)
    }
    
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
                    onClick={register}
                >
                    Зарегистрироваться
                </Button>
            </form>
        </Page>
    );
}