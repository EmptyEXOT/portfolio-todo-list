import React, {ReactNode} from 'react';
import './global.scss'
import {Outlet} from "react-router-dom";
import {Navbar} from "@/widgets/Navbar";

export const App = ({children}: {children?: ReactNode}) => {
    return (
        <>
            <Navbar/>
            {children}
            <Outlet/>
        </>
    );
};
