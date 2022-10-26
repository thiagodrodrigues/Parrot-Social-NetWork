import { UserEntity } from "../entities/user/socialnetwork.user.entity";

export interface IUserRepository {
    readById(resourceId: number): Promise<UserEntity | undefined>,
    create(resource: UserEntity): Promise<UserEntity>,
    deleteById(resourceId: number): Promise<void>,
    list(): Promise<UserEntity[]>,
    updateById(resource: UserEntity): Promise<UserEntity | undefined>
}