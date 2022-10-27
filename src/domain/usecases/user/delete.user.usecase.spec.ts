import deleteUserUsecase from "./delete.user.usecase";

test("Teste unitário deleteUserUseCase", async() => {
    const user = {
        idUser: 0
    }
    expect(await deleteUserUsecase.execute(user)).toBeUndefined();
})