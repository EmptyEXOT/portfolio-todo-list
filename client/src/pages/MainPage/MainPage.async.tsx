import {lazy, ReactNode} from "react";

export const MainPageAsync = lazy<() => ReactNode>(() => import('./MainPage')
    .then(({MainPage}) =>
        ({default: MainPage})
    ));
