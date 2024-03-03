import {lazy} from "react";

export const ErrorPageAsync = lazy(() => new Promise(res => {
    // @ts-ignore
    setTimeout(() => res(import('./ErrorPage')), 1000)
}))