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
const reademail_user_usecase_1 = __importDefault(require("./reademail.user.usecase"));
const create_user_usecase_1 = __importDefault(require("./create.user.usecase"));
test("Teste unitário readEmailUseCase", () => __awaiter(void 0, void 0, void 0, function* () {
    const user = {
        "idUser": 0,
        "name": "sadafaaaaafa",
        "email": "aabbcczz@abc.com.br",
        "apartment": 101,
        "password": "12345",
        "photo": "https://t.ctcdn.com.br/P7-_JvQTS4U7-if6zHyXjyMiNQ8=/400x400/smart/i606944.png"
    };
    yield create_user_usecase_1.default.execute(user);
    const user2 = {
        "idUser": 0,
        "name": "sadafaaaaafa",
        "email": "aabbcczz@abc.com.br",
        "apartment": 101,
        "password": "12345",
        "photo": "https://t.ctcdn.com.br/P7-_JvQTS4U7-if6zHyXjyMiNQ8=/400x400/smart/i606944.png"
    };
    expect(yield reademail_user_usecase_1.default.execute({ email: "aabbcczz@abc.com.br" })).toMatchObject(user2);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZGVtYWlsLnVzZXIudXNlY2FzZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RvbWFpbi91c2VjYXNlcy91c2VyL3JlYWRlbWFpbC51c2VyLnVzZWNhc2Uuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLHNGQUF3RDtBQUN4RCxnRkFBc0Q7QUFFdEQsSUFBSSxDQUFDLGlDQUFpQyxFQUFFLEdBQVEsRUFBRTtJQUM5QyxNQUFNLElBQUksR0FBZTtRQUNyQixRQUFRLEVBQUUsQ0FBQztRQUNkLE1BQU0sRUFBRSxjQUFjO1FBQ3RCLE9BQU8sRUFBRSxxQkFBcUI7UUFDOUIsV0FBVyxFQUFFLEdBQUc7UUFDaEIsVUFBVSxFQUFFLE9BQU87UUFDbkIsT0FBTyxFQUFFLCtFQUErRTtLQUN4RixDQUFDO0lBQ04sTUFBTSw2QkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsTUFBTSxLQUFLLEdBQWU7UUFDdEIsUUFBUSxFQUFFLENBQUM7UUFDZCxNQUFNLEVBQUUsY0FBYztRQUN0QixPQUFPLEVBQUUscUJBQXFCO1FBQzlCLFdBQVcsRUFBRSxHQUFHO1FBQ2hCLFVBQVUsRUFBRSxPQUFPO1FBQ25CLE9BQU8sRUFBRSwrRUFBK0U7S0FDeEYsQ0FBQztJQUNGLE1BQU0sQ0FBQyxNQUFNLGdDQUFnQixDQUFDLE9BQU8sQ0FBQyxFQUFDLEtBQUssRUFBRSxxQkFBcUIsRUFBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDaEcsQ0FBQyxDQUFBLENBQUMsQ0FBQSJ9