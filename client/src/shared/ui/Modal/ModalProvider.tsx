import React, {FC, ReactNode} from 'react';
import {ModalContext, TModalContext} from "@/shared/ui/Modal/ModalContext";

interface ModalProviderProps extends TModalContext {
    children: ReactNode
}

export const ModalProvider: FC<ModalProviderProps> = ({isModalOpen, setIsModalOpen, children}) => {
    return (
        <ModalContext.Provider value={{isModalOpen, setIsModalOpen}}>
            {children}
        </ModalContext.Provider>
    );
};
