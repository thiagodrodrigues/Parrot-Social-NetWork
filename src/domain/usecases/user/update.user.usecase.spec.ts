import { UserEntity } from "../../entities/user/socialnetwork.user.entity";
import createUserUsecase from "./create.user.usecase";
import updateUserUsecase from "./update.user.usecase";


test("Teste unitário updateClientUseCase", async ()=> {
    const user: UserEntity = {
        "idUser": 0,
	    "name": "Nome 1",
	    "email": "email1@abc.com.br",
	    "apartment": 101,
	    "password": "12345",
	    "photo": "https://t.ctcdn.com.br/P7-_JvQTS4U7-if6zHyXjyMiNQ8=/400x400/smart/i606944.png"
    };
await createUserUsecase.execute(user);
    const user2: UserEntity = {
        "idUser": 0,
	    "name": "Nome 2",
	    "email": "email2@abc.com.br",
	    "apartment": 102,
	    "password": "12345",
	    "photo": "https://t.ctcdn.com.br/P7-_JvQTS4U7-if6zHyXjyMiNQ8=/400x400/smart/i606944.png"
    };
    const user3: UserEntity = {
        "idUser": 0,
	    "name": "Nome 2",
	    "email": "email2@abc.com.br",
	    "apartment": 102,
	    "password": "12345",
	    "photo": "https://t.ctcdn.com.br/P7-_JvQTS4U7-if6zHyXjyMiNQ8=/400x400/smart/i606944.png"
    };
    expect(await updateUserUsecase.execute(user2)).toMatchObject(user3);
})