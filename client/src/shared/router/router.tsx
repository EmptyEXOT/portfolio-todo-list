import {createBrowserRouter} from "react-router-dom";
import {Root} from "@/root";
import {Suspense} from "react";
import {MainPage} from "@/pages/MainPage";
import {AboutPage} from "@/pages/AboutPage";
import {ErrorPage} from "@/pages/ErrorPage";
import {AppPage} from "@/pages/AppPage";

export const router = createBrowserRouter([
    {
        path: '/',
        errorElement:
            <Root>
                <Suspense fallback={'error page loading...'}>
                    <ErrorPage/>
                </Suspense>
            </Root>,
        element: <Root/>,
        children: [
            {
                index: true,
                element:
                    <Suspense fallback={'page is loading'}>
                        <MainPage/>
                    </Suspense>
            },
            {
                path: 'about',
                element:
                    <Suspense fallback={'page is loading'}>
                        <AboutPage/>
                    </Suspense>
            }
        ]
    },
    {
        path: 'app',
        element:
            <Suspense fallback={'loading root...'}>
                <AppPage/>
            </Suspense>
    }
])