import {createRoot} from "react-dom/client";
import React, {StrictMode} from "react";
import '@/app/global.scss'
import {Provider} from "react-redux";
import {store} from "@/shared/store/store";
import {RouterProvider} from "react-router-dom";
import {router} from "@/shared/router/router";


const node = document.getElementById('root');
if (!node) {
    throw new Error(`Node with id 'root' doesn't exist`)
}

createRoot(node)
    .render(
        <StrictMode>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </StrictMode>
    )

