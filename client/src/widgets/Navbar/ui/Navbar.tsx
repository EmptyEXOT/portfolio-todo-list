import React, {createContext, FC, ReactNode, useState} from 'react';
import classNames from "classnames";
import cls from "./Navbar.module.scss"
import Menu from "@/widgets/Navbar/ui/Menu/Menu";
import Button, {ButtonVariant} from "@/shared/ui/Button/Button";
import Burger from "@/shared/ui/Burger/Burger";
import {Typo, TypoVariant} from '@/shared/ui/Typo/Typo';
import {Link} from "react-router-dom";
import {Navigation} from "@/widgets/Navbar/ui/Navigation/Navigation";
import Logo from "@/shared/assets/Logo.svg"

interface HeaderProps {
    children?: ReactNode
    className?: string | undefined;
}

export const NavbarContext = createContext<{isOpen: boolean, setIsOpen: (value: (((prevState: boolean) => boolean) | boolean)) => void}>({isOpen: false, setIsOpen: () => {}})

export const Navbar: FC<HeaderProps> = (
    {
        children,
        className,
        ...props
    }
) => {
    const [isExtended, setIsExtended] = useState<boolean>(false)

    return (
        <NavbarContext.Provider value={{isOpen: isExtended, setIsOpen: setIsExtended}}>
            <div
                className={classNames('bg-neutral-100 md:bg-neutral-200 z-20 bg-opacity-100 md:bg-opacity-50 backdrop-blur-md', cls.navbar)}>
                <div className={classNames('container flex justify-between mx-auto px-4 py-2 z-20')}>
                    <div className={classNames('flex gap-6')}>
                        <div className={classNames('flex flex-col justify-center w-full')}>
                            <Logo></Logo>
                        </div>
                        <Navigation className={classNames('hidden')}/>
                    </div>
                    <div className={classNames('flex gap-2')}>
                        <Link
                            className={classNames('hidden md:flex flex-col justify-center border-2 border-black py-2 px-4 rounded-md h-max self-center')}
                            to={'login'}>
                            <Typo.H3 className={classNames('text-nowrap')}>Sign In</Typo.H3>
                        </Link>
                        <Link
                            className={classNames('hidden md:flex flex-col justify-center border-2 border-black py-2 px-4 rounded-md h-max self-center bg-black')}
                            to={'signup'}>
                            <Typo.H3 className={classNames('text-nowrap')} variant={TypoVariant.Light}>Sign Up</Typo.H3>
                        </Link>
                        <Button onClick={() => setIsExtended(prevState => !prevState)}
                                variant={ButtonVariant.Default}
                                className={classNames('pe-0 md:hidden')}>
                            <Burger isOpen={isExtended}/>
                        </Button>
                    </div>
                </div>
            </div>
            <Menu isOpen={isExtended} className={classNames('md:hidden')}/>
        </NavbarContext.Provider>
    );
};