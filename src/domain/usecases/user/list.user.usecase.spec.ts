import listUserUsecase from "./list.user.usecase";

test("Teste unitário listUserUsecase", async() => {
    expect(await listUserUsecase.execute()).toEqual([]);
});