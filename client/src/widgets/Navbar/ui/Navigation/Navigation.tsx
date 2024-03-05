import React, {FC} from 'react';
import classNames from "classnames";
import NavbarLink from "../NavbarLink";
import {Typo} from "@/shared/ui/Typo/Typo";
import {Link} from "react-router-dom";

interface NavigationProps {
    className?: string
}

export const Navigation: FC<NavigationProps> = ({className, ...props}) => {
    return (
        <div
            className={classNames('w-full md:flex gap-4 md:justify-between md:w-full', className)}>
            <NavbarLink><Link to='/'><Typo.H3>Main</Typo.H3></Link></NavbarLink>
            <NavbarLink><Link to='about'><Typo.H3>About</Typo.H3></Link></NavbarLink>
        </div>
    );
};

