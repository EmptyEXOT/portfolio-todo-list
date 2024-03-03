import React, {forwardRef, ReactNode} from 'react';
import classNames from "classnames";

export interface ControlProps {
    className?: string
    children: ReactNode
}

type ControlRef = HTMLButtonElement;

const Control = forwardRef<ControlRef, ControlProps>(function Control({children, className, ...props}, ref) {
    return (
        <button
            ref={ref}
            className={classNames(className, 'w-full')}
            {...props}
        >
            {children}
        </button>
    );
})

export type ControlType = ReturnType<typeof Control>

export default Control;