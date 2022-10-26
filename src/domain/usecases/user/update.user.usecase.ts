import { UserEntity } from "../../entities/user/socialnetwork.user.entity";
import { IUserRepository } from "../../repositories/user.repository.interface";
import UserRepository from "../../../adapters/repositories/user.repository";
import { IUseCase } from "../usecase.interface";

class UpdateUserUseCase implements IUseCase {
    constructor(private _repository: IUserRepository) {
    }
    async execute(data: UserEntity): Promise<UserEntity | undefined> {
        return await this._repository.updateById(data);
    }
}

export default new UpdateUserUseCase(
    UserRepository
);