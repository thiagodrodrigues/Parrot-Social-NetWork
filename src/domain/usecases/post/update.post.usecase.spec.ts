import { PostEntity } from "../../entities/post/socialnetwork.post.entity";
import createPostUsecase from "./create.post.usecase";
import updatePostUsecase from "./update.post.usecase";


test("Teste unitário updateClientUseCase", async ()=> {
    const post: PostEntity = {
        idPost: 0,
        "content": "Postagem de um usuário",
        idUser: 1,
    };
await createPostUsecase.execute(post);
    const post2: PostEntity = {
        idPost: 0,
        "content": "Atualização da postagem de um usuário",
        idUser: 1,
    };
    const post3: PostEntity = {
        idPost: 0,
        "content": "Atualização da postagem de um usuário",
        idUser: 1,
    };
    expect(await updatePostUsecase.execute(post2)).toMatchObject(post3);
})