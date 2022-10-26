import { UserEntity } from "../../entities/user/socialnetwork.user.entity";
import { IUserRepository } from "../../repositories/user.repository.interface";
import UserRepository from "../../../adapters/repositories/user.repository";
import { IUseCase } from "../usecase.interface";

class ReadUserUseCase implements IUseCase {
    constructor(private _repository: IUserRepository) {
    }
    async execute(data: { idUser: number }): Promise<UserEntity | undefined> {
        return await this._repository.readById(data.idUser);
    }
}

export default new ReadUserUseCase(
    UserRepository
);