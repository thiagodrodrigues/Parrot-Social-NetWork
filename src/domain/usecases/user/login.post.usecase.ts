import { IUserRepository } from "../../repositories/user.repository.interface";
import { IUseCase } from "../usecase.interface";
import UserRepository from "../../../adapters/repositories/user.repository";
import jwt from 'jsonwebtoken';

export class LoginAuthUseCase implements IUseCase {
    constructor(private _repository: IUserRepository){

    }

    async execute(data: { email: string, password: string }) {
        const users = await this._repository.readByWhere(data.email, data.password);

        if(users){

            const token = jwt.sign(users, String(process.env.SECRET_KEY), {
                expiresIn: '2 days'
            });

            return {
                user: users,
                token: token
            };
        }

        return;
    }
}

export default new LoginAuthUseCase(
    UserRepository
);