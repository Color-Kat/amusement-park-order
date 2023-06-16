import React from "react";

interface PageProps {
    children: React.ReactNode;
}
 
export const Page: React.FC<PageProps> = ({children}) => {
    return ( 
        <div className="flex items-center justify-center w-full h-full">

            {children}

        </div>
    );
};