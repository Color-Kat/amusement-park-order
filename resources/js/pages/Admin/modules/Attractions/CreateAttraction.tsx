import React, {useState} from 'react';
import {IAttraction, useCreateAttractionMutation} from "@/store/attractions.api.ts";
import Input from "@UI/Form/Input.tsx";
import {Button} from "@UI/Buttons/Button.tsx";
import {PhotoInput} from "@components/Form/PhotoInput.tsx";
import {toFormData} from "@/utils/toFormData.ts";
import {useNavigate} from "react-router-dom";



export const CreateAttraction: React.FC = ({}) => {
    const navigate = useNavigate();
    const [createAttraction] = useCreateAttractionMutation();

    const [error, setError] = useState('');
    const [attraction, setAttraction] = useState<Omit<IAttraction & {_image: any}, "id">>({
        name: '',
        description: '',
        restrictions: '',
        price: 100,
        image: '',
        _image: null
    });

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const result = await createAttraction(toFormData(attraction));
        console.log(result);

        if('error' in result)
            return setError(Object.values((result.error as any).data)[0] as string);

        if(result.data.status != 201) return setError(result.data.message ?? 'Не удалось создать аттракцион');

        navigate('/admin');
    }

    return (
        <div className="container px-5">
            <h1 className="text-4xl font-bold mt-5 mb-10">Создать новый аттракцион</h1>

            <form className="flex flex-col gap-4" encType="multipart/form-data">
                {error && <div className="text-red-300 p-2 rounded bg-red-500/50">{error}</div>}

                <PhotoInput data={attraction} setData={setAttraction as any} />

                <Input
                    data={attraction}
                    setData={setAttraction}
                    name="name"
                    label="Название"
                    icon={false}
                />

                <Input
                    data={attraction}
                    setData={setAttraction}
                    name="description"
                    label="Описание аттракциона"
                    icon={false}
                />

                <Input
                    data={attraction}
                    setData={setAttraction}
                    name="restrictions"
                    label="Ограничения (опционально)"
                    icon={false}
                />

                <Input
                    data={attraction}
                    setData={setAttraction}
                    name="price"
                    type="number"
                    label="Цена билета"
                    description="Цена билета по карте на 10 руб. ниже"
                    icon={false}
                />

                <Button filled={true} onClick={handleSubmit} className="mr-0">Создать</Button>
            </form>
        </div>
    );
}