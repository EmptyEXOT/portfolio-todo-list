export interface AddTodoModel {
    id: 0,
    title: string,
    description: string,
    isLoading: boolean,
    errors: AddTodoError | null
}

export interface AddTodoError {
    message: string,
    status: number
}