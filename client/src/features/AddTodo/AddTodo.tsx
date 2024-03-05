import React, {FC, ReactNode} from 'react';
import classNames from "classnames";
import Button from "@/shared/ui/Button/Button";
import {Typo, TypoVariant} from "@/shared/ui/Typo/Typo";
import {useAppDispatch, useAppSelector} from "@/shared/store/hooks";
import {todoActions} from "@/entities/Todo/model/todoSlice";
import {addTodoActions} from "@/features/AddTodo/model/addTodoSlice";
import Input from "@/shared/ui/Input/Input";
import {selectAddTodo} from "@/features/AddTodo/model/selectors";

interface AddTodoProps {
    children?: ReactNode
    className?: string | undefined;
}

const AddTodo: FC<AddTodoProps> = (
    {
        children,
        ...props
    }
) => {
    const dispatch = useAppDispatch()
    const newTodo = useAppSelector(selectAddTodo);
    const onHeaderChange = (value: string) => {
        dispatch(addTodoActions.setHeader(value));
    }

    const onDescriptionChange = (value: string) => {
        dispatch(addTodoActions.setDescription(value));
    }

    return (
        <div className={classNames('flex flex-col gap-2 ')}>
            <Input
                onChange={onHeaderChange}
                placeholder={'Task Name'}
                className={classNames('bg-inherit placeholder:text-neutral-600 resize-none')}/>
            <Input
                onChange={onDescriptionChange}
                placeholder={'Task description'}
                className={classNames('bg-inherit placeholder:text-neutral-600 resize-none')}/>
            <div className={classNames('flex gap-5')}>
                <Button
                    border={true} className={classNames('p-2')}
                    onClick={() => {
                        dispatch(todoActions.addTask(
                            {
                                deadline: '',
                                isFinished: false,
                                created: '',
                                description: newTodo.description,
                                header: newTodo.header
                            }))
                    }}
                >
                    <Typo.H4 variant={TypoVariant.Successful}>Add</Typo.H4>
                </Button>
                <Button
                    border={true} className={classNames('p-2')}
                >
                    <Typo.H4 variant={TypoVariant.Alert}>Cancel</Typo.H4>
                </Button>
            </div>
        </div>
    );
};

export default AddTodo;