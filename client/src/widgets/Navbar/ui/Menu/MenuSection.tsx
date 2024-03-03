import React, {FC, ReactNode} from 'react';
import classNames from "classnames";
import {HeaderSize} from "@/shared/ui/Typo/Header/H";
import { Typo } from '@/shared/ui/Typo/Typo';


interface MenuSectionProps {
    children: ReactNode,
    className?: string | undefined,
    header?: string | ReactNode,
}

const MenuSection: FC<MenuSectionProps> = ({children, className, header, ...props}) => {
    return (
        <div className={classNames('container pb-6 pt-6 px-3', className)}>
            {header && <Typo.H4 className={classNames('pb-2')} bold={true}>{header}</Typo.H4>}
            {children}
        </div>
    );
};

export default MenuSection;