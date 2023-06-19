import {Page} from '@modules/PageTemplates';
import {Helmet} from "react-helmet";
import {LogoHeader} from "@modules/Layout/components/LogoHeader.tsx";

import {OverviewSection} from "@pages/HomePage/components/OverviewSection.tsx";
import {AttractionsSection} from "@pages/HomePage/components/AttractionsSection.tsx";
import {FoodSection} from "@pages/HomePage/components/FoodSection.tsx";
import {MapSection} from "@pages/HomePage/components/MapSection.tsx";

export const HomePage = () => {

    return (
        <div className="w-full">
            <Helmet>
                <title>Главная</title>
                <link rel="canonical" href="/" />
            </Helmet>

            <LogoHeader />

            {/* Overview section */}
            <OverviewSection />

            {/* Attractions section */}
            <AttractionsSection />

            {/* Food section */}
            <FoodSection />

            {/* Map section */}
            <MapSection />

        </div>
    );
};