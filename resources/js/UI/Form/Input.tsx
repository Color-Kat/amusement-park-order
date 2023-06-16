import React, {FunctionComponent, InputHTMLAttributes, useState} from "react";
import {BsPerson} from "react-icons/bs";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    data: { [key: string]: any };
    setData: React.Dispatch<React.SetStateAction<any>>;
    name: string;
    label?: string;
}

const Input: FunctionComponent<InputProps> = ({
                                                  data,
                                                  setData,
                                                  name,
                                                  label,
                                                  ...props
                                              }) => {

    return (
        <div className="relative h-[48px] w-full">
            <input
                className={"w-full bg-white text-gray-700 py-2 px-4 pl-12 h-[48px] rounded flex items-center outline-none border border-app-accent autofill:color-black autofill:bg-red-500 " + props.className}
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

            <BsPerson className="absolute left-3 text-app-accent top-1/2 -translate-y-1/2 text-2xl"/>
        </div>
    );
};

export default Input;