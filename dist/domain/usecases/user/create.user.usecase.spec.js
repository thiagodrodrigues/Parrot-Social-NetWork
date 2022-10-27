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
const user_repository_1 = require("../../../adapters/repositories/user.repository");
const create_user_usecase_1 = __importDefault(require("./create.user.usecase"));
jest.mock("../../../adapters/repositories/user.repository");
const createRepositoryMock = user_repository_1.UserRepository;
test("Teste Unitário createUserUseCase", () => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = new createRepositoryMock();
    userRepository.create.mockRejectedValue({
        "idUser": 1,
        "name": "sadafafa",
        "email": "aabbccddef@abc.com.br",
        "password": "12345",
        "apartment": 104,
        "photo": "https://t.ctcdn.com.br/P7-_JvQTS4U7-if6zHyXjyMiNQ8=/400x400/smart/i606944.png"
    });
    const user = {
        "idUser": 1,
        "name": "sadafafa",
        "email": "aabbccddef@abc.com.br",
        "password": "12345",
        "apartment": 104,
        "photo": "https://t.ctcdn.com.br/P7-_JvQTS4U7-if6zHyXjyMiNQ8=/400x400/smart/i606944.png"
    };
    expect(yield create_user_usecase_1.default.execute(user)).toMatchObject(user);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLnVzZXIudXNlY2FzZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RvbWFpbi91c2VjYXNlcy91c2VyL2NyZWF0ZS51c2VyLnVzZWNhc2Uuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLG9GQUFnRjtBQUNoRixnRkFBc0Q7QUFFdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO0FBRTVELE1BQU0sb0JBQW9CLEdBQUcsZ0NBQTJDLENBQUE7QUFFeEUsSUFBSSxDQUFDLGtDQUFrQyxFQUFFLEdBQVMsRUFBRTtJQUNoRCxNQUFNLGNBQWMsR0FBRyxJQUFJLG9CQUFvQixFQUFpQyxDQUFBO0lBQ2hGLGNBQWMsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUM7UUFDcEMsUUFBUSxFQUFFLENBQUM7UUFDWCxNQUFNLEVBQUUsVUFBVTtRQUNsQixPQUFPLEVBQUUsdUJBQXVCO1FBQ2hDLFVBQVUsRUFBRSxPQUFPO1FBQ25CLFdBQVcsRUFBRSxHQUFHO1FBQ2hCLE9BQU8sRUFBRSwrRUFBK0U7S0FDM0YsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxJQUFJLEdBQWU7UUFDakIsUUFBUSxFQUFFLENBQUM7UUFDWCxNQUFNLEVBQUUsVUFBVTtRQUNyQixPQUFPLEVBQUUsdUJBQXVCO1FBQ2hDLFVBQVUsRUFBRSxPQUFPO1FBQ25CLFdBQVcsRUFBRSxHQUFHO1FBQ2hCLE9BQU8sRUFBRSwrRUFBK0U7S0FDNUYsQ0FBQztJQUNOLE1BQU0sQ0FBQyxNQUFNLDZCQUFpQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUNqRSxDQUFDLENBQUEsQ0FBQyxDQUFBIn0=