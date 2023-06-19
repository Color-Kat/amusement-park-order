import React, {useState} from 'react';
import Input from "@UI/Form/Input.tsx";
import {Button} from "@UI/Buttons/Button.tsx";
import {PhotoInput} from "@components/Form/PhotoInput.tsx";
import {toFormData} from "@/utils/toFormData.ts";
import {useNavigate} from "react-router-dom";
import {IFood, useCreateFoodMutation} from "@/store/foods.api.ts";

export const CreateFood: React.FC = ({}) => {
    const navigate = useNavigate();
    const [createFood] = useCreateFoodMutation();

    const [error, setError] = useState('');
    const [food, setFood] = useState<Omit<IFood & {_image: any}, "id">>({
        name: '',
        description: '',
        price: 100,
        image: '',
        _image: null
    });

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const result = await createFood(toFormData(food));
        console.log(result);

        if('error' in result)
            return setError(Object.values((result.error as any).data)[0] as string);

        if(result.data.status != 201) return setError(result.data.message ?? 'Не удалось создать новое блюдо');

        navigate('/admin');
    }

    return (
        <div className="container px-5">
            <h1 className="text-4xl font-bold mt-5 mb-10">Добавить блюдо</h1>

            <form className="flex flex-col gap-4" encType="multipart/form-data">
                {error && <div className="text-red-300 p-2 rounded bg-red-500/50">{error}</div>}

                <PhotoInput data={food} setData={setFood as any} />

                <Input
                    data={food}
                    setData={setFood}
                    name="name"
                    label="Название"
                    icon={false}
                />

                <Input
                    data={food}
                    setData={setFood}
                    name="description"
                    label="Описание блюда"
                    icon={false}
                />

                <Input
                    data={food}
                    setData={setFood}
                    name="price"
                    type="number"
                    label="Цена"
                    icon={false}
                />

                <Button filled={true} onClick={handleSubmit} className="mr-0">Создать</Button>
            </form>
        </div>
    );
}