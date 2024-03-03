import React, {FC, ReactNode} from 'react';
import classNames from "classnames";
import cls from './Menu.module.scss'

interface MenuProps {
    className?: string
    children: ReactNode
}

const Menu: FC<MenuProps> = ({children, className, ...props}) => {
    return (
        <menu className={classNames(className, cls.menu)}>
            {children}
        </menu>
    );
};

export default Menu;