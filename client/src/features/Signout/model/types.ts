export interface LoginModel {
    email: string,
    password: string,
    isLoading: boolean,
    errors: LoginError | null
}

export interface LoginError {
    message: string,
    status: number
}