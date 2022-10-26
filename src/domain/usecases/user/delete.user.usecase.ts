import { IUserRepository } from "../../repositories/user.repository.interface";
import UserRepository from "../../../adapters/repositories/user.repository";
import { IUseCase } from "../usecase.interface";

class DeleteUserUseCase implements IUseCase {
    constructor(private _repository: IUserRepository) {
    }
    async execute(data: { idUser: number }): Promise<void> {
        return await this._repository.deleteById(data.idUser);
    }
}

export default new DeleteUserUseCase(
    UserRepository
);