import React, {FC, ReactNode} from 'react';
import Button, {ButtonVariant} from "@/shared/ui/Button/Button";
import classNames from "classnames";
import {useDispatch} from "react-redux";
import {signoutService} from "@/features/Signout/services/signoutService";
import {useNavigate} from "react-router-dom";

interface SignoutButtonProps {
    className?: string,
    children: ReactNode,
}

const SignoutButton: FC<SignoutButtonProps> = ({children, className}) => {
        const dispatch = useDispatch<any>()
        const navigate = useNavigate();
        const onSignOut = () => {
            dispatch(signoutService({
                signOutBody: {
                    email: localStorage.getItem('email'),
                    token: localStorage.getItem('token'),
                },
                navigate: (path: string) => {
                    navigate(path)
                }
            }))
        }

        return (
            <Button
                className={classNames(className, '')}
                variant={ButtonVariant.Alert}
                onClick={onSignOut}
            >
                {children}
            </Button>
        );
    }
;

export default SignoutButton;