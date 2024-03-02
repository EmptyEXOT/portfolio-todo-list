import React from 'react';
import {Outlet} from "react-router-dom";
import {HSize, Typo} from "@/shared/ui/Typo";

export const App = () => {
    return (
        <>
            <Typo.H size={HSize.h4}>Navbar</Typo.H>
            <Outlet/>
        </>
    );
};
