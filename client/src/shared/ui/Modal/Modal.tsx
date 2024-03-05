import React, {FC, ReactNode, useEffect} from 'react';
import classNames from "classnames";
import cls from "./Modal.module.scss"
import {useModalContext} from "@/shared/ui/Modal/useModalContext";

interface ModalProps {
    children?: ReactNode
    className?: string | undefined;
}

export const Modal: FC<ModalProps> = (
    {
        children,
        ...props
    }
) => {
    const {setIsModalOpen, isModalOpen} = useModalContext()

    const onEscapeKeydown = (event: any) => {
        if (event.key === 'Escape') setIsModalOpen(false)
    }

    useEffect(() => {
        window.addEventListener('keydown', onEscapeKeydown)
        console.log('open')
        if (!isModalOpen) {
            window.removeEventListener('keydown', onEscapeKeydown)
        }
        return () => window.removeEventListener('keydown', onEscapeKeydown)
    }, [isModalOpen]);

    return (
        <>
            <div onClick={() => {
                setIsModalOpen(false)
            }}
                 className={classNames(isModalOpen ? ('fixed w-screen h-screen top-0 bottom-0 z-40') : 'hidden')}/>
            <div className={classNames(cls.modal, isModalOpen ? 'fixed z-50' : 'hidden', props.className)}>
                {children}
            </div>
        </>

    );
};
