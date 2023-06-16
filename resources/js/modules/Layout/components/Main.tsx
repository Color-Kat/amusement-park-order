import React from 'react';

const Main: React.FC<{ children: React.ReactElement }> =
    ({children}) => {
        return (
            <>
                <main
                    className="flex-auto flex-shrink-0 flex justify-center bg-app w-full"
                >
                    <div className="flex justify-center py-5">
                        {children}
                    </div>
                </main>
            </>

        );
    };

export default React.memo(Main);