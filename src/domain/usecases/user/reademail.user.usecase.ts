import { UserEntity } from "../../entities/user/socialnetwork.user.entity";
import { IUserRepository } from "../../repositories/user.repository.interface";
import UserRepository from "../../../adapters/repositories/user.repository";
import { IUseCase } from "../usecase.interface";

class ReadEmailUseCase implements IUseCase {

    constructor(private _repository: IUserRepository) {

    }

    async execute(data: { email: string }): Promise<UserEntity | undefined> {
        return await this._repository.readByEmail(data.email);
    }
}

export default new ReadEmailUseCase(
    UserRepository
);