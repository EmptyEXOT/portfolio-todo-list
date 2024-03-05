import React, {FC, ReactNode, useState} from 'react';
import classNames from "classnames";
import {Typo} from "@/shared/ui/Typo/Typo";
import NotificationIcon from './assets/Notification.svg'
import MenuOpenIcon from './assets/MenuOpen.svg'
import Button from "@/shared/ui/Button/Button";
import AddCircleIcon from './assets/AddCircle.svg';
import {Modal} from "@/shared/ui/Modal/Modal";
import {ModalProvider} from "@/shared/ui/Modal/ModalProvider";
import AddTodo from "@/features/AddTodo/AddTodo";
import cls from './Drawer.module.scss'

interface DrawerProps {
    children?: ReactNode
    className?: string | undefined;
}

export const Drawer: FC<DrawerProps> = (
    {
        children,
        ...props
    }
) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(true)
    const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
    return (
        <ModalProvider setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}>
            <Modal
                className={classNames(
                    cls.shadow,
                    'w-[70%] rounded-xl flex flex-col bg-neutral-200 p-4 shadow-sm shadow-neutral-200',
                    props.className
                )}>
                <AddTodo/>
            </Modal>
            <div
                className={classNames('transition-all duration-300', isDrawerOpen ? 'top-0 bottom-0 bg-black opacity-30 w-screen absolute md:hidden' : 'bg-black opacity-0')}
                onClick={(e) => {
                    if (isDrawerOpen) {
                        setIsDrawerOpen(false)
                    }
                }}>
            </div>
            <Button
                onClick={() => setIsDrawerOpen(prevState => !prevState)}
                className={classNames('p-2 absolute transition-all', isDrawerOpen ? 'left-[75vw] md:left-[23.5vw]' : 'left-[0]')}
            >
                <MenuOpenIcon/>
            </Button>
            <div className={classNames(
                'md:relative absolute transition-all flex flex-col bg-amber-400',
                'h-screen overflow-hidden',
                props.className,
                isDrawerOpen ? 'w-[75vw] md:w-[30vw] px-2' : 'w-0 px-0'
            )}>
                <div id={'controls'} className={classNames('flex justify-between items-center')}>
                    <Typo.H3>Username</Typo.H3>
                    <Button
                        className={classNames('p-2')}
                    >
                        <NotificationIcon/>
                    </Button>
                </div>
                <div id={'controls'} className={classNames('flex justify-between items-center')}>
                    <Typo.H3>AddTask</Typo.H3>
                    <Button
                        // onClick={() => dispatch(todoActions.addTask({created: '', description: 'new task', header: 'New tas Header', isFinished: false, deadline: ''}))}
                        onClick={() => setIsModalOpen(true)}
                        className={classNames('p-2')}
                    >
                        {<AddCircleIcon/>}
                    </Button>
                </div>
            </div>
        </ModalProvider>
    );
};
