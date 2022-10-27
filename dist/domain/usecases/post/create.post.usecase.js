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
exports.CreatePostUseCase = void 0;
const post_repository_1 = __importDefault(require("../../../adapters/repositories/post.repository"));
class CreatePostUseCase {
    constructor(_repository) {
        this._repository = _repository;
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._repository.create({
                idUser: Number(data.idUser),
                content: data.content
            });
        });
    }
}
exports.CreatePostUseCase = CreatePostUseCase;
exports.default = new CreatePostUseCase(post_repository_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLnBvc3QudXNlY2FzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kb21haW4vdXNlY2FzZXMvcG9zdC9jcmVhdGUucG9zdC51c2VjYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUVBLHFHQUE0RTtBQUc1RSxNQUFhLGlCQUFpQjtJQUMxQixZQUFvQixXQUE0QjtRQUE1QixnQkFBVyxHQUFYLFdBQVcsQ0FBaUI7SUFDaEQsQ0FBQztJQUNLLE9BQU8sQ0FBQyxJQUF3Qzs7WUFDbEQsT0FBTyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO2dCQUNqQyxNQUFNLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQzNCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTzthQUN4QixDQUFDLENBQUM7UUFDUCxDQUFDO0tBQUE7Q0FDSjtBQVRELDhDQVNDO0FBRUQsa0JBQWUsSUFBSSxpQkFBaUIsQ0FDaEMseUJBQWMsQ0FDakIsQ0FBQyJ9