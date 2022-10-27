"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_post_usecase_1 = __importDefault(require("./create.post.usecase"));
const update_post_usecase_1 = __importDefault(require("./update.post.usecase"));
test("Teste unitário updateClientUseCase", () => __awaiter(void 0, void 0, void 0, function* () {
    const post = {
        idPost: 0,
        "content": "Postagem de um usuário",
        idUser: 1,
    };
    yield create_post_usecase_1.default.execute(post);
    const post2 = {
        idPost: 0,
        "content": "Atualização da postagem de um usuário",
        idUser: 1,
    };
    const post3 = {
        idPost: 0,
        "content": "Atualização da postagem de um usuário",
        idUser: 1,
    };
    expect(yield update_post_usecase_1.default.execute(post2)).toMatchObject(post3);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLnBvc3QudXNlY2FzZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RvbWFpbi91c2VjYXNlcy9wb3N0L3VwZGF0ZS5wb3N0LnVzZWNhc2Uuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLGdGQUFzRDtBQUN0RCxnRkFBc0Q7QUFHdEQsSUFBSSxDQUFDLG9DQUFvQyxFQUFFLEdBQVEsRUFBRTtJQUNqRCxNQUFNLElBQUksR0FBZTtRQUNyQixNQUFNLEVBQUUsQ0FBQztRQUNULFNBQVMsRUFBRSx3QkFBd0I7UUFDbkMsTUFBTSxFQUFFLENBQUM7S0FDWixDQUFDO0lBQ04sTUFBTSw2QkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsTUFBTSxLQUFLLEdBQWU7UUFDdEIsTUFBTSxFQUFFLENBQUM7UUFDVCxTQUFTLEVBQUUsdUNBQXVDO1FBQ2xELE1BQU0sRUFBRSxDQUFDO0tBQ1osQ0FBQztJQUNGLE1BQU0sS0FBSyxHQUFlO1FBQ3RCLE1BQU0sRUFBRSxDQUFDO1FBQ1QsU0FBUyxFQUFFLHVDQUF1QztRQUNsRCxNQUFNLEVBQUUsQ0FBQztLQUNaLENBQUM7SUFDRixNQUFNLENBQUMsTUFBTSw2QkFBaUIsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDeEUsQ0FBQyxDQUFBLENBQUMsQ0FBQSJ9