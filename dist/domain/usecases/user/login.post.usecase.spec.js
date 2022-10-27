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
const create_user_usecase_1 = __importDefault(require("./create.user.usecase"));
const login_post_usecase_1 = __importDefault(require("./login.post.usecase"));
jest.mock("../../../adapters/repositories/user.repository");
test("Teste Unitário LoginAuthUseCase", () => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = {
        "idUser": 0,
        "name": "sadafafa",
        "email": "aabbccddef@abc.com.br",
        "password": "12345",
        "apartment": 104,
        "photo": "https://t.ctcdn.com.br/P7-_JvQTS4U7-if6zHyXjyMiNQ8=/400x400/smart/i606944.png"
    };
    yield create_user_usecase_1.default.execute(userRepository);
    const userLogin = {
        "idUser": 0,
        "email": "aabbccddef@abc.com.br",
        "password": "12345"
    };
    const userLogado = {
        "user": {
            "idUser": 0,
            "name": "sadafafa",
            "email": "aabbccddef@abc.com.br",
            "apartment": 104,
            "password": "12345",
            "photo": "https://t.ctcdn.com.br/P7-_JvQTS4U7-if6zHyXjyMiNQ8=/400x400/smart/i606944.png"
        },
        "token": ""
    };
    expect(yield login_post_usecase_1.default.execute(userLogin)).toMatchObject(userLogado);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ucG9zdC51c2VjYXNlLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZG9tYWluL3VzZWNhc2VzL3VzZXIvbG9naW4ucG9zdC51c2VjYXNlLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxnRkFBc0Q7QUFDdEQsOEVBQW9EO0FBRXBELElBQUksQ0FBQyxJQUFJLENBQUMsZ0RBQWdELENBQUMsQ0FBQztBQUU1RCxJQUFJLENBQUMsaUNBQWlDLEVBQUUsR0FBUyxFQUFFO0lBQy9DLE1BQU0sY0FBYyxHQUFlO1FBQy9CLFFBQVEsRUFBRSxDQUFDO1FBQ1gsTUFBTSxFQUFFLFVBQVU7UUFDbEIsT0FBTyxFQUFFLHVCQUF1QjtRQUNoQyxVQUFVLEVBQUUsT0FBTztRQUNuQixXQUFXLEVBQUUsR0FBRztRQUNoQixPQUFPLEVBQUUsK0VBQStFO0tBQzNGLENBQUM7SUFDRixNQUFNLDZCQUFpQixDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNoRCxNQUFNLFNBQVMsR0FBRztRQUNWLFFBQVEsRUFBRSxDQUFDO1FBQ2QsT0FBTyxFQUFFLHVCQUF1QjtRQUNoQyxVQUFVLEVBQUUsT0FBTztLQUN2QixDQUFDO0lBQ0YsTUFBTSxVQUFVLEdBQUc7UUFDZixNQUFNLEVBQUU7WUFDSixRQUFRLEVBQUUsQ0FBQztZQUNYLE1BQU0sRUFBRSxVQUFVO1lBQ2xCLE9BQU8sRUFBRSx1QkFBdUI7WUFDaEMsV0FBVyxFQUFFLEdBQUc7WUFDaEIsVUFBVSxFQUFFLE9BQU87WUFDbkIsT0FBTyxFQUFFLCtFQUErRTtTQUMzRjtRQUNELE9BQU8sRUFBRSxFQUFFO0tBQ2QsQ0FBQTtJQUNMLE1BQU0sQ0FBQyxNQUFNLDRCQUFnQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtBQUMzRSxDQUFDLENBQUEsQ0FBQyxDQUFBIn0=