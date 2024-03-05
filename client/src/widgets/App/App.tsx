import React, {FC, ReactNode} from 'react';
import classNames from "classnames";
import cls from "./App.module.scss"
import Todo from "@/entities/Todo/ui/Todo";
import {useAppDispatch, useAppSelector} from "@/shared/store/hooks";
import {selectTodo} from "@/entities/Todo/model/selectors";
import {Modal} from "@/shared/ui/Modal/Modal";

interface AppProps {
    children?: ReactNode
    className?: string | undefined;
}

const App: FC<AppProps> = (
    {
        children,
        ...props
    }
) => {
    const dispatch = useAppDispatch()
    const todos = useAppSelector(selectTodo);

    return (
        <div
            className={classNames(
                'md:w-[85%] w-screen px-2 md:px:0',
                props.className
            )}
        >
            {todos.map((todo, idx) =>
                <Todo todoInfo={todo} idx={idx+1} key={idx}/>
            )}
        </div>
    );
};

export default App;