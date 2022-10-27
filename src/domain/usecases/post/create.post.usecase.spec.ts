import { PostEntity } from "../../entities/post/socialnetwork.post.entity";
import { PostRepository } from "../../../adapters/repositories/post.repository";
import createPostUsecase from "./create.post.usecase";

jest.mock("../../../adapters/repositories/post.repository");

const createRepositoryMock = PostRepository as jest.Mock<PostRepository>

test("Teste Unitário createPostUseCase", async () => {
    const postRepository = new createRepositoryMock() as jest.Mocked<PostRepository>
    postRepository.create.mockRejectedValue({
        "idPost": 0,
        "content": "3 postagem",
        "idUser": 4 
    });
    const post: PostEntity = {
            "idPost": 0,
            "content": "3 postagem",
            "idUser": 4 
    };
expect(await createPostUsecase.execute(post)).toMatchObject(post)
})
