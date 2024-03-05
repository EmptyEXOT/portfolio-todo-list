import {useContext} from "react";
import {ModalContext} from "@/shared/ui/Modal/ModalContext";

export const useModalContext = () => {
    return useContext(ModalContext)
}