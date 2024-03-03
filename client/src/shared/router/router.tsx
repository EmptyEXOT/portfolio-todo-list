import {createBrowserRouter} from "react-router-dom";
import {App} from "@/app";
import {Suspense} from "react";
import {MainPage} from "@/pages/MainPage";
import {AboutPage} from "@/pages/AboutPage";
import {ErrorPage} from "@/pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        errorElement:
            <Suspense fallback={'error page loading...'}>
                <ErrorPage />
            </Suspense>,
        element: <App />,
        children: [
            {
                index: true,
                element:
                    <Suspense fallback={'page is loading'}>
                        <MainPage />
                    </Suspense>
            },
            {
                path: 'about',
                element:
                    <Suspense fallback={'page is loading'}>
                        <AboutPage />
                    </Suspense>
            }
        ]
    },
])