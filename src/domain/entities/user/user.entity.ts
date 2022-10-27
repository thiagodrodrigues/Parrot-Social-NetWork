export interface IUserEntity {
    idUser: number,
    name: string,
    email: string,
    apartment: number,
    password: string,
    confirmPassword?: string,
    createdAt?: Date,
    updatedAt?: Date,
    photo?: string
}