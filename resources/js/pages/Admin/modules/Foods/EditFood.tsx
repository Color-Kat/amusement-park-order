import React, {useEffect, useState} from 'react';
import Input from "@UI/Form/Input.tsx";
import {Button} from "@UI/Buttons/Button.tsx";
import {PhotoInput} from "@components/Form/PhotoInput.tsx";
import {toFormData} from "@/utils/toFormData.ts";
import {useNavigate, useParams} from "react-router-dom";
import {IFood, useEditFoodMutation, useGetFoodQuery, useGetFoodsQuery} from "@/store/foods.api.ts";

export const EditFood: React.FC = ({}) => {
    const {id} = useParams();
    const navigate = useNavigate();

    const {data: foodData} = useGetFoodQuery({id} as any);
    const [editFood] = useEditFoodMutation();

    const [error, setError] = useState('');
    const [food, setFood] = useState<Omit<IFood & {_image: any}, "id">>({
        name: '',
        description: '',
        price: 100,
        image: '',
        _image: null,
    });

    useEffect(() => {
        if(!foodData) return;

        setFood(prev => ({
            ...prev,
            name: foodData.name ?? '',
            description: foodData.description ?? '',
            price: foodData.price ?? 100,
            image: foodData.image ?? '',
        }));
    }, [foodData]);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const result = await editFood({
            id: id as any,
            data: toFormData(food)
        });

        if('error' in result)
            return setError(Object.values((result.error as any).data)[0] as string);

        if(result.data.status != 200) return setError(result.data.message ?? 'Не удалось обновить информацию о блюде');

        navigate('/admin');
    }

    return (
        <div className="container px-5">
            <h1 className="text-4xl font-bold mt-5 mb-10">Редактировать блюдо</h1>

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

                <Button filled={true} onClick={handleSubmit} className="mr-0">Сохранить</Button>
            </form>
        </div>
    );
}