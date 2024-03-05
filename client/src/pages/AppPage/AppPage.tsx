import React from 'react';
import classNames from "classnames";
import {Drawer} from "@/widgets/Drawer/ui";
import App from "@/widgets/App/App";
import TuneIcon from './assets/Tune.svg'
const AppPage = () => {
    return (
        <div className={classNames('w-screen h-screen flex')}>
            <Drawer/>
            <div className={classNames('h-screen w-full')}>
                <div className={classNames('flex items-center justify-end w-full px-4 py-2')}>
                    <TuneIcon />
                </div>
                <div className={classNames('flex justify-center')}>
                    <App/>
                </div>
            </div>
        </div>
    );
};

export default AppPage;