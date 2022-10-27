import { UserEntity } from "../../entities/user/socialnetwork.user.entity";
import readEmailUsecase from "./reademail.user.usecase";
import createUserUsecase from "./create.user.usecase";

test("Teste unitário readEmailUseCase", async ()=> {
    const user: UserEntity = {
        "idUser": 0,
	    "name": "sadafaaaaafa",
	    "email": "aabbcczz@abc.com.br",
	    "apartment": 101,
	    "password": "12345",
	    "photo": "https://t.ctcdn.com.br/P7-_JvQTS4U7-if6zHyXjyMiNQ8=/400x400/smart/i606944.png"
    };
await createUserUsecase.execute(user);
    const user2: UserEntity = {
        "idUser": 0,
	    "name": "sadafaaaaafa",
	    "email": "aabbcczz@abc.com.br",
	    "apartment": 101,
	    "password": "12345",
	    "photo": "https://t.ctcdn.com.br/P7-_JvQTS4U7-if6zHyXjyMiNQ8=/400x400/smart/i606944.png"
    };
    expect(await readEmailUsecase.execute({email: "aabbcczz@abc.com.br"})).toMatchObject(user2);
})