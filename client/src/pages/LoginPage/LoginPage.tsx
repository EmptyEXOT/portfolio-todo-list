import React from 'react';
import classNames from "classnames";
import {Navigate, useLoaderData, useNavigate} from "react-router-dom";
import Button, {ButtonVariant} from "@/shared/ui/Button/Button";
import BackIcon from './assets/BackIcon.svg'
import {Typo, TypoVariant} from "@/shared/ui/Typo/Typo";
import LoginForm from "@/features/LoginByEmail/ui/LoginForm";

const LoginPage = () => {
    const navigate = useNavigate();

    return (
        <div className={classNames('flex md:max-h-screen overflow-hidden')}>
            <div className={classNames('hidden md:flex h-screen bg-amber-400 w-[50%] justify-center')}>
                <img src="https://placehold.co/620x600/fbbe24/white?font=roboto&text=Login+Page+Image+Placeholeder"
                     alt=""/>
            </div>
            <div className={classNames('w-screen flex-col flex md:w-[50%] p-1 gap-2')}>
                <div className={classNames('flex justify-between')}>
                    <Button
                        variant={ButtonVariant.Default}
                        className={classNames('w-fit p-2 flex gap-2')}
                        modifiers={{rounded: true}}
                        onClick={() => {
                            navigate('/')
                        }}
                    >
                        <div className={classNames('self-center')}>
                            <BackIcon/>
                        </div>
                        <Typo.H5>Go back</Typo.H5>
                    </Button>
                    <Button
                        variant={ButtonVariant.Default}
                        className={classNames('w-fit p-2 flex gap-2')}
                        modifiers={{rounded: true}}
                        onClick={() => {
                            navigate('/signup')
                        }}
                    >
                        <Typo.H5>Create new account</Typo.H5>
                    </Button>
                </div>
                <div className={classNames('p-6 bg-neutral-200 w-[85%] self-center rounded-md border border-solid border-neutral-400 my-auto')}>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;