import React, {FC, ReactNode} from 'react';
import {TodoModel} from "@/entities/Todo/model/types";

export interface TodoProps {
    children?: ReactNode
    className?: string
    todoInfo: TodoModel
    idx: number
}

const Todo: FC<TodoProps> = ({children, className, todoInfo, idx}) => {
    return (
        <div>
            <div>{idx}: {todoInfo.header}</div>
            <div>{todoInfo.description}</div>
        </div>
    );
};

export default Todo;