import {createContext, Dispatch, SetStateAction} from "react";

export type TModalContext = { isModalOpen: boolean, setIsModalOpen: Dispatch<SetStateAction<boolean>> }

export const ModalContext = createContext<TModalContext>({isModalOpen: false, setIsModalOpen: () => {}})

