import deletePostUsecase from "./delete.post.usecase";

test("Teste unitário deletePostUseCase", async() => {
    const post = {
        idPost: 0
    }
    expect(await deletePostUsecase.execute(post)).toBeUndefined();
})
