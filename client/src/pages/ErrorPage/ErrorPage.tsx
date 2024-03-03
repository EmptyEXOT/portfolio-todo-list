import React from 'react';
import {useRouteError} from "react-router-dom";
import {App} from "@/app";
import classNames from "classnames";

const ErrorPage = () => {
    const {status, message} = useRouteError() as { status?: number, message?: string }

    return (
        <App>
            <div className={classNames('pt-16 container mx-auto px-4 md:pt-20')}>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{status || message}</i>
                </p>
            </div>
        </App>
    );
};

export default ErrorPage;