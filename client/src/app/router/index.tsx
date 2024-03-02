import {createBrowserRouter} from 'react-router-dom'
import {MainPage, AboutPage} from "@/pages";
import {Suspense} from "react";
import {App} from "@/app";

export const router = createBrowserRouter([
    {
        path: '/',
        element:
            <App/>,
        children: [
            {
                index: true,
                element:
                    <Suspense fallback={'loading'}>
                        <MainPage/>
                    </Suspense>,
            },
            {
                path: 'about',
                element:
                    <Suspense fallback={'loading'}>
                        <AboutPage/>
                    </Suspense>,
            }
        ]
    },
])