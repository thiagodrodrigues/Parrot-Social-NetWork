export interface IUserEntity {
    idUser: number,
    name: string,
    email: string,
    apartment: number,
    password: string,
    confirmPassword: string,
    created_At: Date,
    updated_At: Date,
    photo?: string
}