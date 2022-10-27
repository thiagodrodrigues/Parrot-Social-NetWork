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
const delete_user_usecase_1 = __importDefault(require("./delete.user.usecase"));
test("Teste unitário deleteUserUseCase", () => __awaiter(void 0, void 0, void 0, function* () {
    const user = {
        idUser: 0
    };
    expect(yield delete_user_usecase_1.default.execute(user)).toBeUndefined();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLnVzZXIudXNlY2FzZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RvbWFpbi91c2VjYXNlcy91c2VyL2RlbGV0ZS51c2VyLnVzZWNhc2Uuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGdGQUFzRDtBQUV0RCxJQUFJLENBQUMsa0NBQWtDLEVBQUUsR0FBUSxFQUFFO0lBQy9DLE1BQU0sSUFBSSxHQUFHO1FBQ1QsTUFBTSxFQUFFLENBQUM7S0FDWixDQUFBO0lBQ0QsTUFBTSxDQUFDLE1BQU0sNkJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDbEUsQ0FBQyxDQUFBLENBQUMsQ0FBQSJ9