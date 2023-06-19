import React, {useRef, useState} from 'react';
// import noImage from '@assets/no-image/part.png';
import {Button} from "@UI/Buttons/Button.tsx";

const noImage = "";

interface PhotoInputProps {
    data: {
        name?: string
        image: string,
        _image?: File | null
    };
    setData: React.Dispatch<React.SetStateAction<{_image: any}>>;
    errors?: {image: string};
    destroyRoute?: string;
}

export const PhotoInput: React.FC<PhotoInputProps> = ({data, setData, errors, destroyRoute}) => {
    const [photoPreview, setPhotoPreview] = useState<string | null>(null);
    const photoRef = useRef<HTMLInputElement>(null);

    function selectNewPhoto() {
        photoRef.current?.click();
    }

    function updatePhotoPreview() {
        const image = photoRef.current?.files?.[0];

        if (!image) return;
        setData(prev => ({...prev, _image: image}))

        const reader = new FileReader();

        reader.onload = e => {
            setPhotoPreview(e.target?.result as string);
        };

        reader.readAsDataURL(image);
    }

    function deletePhoto() {
        if(!destroyRoute) return;

        // Inertia.delete(destroyRoute, {
        //     preserveScroll: true,
        //     onSuccess: () => {
        //         setPhotoPreview(null);
        //         clearPhotoFileInput();
        //     },
        // });
    }

    function clearPhotoFileInput() {
        setData(prev => ({...prev, _image: null}))


        if (photoRef.current?.value) {
            photoRef.current.value = '';
            photoRef.current.value = '';
            setData(prev => ({...prev, _image: null}))

        }
    }

    return (
        <div className="photo-upload ">
            {/* <!-- Part Image File Input --> */}
            <input
                type="file"
                id="photo"
                name="photo"
                className="hidden"
                ref={photoRef}
                onChange={updatePhotoPreview}
            />

            <label htmlFor="photo" className="text-lg">Выберите фото:</label>

            {photoPreview ? (
                // <!-- New Image Preview -->
                <div className="mt-2">
                    <img
                        src={photoPreview}
                        alt="Фото товара"
                        className="max-h-72 object-cover rounded-md"
                    />
                </div>
            ) : (
                // <!-- Current Image -->
                <div className="mt-2">
                    <img
                        src={data.image ? data.image : noImage}
                        alt="Фото"
                        className="max-h-72 object-cover rounded-md"
                    />
                </div>
            )}

            <Button
                className="mt-2 ml-0"
                type="button"
                filled={false}
                onClick={selectNewPhoto}
            >
                Выбрать фото
            </Button>

            {/*<div className="mt-2 text-red-500">{errors.image}</div>*/}
        </div>
    );
}