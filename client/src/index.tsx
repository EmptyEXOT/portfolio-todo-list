import {createRoot} from "react-dom/client";
import React, {StrictMode} from "react";
import '@/root/global.scss'
import {RouterProvider} from "react-router-dom";
import {router} from "@/shared/router/router";
import {createReduxStore} from "@/shared/store/store";
import {StateSchema} from "@/shared/store/types";
import {StoreProvider} from "@/shared/store/StoreProvider";


const node = document.getElementById('root');
if (!node) {
    throw new Error(`Node with id 'root' doesn't exist`)
}

createRoot(node)
    .render(
        <StrictMode>
            <StoreProvider>
                <RouterProvider router={router} />
            </StoreProvider>
        </StrictMode>
    )

