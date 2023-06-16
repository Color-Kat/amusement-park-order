import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "@pages/HomePage/HomePage";
import { FavouritesPage } from "@pages/FavouritesPage/FavouritesPage";
import { Layout } from "@modules/Layout";
import {Login} from "@pages/Auth/Login.tsx";
import {Registration} from "@pages/Auth/Registration.tsx";
import {useTSelector} from "@hooks/redux.ts";

function App() {
    // const token = useTSelector(state => state.auth.token);

    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/favourites" element={<FavouritesPage/>}/>

                    {/*  Auth  */}
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/registration" element={<Registration/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
