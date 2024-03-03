import React, {FC} from 'react';
import classNames from "classnames";
import cls from './Menu.module.scss'
import {Navigation} from "@/widgets/Navbar/ui/Navigation/Navigation";

interface MenuProps {
    isOpen?: boolean
    className?: string
}

const Menu: FC<MenuProps> = ({isOpen, className, ...props}) => {
    return (
        <div
            className={classNames(
                'px-4 fixed flex gap-5 top-8 bottom-0 md:bottom-auto bg-neutral-200 pt-8 justify-start z-0 w-screen bg-opacity-50 backdrop-blur-md overflow-y-scroll',
                'md:pt-2 md:justify-evenly md:border-b-2 border-neutral-300',
                cls.menuWrapper,
                isOpen ? cls.open : cls.close,
                className
            )}>
            <Navigation/>
        </div>
    );
};

export default Menu;