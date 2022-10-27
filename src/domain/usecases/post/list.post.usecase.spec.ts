import listPostUsecase from "./list.post.usecase";

test("Teste unitário listPostUsecase", async() => {
    expect(await listPostUsecase.execute()).toEqual([]);
});