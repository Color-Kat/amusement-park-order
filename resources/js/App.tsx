import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "@pages/HomePage/HomePage";
import { FavouritesPage } from "@pages/FavouritesPage/FavouritesPage";
import { Layout } from "@modules/Layout";
import {Login} from "@pages/Auth/Login.tsx";
import {Registration} from "@pages/Auth/Registration.tsx";
import {useTDispatch, useTSelector} from "@hooks/redux.ts";
import {useEffect} from "react";
import {authApi, useGetUserQuery} from "@/store/auth/auth.api.ts";
import {Admin} from "@pages/Admin/Admin.tsx";
import {CreateAttraction} from "@pages/Admin/modules/Attractions/CreateAttraction.tsx";

function App() {
    const {usePrefetch} = authApi;

    usePrefetch("getUser");

    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/favourites" element={<FavouritesPage/>}/>

                    {/*  Auth  */}
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/registration" element={<Registration/>}/>

                    {/* Admin  */}
                    <Route path="/admin" element={<Admin/>}/>
                    <Route path="/admin/attractions/create" element={<CreateAttraction/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
