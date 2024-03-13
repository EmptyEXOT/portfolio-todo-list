import React, {FC, ReactNode, useEffect, useState} from 'react';
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {StateSchema} from "@/shared/store/types";
import Todo from "@/entities/Todo/ui/Todo";
import {getTodos} from "@/entities/Todo/model/todoSlice";
import {fetchAllTodosService} from "@/entities/Todo/services/fetchAllTodosService";
import {ModalProvider} from "@/shared/ui/Modal/ModalProvider";
import cls from "@/widgets/Drawer/ui/Drawer.module.scss";
import AddTodo from "@/features/AddTodo/AddTodo";
import {Modal} from "@/shared/ui/Modal/Modal";
import EditTodoForm from "@/features/EditTodoById/ui/EditTodoForm";

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
    const todosError = useSelector((state: StateSchema) => state.todos.error);

    useEffect(() => {
        dispatch(fetchAllTodosService())
        console.log(todos)
    }, []);

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    if (todosError) {
        return <div>{todosError.message}</div>
    }

    return (
        isTodosLoading ? <p>loading...</p> : <ModalProvider setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}>
            <Modal
                className={classNames(
                    cls.shadow,
                    'w-[70%] rounded-xl flex flex-col bg-neutral-200 p-4 shadow-sm shadow-neutral-200',
                    props.className
                )}>
                <EditTodoForm setIsModalOpen={setIsModalOpen}/>
            </Modal>
            <div
                className={classNames(
                    'md:w-[85%] w-screen px-2 md:px:0 flex flex-col gap-3',
                    props.className
                )}
            >
                {todos.map((todo, idx) =>
                    <Todo todoInfo={todo} idx={idx} key={idx} id={todo.id} setIsModalOpen={setIsModalOpen}/>
                )}
            </div>
        </ModalProvider>

    );
};

export default App;