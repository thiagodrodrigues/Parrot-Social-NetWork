import { UserEntity } from "../../entities/user/socialnetwork.user.entity";
import { UserRepository } from "../../../adapters/repositories/user.repository";
import createUserUsecase from "./create.user.usecase";

jest.mock("../../../adapters/repositories/user.repository");

const createRepositoryMock = UserRepository as jest.Mock<UserRepository>

test("Teste Unitário createUserUseCase", async () => {
    const userRepository = new createRepositoryMock() as jest.Mocked<UserRepository>
    userRepository.create.mockRejectedValue({
        "idUser": 1,
        "name": "sadafafa",
        "email": "aabbccddef@abc.com.br",
        "password": "12345",
        "apartment": 104,
        "photo": "https://t.ctcdn.com.br/P7-_JvQTS4U7-if6zHyXjyMiNQ8=/400x400/smart/i606944.png" 
    });
    const user: UserEntity = {
            "idUser": 1,
            "name": "sadafafa",
	        "email": "aabbccddef@abc.com.br",
	        "password": "12345",
	        "apartment": 104,
	        "photo": "https://t.ctcdn.com.br/P7-_JvQTS4U7-if6zHyXjyMiNQ8=/400x400/smart/i606944.png" 
    };
expect(await createUserUsecase.execute(user)).toMatchObject(user)
})