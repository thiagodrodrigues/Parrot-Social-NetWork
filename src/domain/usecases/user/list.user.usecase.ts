import { UserEntity } from "../../entities/user/socialnetwork.user.entity";
import { IUserRepository } from "../../repositories/user.repository.interface";
import UserRepository from "../../../adapters/repositories/user.repository";
import { IUseCase } from "../usecase.interface";

class ListUserUseCase implements IUseCase {
    constructor(private _repository: IUserRepository) {
    }
    async execute(): Promise<UserEntity[] | undefined> {
        return await this._repository.list();
    }
}

export default new ListUserUseCase(
    UserRepository
);