import { PostEntity } from "../../entities/post/socialnetwork.post.entity";
import readPostUsecase from "./read.post.usecase";
import createPostUsecase from "./create.post.usecase";

test("Teste unitário readPostUseCase", async ()=> {
    const post: PostEntity = {
        idPost: 0,
        "content": "Postagem de um usuário",
        idUser: 1,
    };
await createPostUsecase.execute(post);
    const post2: PostEntity = {
        idPost: 0,
        "content": "Postagem de um usuário",
        idUser:1,
    };
    expect(await readPostUsecase.execute({idPost: 0})).toMatchObject(post2);
})