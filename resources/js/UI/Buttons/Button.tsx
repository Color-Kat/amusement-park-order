import React, {ButtonHTMLAttributes} from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: string;
    filled: boolean;
}

export const Button: React.FC<ButtonProps> = ({
                                                  children,
                                                  filled = true,
                                                  ...props
                                              }) => {


    return (
        <button
            {...props}
            className={
                `mx-auto uppercase border border-app-accent rounded cursor-pointer p-3.5 sm:min-w-[200px] h-[47px] flex justify-center items-center transition-colors shadow
                ${filled
                    ? 'bg-app-accent hover:bg-transparent text-white hover:text-app-accent'
                    : 'bg-transparent hover:bg-app-accent text-app-accent hover:text-white'}
                     ${props.className}`
            }
        >
            {children}
        </button>
    );
}