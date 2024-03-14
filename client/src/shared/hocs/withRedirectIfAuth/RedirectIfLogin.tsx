import React, {FC, ReactNode} from 'react';
import {Navigate, useLoaderData} from "react-router-dom";

interface RedirectIfLogin {
    to: string,
    children: ReactNode,
}

export const RedirectIfLogin: FC<RedirectIfLogin> = ({to, children}) => {
    const isRedirect = useLoaderData();
    if (isRedirect) return <Navigate to={to}/>

    return (
        <>
            {children}
        </>
    );
};
