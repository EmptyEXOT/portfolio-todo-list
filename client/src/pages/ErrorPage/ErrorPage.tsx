import React from 'react';
import {useRouteError} from "react-router-dom";
import classNames from "classnames";

const ErrorPage = () => {
    const {status, message} = useRouteError() as { status?: number, message?: string }

    return (
        <div className={classNames('pt-16 container mx-auto px-4 md:pt-20')}>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{status || message}</i>
            </p>
        </div>
    );
};

export default ErrorPage;