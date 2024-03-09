import React, {FC, ReactNode, useCallback} from 'react';
import classNames from "classnames";
import Button, {ButtonVariant} from "@/shared/ui/Button/Button";
import {Typo, TypoVariant} from "@/shared/ui/Typo/Typo";
import {addTodoActions} from "@/features/AddTodo/model/addTodoSlice";
import Input from "@/shared/ui/Input/Input";
import {addTodoService} from "@/features/AddTodo/services/addTodoService";
import {useDispatch, useSelector} from "react-redux";
import {StateSchema} from "@/shared/store/types";

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

    const dispatch = useDispatch<any>()
    const newTodo = useSelector((state: StateSchema) => state.newTodo);
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
        dispatch(addTodoService({title: newTodo.title, description: newTodo.description}))

        dispatch(addTodoActions.reset())
        setIsModalOpen(false);
    }, [newTodo.title, newTodo.description])

    return (
        <div className={classNames('flex flex-col gap-2 ')}>
            <Input
                autoFocus={true}
                // ref={headerInputRef}
                value={newTodo.title}
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