import React, {ButtonHTMLAttributes, FC, ReactNode} from 'react';
import classNames from "classnames";
import cls from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    border?: boolean;
    fill?: boolean;
    disabled?: boolean;
}

const Button: FC<ButtonProps> = ({children, className, border, fill, disabled, ...props}) => {
    return (
        <button onClick={() => {console.log('press')}} disabled={disabled} {...props}
                className={classNames(cls.button, className, border
                        ? 'border-black rounded border-solid' : '',
                    fill
                        ? 'bg-black text-white' : '',
                    disabled ? 'bg-blue-900 opacity-50' : '')}>
            {children}
        </button>
    );
};


export default Button;