import React, {useState} from 'react';
import {IAttraction} from "@/store/attractions.api.ts";
import Input from "@UI/Form/Input.tsx";
import {Button} from "@UI/Buttons/Button.tsx";
import {PhotoInput} from "@components/Form/PhotoInput.tsx";



export const CreateAttraction: React.FC = ({}) => {
    const [attraction, setAttraction] = useState<Omit<IAttraction & {_image: any}, "id">>({
        name: '',
        description: '',
        restrictions: '',
        price: 100,
        image: '',
        _image: null
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();

    }

    return (
        <div className="container px-5">
            <h1 className="text-4xl font-bold mt-5 mb-10">Создать новый аттракцион</h1>

            <form className="flex flex-col gap-4">
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
                    label="Цена билета"
                    description="Цена билета по карте на 10 руб. ниже"
                    icon={false}
                />

                <Button filled={true} onClick={handleSubmit} className="mr-0">Создать</Button>
            </form>
        </div>
    );
}