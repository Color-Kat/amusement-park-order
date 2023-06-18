import React from 'react';

const Main: React.FC<{ children: React.ReactElement }> =
    ({children}) => {
        return (
            <>
                <main
                    className="flex-auto flex-shrink-0 flex justify-center bg-app w-full relative py-5"
                >
                    {children}
                </main>
            </>

        );
    };

export default React.memo(Main);