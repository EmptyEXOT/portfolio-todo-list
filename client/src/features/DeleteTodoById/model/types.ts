export interface EditTodoModel {
    id: number | null
    title: string,
    description: string,
    isLoading: boolean,
    errors: EditTodoError | null
}

export interface EditTodoError {
    message: string,
    status: number
}