import React, {ReactNode} from 'react';
import './global.scss'
import {Outlet} from "react-router-dom";
import {Navbar} from "@/widgets/Navbar";

export const Root = ({children}: {children?: ReactNode}) => {
    return (
        <>
            <Navbar/>
            {children}
            <Outlet/>
        </>
    );
};
