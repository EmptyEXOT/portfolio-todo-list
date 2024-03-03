import React, {FC, ReactNode} from 'react';
import classNames from "classnames";
import cls from "./Burger.module.scss"

interface BurgerProps {
    children?: ReactNode
    className?: string | undefined;
    isOpen: boolean
}

const Burger: FC<BurgerProps> = (
    {
        children,
        isOpen = false,
        ...props
    }
) => {
    return (
        <div className={classNames(cls.navIcon, 'self-center', props.className, isOpen ? cls.open : '')}>
            <span className={classNames('h-1')}></span>
            <span className={classNames('h-1')}></span>
            <span className={classNames('h-1')}></span>
            <span className={classNames('h-1')}></span>
        </div>
    );
};

export default Burger;