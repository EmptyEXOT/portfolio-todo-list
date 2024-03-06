import React, {FC, ReactNode, useCallback, useContext, useRef} from 'react';
import classNames from "classnames";
import Button, {ButtonVariant} from "@/shared/ui/Button/Button";
import {Typo, TypoVariant} from "@/shared/ui/Typo/Typo";
import {useAppDispatch, useAppSelector} from "@/shared/store/hooks";
import {todoActions} from "@/entities/Todo/model/todoSlice";
import {addTodoActions} from "@/features/AddTodo/model/addTodoSlice";
import Input from "@/shared/ui/Input/Input";
import {selectAddTodo} from "@/features/AddTodo/model/selectors";
import {ModalContext} from "@/shared/ui/Modal/ModalContext";

interface AddTodoProps {
    children?: ReactNode
    className?: string | undefined;
    setIsModalOpen: (value: (((prevState: boolean) => boolean) | boolean)) => void
}

const AddTodo: FC<AddTodoProps> = (
    {
        children,
        setIsModalOpen,
        ...props
    }
) => {

    // const headerInputRef = useRef<HTMLInputElement>(null)
    // const descriptionInputRef = useRef<HTMLInputElement>(null)

    const dispatch = useAppDispatch()
    const newTodo = useAppSelector(selectAddTodo);
    const onHeaderChange = (value: string) => {
        dispatch(addTodoActions.setHeader(value));
    }

    const onDescriptionChange = (value: string) => {
        dispatch(addTodoActions.setDescription(value));
    }

    const onReset = useCallback(() => {
        dispatch(addTodoActions.reset())
        setIsModalOpen(false);
    }, [])

    const onAdd = useCallback(() => {
        dispatch(todoActions.addTask({
            deadline: '',
            isFinished: false,
            created: '',
            description: newTodo.description,
            header: newTodo.header
        }))
        dispatch(addTodoActions.reset())
        setIsModalOpen(false);
    }, [newTodo])

    return (
        <div className={classNames('flex flex-col gap-2 ')}>
            <Input
                autoFocus={true}
                // ref={headerInputRef}
                value={newTodo.header}
                onChange={onHeaderChange}
                placeholder={'Task Name'}
                className={classNames('bg-inherit placeholder:text-neutral-600 resize-none')}/>
            <Input
                // ref={descriptionInputRef}
                value={newTodo.description}
                onChange={onDescriptionChange}
                placeholder={'Task description'}
                className={classNames('bg-inherit placeholder:text-neutral-600 resize-none')}/>
            <div className={classNames('flex gap-5')}>
                <Button
                    variant={ButtonVariant.Success}
                    modifiers={{outline: true, rounded: true}}
                    className={classNames('p-2')}
                    onClick={() => {onAdd()}}
                >
                    <Typo.H4 variant={TypoVariant.Successful}>Add</Typo.H4>
                </Button>
                <Button
                    onClick={() => {onReset()}}
                    variant={ButtonVariant.Alert}
                    modifiers={{outline: true, rounded: true}}
                    className={classNames('p-2')}
                >
                    <Typo.H4 variant={TypoVariant.Alert}>Cancel</Typo.H4>
                </Button>
            </div>
        </div>
    );
};

export default AddTodo;