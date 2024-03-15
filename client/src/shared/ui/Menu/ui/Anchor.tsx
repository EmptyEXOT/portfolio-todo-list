import React, {FC, ReactNode} from 'react';
import classNames from "classnames";

interface AnchorProps {
    children: ReactNode,
    className?: string,
}

const Anchor: FC<AnchorProps> = ({children, className}) => {
    return (
        <div className={classNames(className, '')}>
            {children}
        </div>
    );
};

export default Anchor;