import {Typo} from '@/shared/ui/Typo/Typo';
import React from 'react';
import classNames from "classnames";

const MainPage = () => {
    return (
        <div className={classNames('pt-16 container mx-auto px-4 md:pt-20')}>
            <Typo.H1>Main Page</Typo.H1>
        </div>
    );
};

export default MainPage