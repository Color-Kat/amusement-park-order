import React, {FunctionComponent, InputHTMLAttributes, useState} from "react";
import {BsPerson} from "react-icons/bs";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    data: { [key: string]: any };
    setData: React.Dispatch<React.SetStateAction<any>>;
    name: string;
    icon?: boolean;
    label?: string;
    description?: string;
}

const Input: FunctionComponent<InputProps> = ({
                                                  data,
                                                  setData,
                                                  name,
                                                  icon = true,
                                                  label,
                                                  description,
                                                  ...props
                                              }) => {

    return (
        <label className="relative w-full text-lg">
            {label && <div className={`leading-4 ${description ? 'mb-1' : 'mb-2'}`}>{label}:</div>}
            {description && <div className="mb-2 text-sm text-gray-100">{description}:</div>}

            <input
                className={`w-full bg-gray-200 text-gray-700 py-2 px-4 ${icon && 'pl-12'} h-[48px] rounded flex items-center outline-none shadow border border-app-accent autofill:color-black autofill:bg-red-500 ` + props.className}
                value={data[name]}
                name={name}
                id={name}
                onChange={
                    (e) => setData((prev: any) => ({
                        ...prev,
                        [name]: e.target.value
                    }))
                }
                {...props}
            />

            {icon && <BsPerson className="absolute left-3 text-app-accent top-1/2 -translate-y-1/2 text-2xl"/>}
        </label>
    );
};

export default Input;