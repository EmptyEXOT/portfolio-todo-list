import React, {FC, ForwardedRef, ReactNode} from 'react';
import classNames from "classnames";

interface RootProps {
    className?: string
    children: ReactNode
    ref?: ForwardedRef<HTMLDivElement>
}

const Root: FC<RootProps> = ({children, className, ...props}) => {
    return (
        <div className={classNames(className)} {...props}>
            {children}
        </div>
    );
};

export default Root;