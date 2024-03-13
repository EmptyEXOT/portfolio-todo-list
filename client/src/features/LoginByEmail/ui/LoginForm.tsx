import React, {FC, useCallback} from 'react';
import Input from "@/shared/ui/Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {loginActions} from "@/features/LoginByEmail/model/loginSlice";
import {userLoginInfoSelector} from "@/features/LoginByEmail/model/selectors";
import classNames from "classnames";
import {Typo, TypoVariant} from "@/shared/ui/Typo/Typo";
import Button, {ButtonVariant} from "@/shared/ui/Button/Button";
import {loginService} from "@/features/LoginByEmail/services/loginService";
import {ActionFunction, Form, redirect, useActionData, useNavigate} from "react-router-dom";

// export const loginAction: ActionFunction = async ({request, params}) => {
//     const formData: FormData = await request.formData();
//     const res = {email: formData.get('email') as string, password: formData.get('password') as string}
//     console.log(res)
//     return res
// }

interface LoginFormProps {
    className?: string,
}

const LoginForm: FC<LoginFormProps> = ({className}) => {
    const dispatch = useDispatch<any>()
    // const formData = useActionData() as {email: string, password: string};
    const userLoginInfo = useSelector(userLoginInfoSelector);
    const navigate = useNavigate();

    const onEmailChange = useCallback((value: string) => {
        dispatch(loginActions.setEmail(value))
    }, [userLoginInfo.email])

    const onPasswordChange = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [userLoginInfo.password])

    return (
        <div className={classNames(className, 'flex flex-col gap-4')}>
            <div className={classNames('flex flex-col gap-1')}>
                <Typo.H6>Your email</Typo.H6>
                <Input
                    name={'email'}
                    onChange={onEmailChange}
                    value={userLoginInfo.email}
                    placeholder={'example@mail.ru'}
                    className={classNames('bg-white py-1')}
                />
            </div>
            <div className={classNames('flex flex-col gap-1')}>
                <div className={classNames('flex justify-between')}>
                    <Typo.H6>Your password</Typo.H6>
                    <Typo.H6 variant={TypoVariant.Link}>Forgot password?</Typo.H6>
                </div>
                <Input
                    name={'password'}
                    onChange={onPasswordChange}
                    value={userLoginInfo.password}
                    placeholder={'your_password'}
                    className={classNames('bg-white py-1')}
                    type={'password'}
                />
            </div>
            <Button
                // type={'submit'}
                variant={ButtonVariant.Success}
                modifiers={{
                    rounded: true,
                    filled: true,
                }}
                className={classNames('p-2')}
                onClick={() => {
                    dispatch(loginService({
                        loginInfo: {
                            email: userLoginInfo.email,
                            password: userLoginInfo.password,
                        },
                        navigate: (path) => {navigate(path)}
                    }))
                }}
            >
                Login
            </Button>
            {userLoginInfo.errors && <div>{userLoginInfo.errors.message}</div>}
        </div>
    );
};

export default LoginForm;