import React, {FC, ReactNode} from 'react';
import {TodoModel} from "@/entities/Todo/model/types";
import Button, {ButtonVariant} from "@/shared/ui/Button/Button";
import classNames from "classnames";
import {useDispatch} from "react-redux";
import {editTodoActions} from "@/features/EditTodoById/model/editTodoSlice";
import {deleteTodoService} from "@/features/DeleteTodoById/services/deleteTodoService";

export interface TodoProps {
    children?: ReactNode
    className?: string
    todoInfo: TodoModel
    idx: number
    id: number
    setIsModalOpen: (value: (((prevState: boolean) => boolean) | boolean)) => void
}

const Todo: FC<TodoProps> = ({
                                 children,
                                 className,
                                 todoInfo,
                                 idx,
                                 id,
                                 setIsModalOpen
                             }) => {
    const dispatch = useDispatch<any>()

    const onStartEdit = () => {
        dispatch(editTodoActions.setEdit(id));
        dispatch(editTodoActions.editTitle(todoInfo.title))
        dispatch(editTodoActions.editDescription(todoInfo.description))
        setIsModalOpen(true);
        console.log('open')
    }

    const onDelete = () => {
        dispatch(deleteTodoService(id))
    }

    return (
        <div className={classNames('flex justify-between')}>
            <div>
                <div>{idx}: {todoInfo.title}</div>
                <div>{todoInfo.description}</div>
            </div>
            <div className={classNames('flex gap-3')}>
                <Button
                    variant={ButtonVariant.Default}
                    modifiers={{outline: true,}}
                    className={classNames('px-2 py-1')}
                    onClick={() => {onStartEdit()}}
                >
                    Edit
                </Button>
                <Button
                    variant={ButtonVariant.Alert}
                    modifiers={{outline: true,}}
                    className={classNames('px-2 py-1')}
                    onClick={() => {onDelete()}}
                >
                    Delete
                </Button>
            </div>
        </div>
    );
};

export default Todo;