import {lazy} from "react";

export const AppPageAsync = lazy(
    () => new Promise((res) => {
        // @ts-ignore
        setTimeout(() => res(import('./AppPage')), 200);
    }),
)
