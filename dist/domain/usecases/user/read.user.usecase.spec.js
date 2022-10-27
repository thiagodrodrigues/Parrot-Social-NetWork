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
const read_user_usecase_1 = __importDefault(require("./read.user.usecase"));
const create_user_usecase_1 = __importDefault(require("./create.user.usecase"));
test("Teste unitário readUserUseCase", () => __awaiter(void 0, void 0, void 0, function* () {
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
    expect(yield read_user_usecase_1.default.execute({ idUser: 0 })).toMatchObject(user2);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZC51c2VyLnVzZWNhc2Uuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kb21haW4vdXNlY2FzZXMvdXNlci9yZWFkLnVzZXIudXNlY2FzZS5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNEVBQWtEO0FBQ2xELGdGQUFzRDtBQUV0RCxJQUFJLENBQUMsZ0NBQWdDLEVBQUUsR0FBUSxFQUFFO0lBQzdDLE1BQU0sSUFBSSxHQUFlO1FBQ3JCLFFBQVEsRUFBRSxDQUFDO1FBQ2QsTUFBTSxFQUFFLGNBQWM7UUFDdEIsT0FBTyxFQUFFLHFCQUFxQjtRQUM5QixXQUFXLEVBQUUsR0FBRztRQUNoQixVQUFVLEVBQUUsT0FBTztRQUNuQixPQUFPLEVBQUUsK0VBQStFO0tBQ3hGLENBQUM7SUFDTixNQUFNLDZCQUFpQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxNQUFNLEtBQUssR0FBZTtRQUN0QixRQUFRLEVBQUUsQ0FBQztRQUNkLE1BQU0sRUFBRSxjQUFjO1FBQ3RCLE9BQU8sRUFBRSxxQkFBcUI7UUFDOUIsV0FBVyxFQUFFLEdBQUc7UUFDaEIsVUFBVSxFQUFFLE9BQU87UUFDbkIsT0FBTyxFQUFFLCtFQUErRTtLQUN4RixDQUFDO0lBQ0YsTUFBTSxDQUFDLE1BQU0sMkJBQWUsQ0FBQyxPQUFPLENBQUMsRUFBQyxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM1RSxDQUFDLENBQUEsQ0FBQyxDQUFBIn0=