export interface IPostEntity {
    idPost?: number,
    content: string,
    createdAt?: Date,
    updatedAt?: Date,
    idUser: number
}