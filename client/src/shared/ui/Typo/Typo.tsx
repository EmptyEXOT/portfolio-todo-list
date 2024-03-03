import React, {FC, ReactElement, ReactNode} from 'react';
import "./Typo.scss"
import {H1, H2, H3, H4, H5, H6, HxComponent} from "@/shared/ui/Typo/Header/H";
import P, {PComponent} from "@/shared/ui/Typo/Paragraph/P";

export enum TypoVariant {
    Primary = 'typo-color-primary',
    Secondary = 'typo-color-secondary',
    Alert = 'typo-color-alert',
    Warning = 'typo-color-warning',
    Successful = 'typo-color-successful',
    Light = 'typo-color-light'
}

export interface TypoProps {
    children: ReactNode
    className?: string | undefined;
    variant?: TypoVariant,
    bold?: boolean,
    italics?: boolean,
    underline?: boolean,
}

export type TypoComponent = FC<TypoProps> & {
    H1: HxComponent,
    H2: HxComponent,
    H3: HxComponent,
    H4: HxComponent,
    H5: HxComponent,
    H6: HxComponent,
    P: PComponent,
};

export const Typo: TypoComponent = (
    {
        children,
        variant,
        ...props
    }
): ReactElement => {
    return (
        <></>
    );
};

Typo.H1 = H1
Typo.H2 = H2
Typo.H3 = H3
Typo.H4 = H4
Typo.H5 = H5
Typo.H6 = H6

Typo.P = P
