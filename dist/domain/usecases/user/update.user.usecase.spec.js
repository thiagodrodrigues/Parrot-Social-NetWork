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
const update_user_usecase_1 = __importDefault(require("./update.user.usecase"));
test("Teste unitário updateClientUseCase", () => __awaiter(void 0, void 0, void 0, function* () {
    const user = {
        "idUser": 0,
        "name": "Nome 1",
        "email": "email1@abc.com.br",
        "apartment": 101,
        "password": "12345",
        "photo": "https://t.ctcdn.com.br/P7-_JvQTS4U7-if6zHyXjyMiNQ8=/400x400/smart/i606944.png"
    };
    yield create_user_usecase_1.default.execute(user);
    const user2 = {
        "idUser": 0,
        "name": "Nome 2",
        "email": "email2@abc.com.br",
        "apartment": 102,
        "password": "12345",
        "photo": "https://t.ctcdn.com.br/P7-_JvQTS4U7-if6zHyXjyMiNQ8=/400x400/smart/i606944.png"
    };
    const user3 = {
        "idUser": 0,
        "name": "Nome 2",
        "email": "email2@abc.com.br",
        "apartment": 102,
        "password": "12345",
        "photo": "https://t.ctcdn.com.br/P7-_JvQTS4U7-if6zHyXjyMiNQ8=/400x400/smart/i606944.png"
    };
    expect(yield update_user_usecase_1.default.execute(user2)).toMatchObject(user3);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLnVzZXIudXNlY2FzZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RvbWFpbi91c2VjYXNlcy91c2VyL3VwZGF0ZS51c2VyLnVzZWNhc2Uuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLGdGQUFzRDtBQUN0RCxnRkFBc0Q7QUFHdEQsSUFBSSxDQUFDLG9DQUFvQyxFQUFFLEdBQVEsRUFBRTtJQUNqRCxNQUFNLElBQUksR0FBZTtRQUNyQixRQUFRLEVBQUUsQ0FBQztRQUNkLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLE9BQU8sRUFBRSxtQkFBbUI7UUFDNUIsV0FBVyxFQUFFLEdBQUc7UUFDaEIsVUFBVSxFQUFFLE9BQU87UUFDbkIsT0FBTyxFQUFFLCtFQUErRTtLQUN4RixDQUFDO0lBQ04sTUFBTSw2QkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsTUFBTSxLQUFLLEdBQWU7UUFDdEIsUUFBUSxFQUFFLENBQUM7UUFDZCxNQUFNLEVBQUUsUUFBUTtRQUNoQixPQUFPLEVBQUUsbUJBQW1CO1FBQzVCLFdBQVcsRUFBRSxHQUFHO1FBQ2hCLFVBQVUsRUFBRSxPQUFPO1FBQ25CLE9BQU8sRUFBRSwrRUFBK0U7S0FDeEYsQ0FBQztJQUNGLE1BQU0sS0FBSyxHQUFlO1FBQ3RCLFFBQVEsRUFBRSxDQUFDO1FBQ2QsTUFBTSxFQUFFLFFBQVE7UUFDaEIsT0FBTyxFQUFFLG1CQUFtQjtRQUM1QixXQUFXLEVBQUUsR0FBRztRQUNoQixVQUFVLEVBQUUsT0FBTztRQUNuQixPQUFPLEVBQUUsK0VBQStFO0tBQ3hGLENBQUM7SUFDRixNQUFNLENBQUMsTUFBTSw2QkFBaUIsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDeEUsQ0FBQyxDQUFBLENBQUMsQ0FBQSJ9