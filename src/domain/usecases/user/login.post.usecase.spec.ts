import { UserEntity } from "../../entities/user/socialnetwork.user.entity";
import createUserUsecase from "./create.user.usecase";
import LoginAuthUseCase from "./login.post.usecase";

jest.mock("../../../adapters/repositories/user.repository");

test("Teste Unitário LoginAuthUseCase", async () => {
    const userRepository: UserEntity = {
        "idUser": 0,
        "name": "sadafafa",
        "email": "aabbccddef@abc.com.br",
        "password": "12345",
        "apartment": 104,
        "photo": "https://t.ctcdn.com.br/P7-_JvQTS4U7-if6zHyXjyMiNQ8=/400x400/smart/i606944.png" 
    };
    await createUserUsecase.execute(userRepository);
    const userLogin = {
            "idUser": 0,
	        "email": "aabbccddef@abc.com.br",
	        "password": "12345"
    };
    const userLogado = {
        "user": {
            "idUser": 0,
            "name": "sadafafa",
            "email": "aabbccddef@abc.com.br",
            "apartment": 104,
            "password": "12345",
            "photo": "https://t.ctcdn.com.br/P7-_JvQTS4U7-if6zHyXjyMiNQ8=/400x400/smart/i606944.png"
        },
        "token": ""
    }
expect(await LoginAuthUseCase.execute(userLogin)).toMatchObject(userLogado)
})