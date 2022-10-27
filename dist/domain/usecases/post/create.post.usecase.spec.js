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
const post_repository_1 = require("../../../adapters/repositories/post.repository");
const create_post_usecase_1 = __importDefault(require("./create.post.usecase"));
jest.mock("../../../adapters/repositories/post.repository");
const createRepositoryMock = post_repository_1.PostRepository;
test("Teste Unitário createPostUseCase", () => __awaiter(void 0, void 0, void 0, function* () {
    const postRepository = new createRepositoryMock();
    postRepository.create.mockRejectedValue({
        "idPost": 0,
        "content": "3 postagem",
        "idUser": 4
    });
    const post = {
        "idPost": 0,
        "content": "3 postagem",
        "idUser": 4
    };
    expect(yield create_post_usecase_1.default.execute(post)).toMatchObject(post);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLnBvc3QudXNlY2FzZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RvbWFpbi91c2VjYXNlcy9wb3N0L2NyZWF0ZS5wb3N0LnVzZWNhc2Uuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLG9GQUFnRjtBQUNoRixnRkFBc0Q7QUFFdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO0FBRTVELE1BQU0sb0JBQW9CLEdBQUcsZ0NBQTJDLENBQUE7QUFFeEUsSUFBSSxDQUFDLGtDQUFrQyxFQUFFLEdBQVMsRUFBRTtJQUNoRCxNQUFNLGNBQWMsR0FBRyxJQUFJLG9CQUFvQixFQUFpQyxDQUFBO0lBQ2hGLGNBQWMsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUM7UUFDcEMsUUFBUSxFQUFFLENBQUM7UUFDWCxTQUFTLEVBQUUsWUFBWTtRQUN2QixRQUFRLEVBQUUsQ0FBQztLQUNkLENBQUMsQ0FBQztJQUNILE1BQU0sSUFBSSxHQUFlO1FBQ2pCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsU0FBUyxFQUFFLFlBQVk7UUFDdkIsUUFBUSxFQUFFLENBQUM7S0FDbEIsQ0FBQztJQUNOLE1BQU0sQ0FBQyxNQUFNLDZCQUFpQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUNqRSxDQUFDLENBQUEsQ0FBQyxDQUFBIn0=