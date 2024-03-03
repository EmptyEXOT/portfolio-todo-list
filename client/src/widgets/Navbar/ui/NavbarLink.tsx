import React, {FC, ReactNode, useContext} from 'react';
import classNames from "classnames";
import {NavbarContext} from "@/widgets/Navbar/ui/Navbar";

interface NavbarLinkProps {
    children: ReactNode;
}

const NavbarLink: FC<NavbarLinkProps> = ({children, ...props}) => {
    const {isOpen, setIsOpen} = useContext(NavbarContext)
    return (
        <div className={classNames('flex flex-col justify-center py-3')} onClick={() => setIsOpen(false)}>
            {children}
        </div>
    );
};

export default NavbarLink;