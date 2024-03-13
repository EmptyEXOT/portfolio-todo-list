import {createBrowserRouter, Navigate} from "react-router-dom";
import {Root} from "@/root";
import React, {Suspense} from "react";
import {MainPage} from "@/pages/MainPage";
import {AboutPage} from "@/pages/AboutPage";
import {ErrorPage} from "@/pages/ErrorPage";
import {AppPage} from "@/pages/AppPage";
import {LoginPage} from "@/pages/LoginPage";
import {privateRouteLoader} from "../router/loader/privateRouteLoader";
import {withPrivate} from "../hocs/withPrivate/withPrivate";

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
                    </Suspense>,
            },
            {
                path: 'about/*',
                element:
                    <Suspense fallback={'page is loading'}>
                        <AboutPage/>
                    </Suspense>,
            },
        ],
    },
    {
        path: 'app/*',
        loader: privateRouteLoader,
        errorElement:
            <Suspense fallback={'error page loading...'}>
                <ErrorPage/>
            </Suspense>,
        element:
            withPrivate(
                <Suspense fallback={'loading root...'}>
                    <AppPage/>
                </Suspense>,
                '/login'
            )
    },
    {
        path: 'login/*',
        // action: loginAction,
        element:
            <Suspense fallback={'Loading Login page'}>
                <LoginPage/>
            </Suspense>,
    },
    {
        path: '*',
        element:
            <Navigate to={'/'}/>,
    },
])