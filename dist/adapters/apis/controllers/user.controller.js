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
const create_user_usecase_1 = __importDefault(require("../../../domain/usecases/user/create.user.usecase"));
const read_user_usecase_1 = __importDefault(require("../../../domain/usecases/user/read.user.usecase"));
const update_user_usecase_1 = __importDefault(require("../../../domain/usecases/user/update.user.usecase"));
const delete_user_usecase_1 = __importDefault(require("../../../domain/usecases/user/delete.user.usecase"));
const list_user_usecase_1 = __importDefault(require("../../../domain/usecases/user/list.user.usecase"));
const debug_1 = __importDefault(require("debug"));
const login_post_usecase_1 = __importDefault(require("../../../domain/usecases/user/login.post.usecase"));
const log = (0, debug_1.default)('app:users-controller');
class UserController {
    listUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield list_user_usecase_1.default.execute();
            res.status(200).send(user);
        });
    }
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield read_user_usecase_1.default.execute({
                idUser: Number(req.params.idUser)
            });
            res.status(200).send(user);
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield create_user_usecase_1.default.execute(req.body);
            log(user);
            res.status(201).send(user);
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield update_user_usecase_1.default.execute(req.body);
            res.status(200).send(user);
        });
    }
    removeUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const User = yield delete_user_usecase_1.default.execute({
                idUser: Number(req.params.idUser)
            });
            res.status(204).send();
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield login_post_usecase_1.default.execute(req.body);
            if (user) {
                res.status(200).send(user);
            }
            else {
                res.status(401).send({
                    error: `Dados incorretos.`
                });
            }
        });
    }
}
exports.default = new UserController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL2FwaXMvY29udHJvbGxlcnMvdXNlci5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNEdBQWtGO0FBQ2xGLHdHQUE4RTtBQUM5RSw0R0FBa0Y7QUFDbEYsNEdBQWtGO0FBQ2xGLHdHQUE4RTtBQUM5RSxrREFBMEI7QUFDMUIsMEdBQWdGO0FBRWhGLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBRTNELE1BQU0sY0FBYztJQUNWLFFBQVEsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUN0RCxNQUFNLElBQUksR0FBRyxNQUFNLDJCQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDN0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQztLQUFBO0lBRUssV0FBVyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ3pELE1BQU0sSUFBSSxHQUFHLE1BQU0sMkJBQWUsQ0FBQyxPQUFPLENBQUM7Z0JBQ3ZDLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDcEMsQ0FBQyxDQUFDO1lBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQztLQUFBO0lBRUssVUFBVSxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ3hELE1BQU0sSUFBSSxHQUFHLE1BQU0sNkJBQWlCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2RCxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDVixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDeEQsTUFBTSxJQUFJLEdBQUcsTUFBTSw2QkFBaUIsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUN4RCxNQUFNLElBQUksR0FBRyxNQUFNLDZCQUFpQixDQUFDLE9BQU8sQ0FBQztnQkFDekMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQzthQUNwQyxDQUFDLENBQUM7WUFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzNCLENBQUM7S0FBQTtJQUVLLEtBQUssQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUNuRCxNQUFNLElBQUksR0FBRyxNQUFNLDRCQUFnQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEQsSUFBRyxJQUFJLEVBQUM7Z0JBQ0osR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDOUI7aUJBQU07Z0JBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ2pCLEtBQUssRUFBRSxtQkFBbUI7aUJBQzdCLENBQUMsQ0FBQzthQUNOO1FBRUwsQ0FBQztLQUFBO0NBV0o7QUFFRCxrQkFBZSxJQUFJLGNBQWMsRUFBRSxDQUFDIn0=