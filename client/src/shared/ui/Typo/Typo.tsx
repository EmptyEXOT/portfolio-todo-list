import React, {FC, ReactNode} from 'react';
import cls from './Typo.module.scss'
import classNames from "classnames";

export interface TypoProps {
    children: ReactNode;
    fontFamily?: string;
}

export enum HSize {
    h1 = 'h1',
    h2 = 'h2',
    h3 = 'h3',
    h4 = 'h4',
    h5 = 'h5',
    h6 = 'h6',
}

interface PProps extends TypoProps {
}
interface HProps extends TypoProps {
    size: HSize
}

type TypoComponent = FC<TypoProps> & {
    P: PComponent,
    H: HComponent,
}
type PComponent = FC<PProps>
type HComponent = FC<HProps>

export const Typo: TypoComponent = () => {
    return (
        <>

        </>
    );
};

const P: PComponent = ({children, ...props}) => {
    return (
      <p className={classNames(cls.typo)}>
          {children}
      </p>
    );
}

const H: HComponent = ({children, ...props}) => {
    return (
        <props.size className={classNames(cls.typo)} {...props}>
            {children}
        </props.size>
    )
}

Typo.P = P;
Typo.H = H;

