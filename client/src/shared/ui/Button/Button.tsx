import React, {ButtonHTMLAttributes, FC, ReactNode} from 'react';
import classNames from "classnames";
import cls from './Button.module.scss'

export enum ButtonVariant {
    Default = 'default',
    Alert = 'alert',
    Success = 'success',
    Warning = 'warning',
}

export interface ButtonModifiers {
    default?: boolean,
    outline?: boolean,
    filled?: boolean,
    disabled?: boolean,
    rounded?: boolean,
    circle?: boolean,
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    modifiers?: ButtonModifiers;
    variant: ButtonVariant;
}

const Button: FC<ButtonProps> = ({children, className, modifiers, variant, ...props}) => {
    return (
        <button disabled={modifiers?.disabled} {...props}
                className={classNames(
                    cls.button,
                    cls[variant],
                    className,
                    modifiers?.outline && cls.border,
                    modifiers?.filled && cls.filled,
                    modifiers?.rounded && cls.rounded,
                    modifiers?.circle && cls.circle,
                    modifiers?.disabled && 'bg-blue-900 opacity-50')}>
            {children}
        </button>
    );
};


export default Button;