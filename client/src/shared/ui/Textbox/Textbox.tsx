import React, {FC, useRef, useState} from 'react';
import classNames from "classnames";
import './Textbox.scss'
interface TextariaProps {
    placeholder: string
}

export const Textbox: FC<TextariaProps> = ({placeholder}) => {
    const [value, setValue] = useState<string>('')

    const ref = useRef<HTMLDivElement>(null)
    return (
        <div
            ref={ref}
            role={'textbox'}
            aria-readonly={false}
            textbox-placeholder={placeholder}
            contentEditable={true}
            className={classNames('text-wrap max-w-xl outline-0')}
        />
    );
};
