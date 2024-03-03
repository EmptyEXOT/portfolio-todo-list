import React, {FC, ReactNode, useEffect, useRef, useState} from 'react';
import Root from "@/shared/ui/Dropdown/Root/Root";
import Control from "@/shared/ui/Dropdown/Control/Control";
import Menu from "@/shared/ui/Dropdown/Menu/Menu";
import classNames from "classnames";

interface DropdownProps {
    children?: ReactNode
    control: ReactNode
    className?: string | undefined;
}

const Dropdown: FC<DropdownProps> = (
    {
        children,
        className,
        control,
        ...props
    }
) => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const ref = useRef<HTMLButtonElement>(null);

    const handleClick = () => {
        setOpen(prevState => !prevState)
    }

    useEffect(() => {
        ref.current && (ref.current.onclick = handleClick);
    }, []);

    return (
        <Root className={classNames(className)}>
            <Control className={classNames('px-0 py-0 text-start')} ref={ref}>{control}</Control>
            {
                isOpen && (
                    <Menu>
                        {children}
                    </Menu>
                )
            }
        </Root>
    );
};

export default Dropdown;