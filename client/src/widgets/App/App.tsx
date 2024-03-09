import React, {FC, ReactNode, useEffect} from 'react';
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {StateSchema} from "@/shared/store/types";
import Todo from "@/entities/Todo/ui/Todo";
import {getTodos} from "@/entities/Todo/model/todoSlice";
import {fetchAllTodosService} from "@/entities/Todo/services/fetchAllTodosService";

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
    const dispatch = useDispatch<any>()
    const todos = useSelector(getTodos.selectAll)
    const isTodosLoading = useSelector((state: StateSchema) => state.todos.isLoading)

    useEffect(() => {
        dispatch(fetchAllTodosService())
        console.log(todos)
    }, []);

    return (
        isTodosLoading ? <p>loading...</p> :
        <div
            className={classNames(
                'md:w-[85%] w-screen px-2 md:px:0',
                props.className
            )}
        >
            {todos.map((todo, idx) =>
                <Todo todoInfo={todo} idx={idx} key={idx}/>
            )}
        </div>
    );
};

export default App;