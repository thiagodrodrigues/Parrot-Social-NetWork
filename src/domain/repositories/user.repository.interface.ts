import { UserEntity } from "../entities/user/socialnetwork.user.entity";

export interface IUserRepository {
    readById(resourceId: number): Promise<UserEntity | undefined>,
    readByEmail(resourceId: string): Promise<UserEntity | undefined>,
    create(resource: UserEntity): Promise<UserEntity>,
    deleteById(resourceId: number): Promise<void>,
    list(): Promise<UserEntity[]>,
    updateById(resource: UserEntity): Promise<UserEntity | undefined>,
    readByWhere(user: string, pass: string): Promise<UserEntity | undefined>
}