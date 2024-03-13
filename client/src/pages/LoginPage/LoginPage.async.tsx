import {lazy} from "react";

export const LoginPageAsync = lazy(() => new Promise(res => {
    // @ts-ignore
    setTimeout(() => res(import('./LoginPage')), 1000)
}))