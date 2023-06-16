import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";

import { store } from "@/store";
import App from "./App.tsx";

import '@sass/index.scss';
import {authApi} from "@/store/auth/auth.api.ts";

// store.dispatch();
if(store.getState().auth.token)
    await store.dispatch(authApi.endpoints.getUser.initiate())

createRoot(document.getElementById('app') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
);
