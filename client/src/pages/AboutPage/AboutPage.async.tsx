import {lazy, ReactNode} from "react";

export const AboutPageAsync = lazy<() => ReactNode>(() => import('./AboutPage')
    .then(({AboutPage}) =>
        ({default: AboutPage})
    ));
