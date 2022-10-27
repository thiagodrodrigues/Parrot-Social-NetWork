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
const read_post_usecase_1 = __importDefault(require("./read.post.usecase"));
const create_post_usecase_1 = __importDefault(require("./create.post.usecase"));
test("Teste unitário readPostUseCase", () => __awaiter(void 0, void 0, void 0, function* () {
    const post = {
        idPost: 0,
        "content": "Postagem de um usuário",
        idUser: 1,
    };
    yield create_post_usecase_1.default.execute(post);
    const post2 = {
        idPost: 0,
        "content": "Postagem de um usuário",
        idUser: 1,
    };
    expect(yield read_post_usecase_1.default.execute({ idPost: 0 })).toMatchObject(post2);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZC5wb3N0LnVzZWNhc2Uuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kb21haW4vdXNlY2FzZXMvcG9zdC9yZWFkLnBvc3QudXNlY2FzZS5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNEVBQWtEO0FBQ2xELGdGQUFzRDtBQUV0RCxJQUFJLENBQUMsZ0NBQWdDLEVBQUUsR0FBUSxFQUFFO0lBQzdDLE1BQU0sSUFBSSxHQUFlO1FBQ3JCLE1BQU0sRUFBRSxDQUFDO1FBQ1QsU0FBUyxFQUFFLHdCQUF3QjtRQUNuQyxNQUFNLEVBQUUsQ0FBQztLQUNaLENBQUM7SUFDTixNQUFNLDZCQUFpQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxNQUFNLEtBQUssR0FBZTtRQUN0QixNQUFNLEVBQUUsQ0FBQztRQUNULFNBQVMsRUFBRSx3QkFBd0I7UUFDbkMsTUFBTSxFQUFDLENBQUM7S0FDWCxDQUFDO0lBQ0YsTUFBTSxDQUFDLE1BQU0sMkJBQWUsQ0FBQyxPQUFPLENBQUMsRUFBQyxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM1RSxDQUFDLENBQUEsQ0FBQyxDQUFBIn0=