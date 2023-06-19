import React from 'react';
import {Map, Placemark, YMaps} from '@pbe/react-yandex-maps';

export const MapSection: React.FC = () => {


    return (
        <div className="relative bg-app-blue w-screen -mb-5">
            <section className="py-12 container mx-auto">
                <div className="text-5xl font-bold text-center font-kids mb-5" style={{letterSpacing: "0.6rem"}}>
                    <h2>Зарядитесь летним настроением!</h2>
                </div>

                <p className="text-white mb-12 text-xl text-center mx-auto max-w-2xl">
                    Приходите к нам в парк, развлекайтесь, отдыхайте, радуйтесь!
                </p>
            </section>

            <YMaps query={{
                // @ts-ignore
                apikey: import.meta.env.VITE_YANDEX_MAP_API_KEY,
                lang: 'ru_RU'
            }}>
                <Map
                    defaultState={{
                        center: [55.364403, 86.076024],
                        zoom: 17,
                        behaviors: ["disable('scrollZoom')"]
                    }}
                    className="w-screen h-[500px]"
                >
                    <Placemark
                        geometry={[55.364660, 86.074765]}
                        options={{
                            iconColor: '#f82f38',
                        }}
                    />
                </Map>
            </YMaps>
        </div>
    );
}