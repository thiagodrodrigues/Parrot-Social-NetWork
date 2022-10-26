import { UserEntity } from "../../entities/user/socialnetwork.user.entity";
import { IUserRepository } from "../../repositories/user.repository.interface";
import UserRepository from "../../../adapters/repositories/user.repository";
import { IUseCase } from "../usecase.interface";

export class CreateUserUseCase implements IUseCase {
    constructor(private _repository: IUserRepository) {
    }
    async execute(data: UserEntity): Promise<UserEntity | undefined> {
        return await this._repository.create(data);
    }
}

export default new CreateUserUseCase(
    UserRepository
);