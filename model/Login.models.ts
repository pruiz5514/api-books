export interface BodyRequestLoginBooks {
    email: string,
    password: string
}

export interface BodyResponseLoginBooks {
    message: string,
    data: Record<string, string>
}
