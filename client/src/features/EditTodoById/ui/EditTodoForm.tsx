import React, {FC, ReactNode, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {StateSchema} from "@/shared/store/types";
import {addTodoActions} from "@/features/AddTodo/model/addTodoSlice";
import {addTodoService} from "@/features/AddTodo/services/addTodoService";
import classNames from "classnames";
import Input from "@/shared/ui/Input/Input";
import Button, {ButtonVariant} from "@/shared/ui/Button/Button";
import {Typo, TypoVariant} from "@/shared/ui/Typo/Typo";
import {editTodoActions} from "@/features/EditTodoById/model/editTodoSlice";
import {editTodoService} from "@/features/EditTodoById/services/editTodoService";

interface EditTodoProps {
    children?: ReactNode
    className?: string | undefined;
    setIsModalOpen: (value: (((prevState: boolean) => boolean) | boolean)) => void
}

const EditTodoForm: FC<EditTodoProps> = (
    {
        children,
        setIsModalOpen,
        className,
        ...props
    }
) => {

    const dispatch = useDispatch<any>()
    const editedTodo = useSelector((state: StateSchema) => state.editTodo);
    const onTitleChange = (value: string) => {
        dispatch(editTodoActions.editTitle(value));
    }

    const onDescriptionChange = (value: string) => {
        dispatch(editTodoActions.editDescription(value));
    }

    const onReset = useCallback(() => {
        dispatch(editTodoActions.reset())
        setIsModalOpen(false);
    }, [])

    const onAdd = useCallback(() => {
        dispatch(editTodoService({title: editedTodo.title, description: editedTodo.description, id: editedTodo.id}))

        dispatch(editTodoActions.reset())
        setIsModalOpen(false);
    }, [editedTodo.title, editedTodo.description, editedTodo.id])

    return (
        <div className={classNames('flex flex-col gap-2 ')}>
            <Input
                autoFocus={true}
                // ref={headerInputRef}
                value={editedTodo.title}
                onChange={onTitleChange}
                placeholder={'Task Name'}
                className={classNames('bg-inherit placeholder:text-neutral-600 resize-none')}/>
            <Input
                // ref={descriptionInputRef}
                value={editedTodo.description}
                onChange={onDescriptionChange}
                placeholder={'Task description'}
                className={classNames('bg-inherit placeholder:text-neutral-600 resize-none')}/>
            <div className={classNames('flex gap-5')}>
                <Button
                    variant={ButtonVariant.Success}
                    modifiers={{outline: true, rounded: true}}
                    className={classNames('p-2')}
                    onClick={() => {
                        onAdd()
                    }}
                >
                    <Typo.H4 variant={TypoVariant.Successful}>Add</Typo.H4>
                </Button>
                <Button
                    onClick={() => {
                        onReset()
                    }}
                    variant={ButtonVariant.Alert}
                    modifiers={{outline: true, rounded: true}}
                    className={classNames('p-2')}
                >
                    <Typo.H4 variant={TypoVariant.Alert}>Cancel</Typo.H4>
                </Button>
            </div>
        </div>
    )
};

export default EditTodoForm;