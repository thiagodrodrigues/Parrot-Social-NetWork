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
const create_post_usecase_1 = __importDefault(require("../../../domain/usecases/post/create.post.usecase"));
const read_post_usecase_1 = __importDefault(require("../../../domain/usecases/post/read.post.usecase"));
const update_post_usecase_1 = __importDefault(require("../../../domain/usecases/post/update.post.usecase"));
const delete_post_usecase_1 = __importDefault(require("../../../domain/usecases/post/delete.post.usecase"));
const list_post_usecase_1 = __importDefault(require("../../../domain/usecases/post/list.post.usecase"));
const debug_1 = __importDefault(require("debug"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const log = (0, debug_1.default)('app:posts-controller');
class PostController {
    listPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield list_post_usecase_1.default.execute();
            res.status(200).send(post);
        });
    }
    getPostById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield read_post_usecase_1.default.execute({
                idPost: Number(req.params.idPost)
            });
            res.status(200).send(post);
        });
    }
    createPost(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const token = (_a = req.header(`Authorization`)) === null || _a === void 0 ? void 0 : _a.replace(`Bearer `, ``);
            if (!token) {
                res.status(401).send({
                    error: `Usuario nao autenticado.`
                });
            }
            else {
                const decoded = jsonwebtoken_1.default.verify(token, String(process.env.SECRET_KEY));
                if (typeof decoded == `string`) {
                    res.status(401).send({
                        error: `Usuario nao autenticado.`
                    });
                }
                else {
                    const post = yield create_post_usecase_1.default.execute({
                        content: req.body.content,
                        idUser: decoded.idUser
                    });
                    log(post);
                    res.status(201).send(post);
                }
            }
        });
    }
    updatePost(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const token = (_a = req.header(`Authorization`)) === null || _a === void 0 ? void 0 : _a.replace(`Bearer `, ``);
            if (!token) {
                res.status(401).send({
                    error: `Usuario nao autenticado.`
                });
            }
            else {
                const decoded = jsonwebtoken_1.default.verify(token, String(process.env.SECRET_KEY));
                if (typeof decoded == `string`) {
                    res.status(401).send({
                        error: `Usuario nao autenticado.`
                    });
                }
                else {
                    const post = yield update_post_usecase_1.default.execute({
                        content: req.body.content,
                        idPost: Number(req.params.idPost),
                        idUser: decoded.idUser
                    });
                    log(post);
                    res.status(200).send(post);
                }
            }
        });
    }
    removePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield delete_post_usecase_1.default.execute({
                idPost: Number(req.params.idPost)
            });
            res.status(204).send();
        });
    }
}
exports.default = new PostController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL2FwaXMvY29udHJvbGxlcnMvcG9zdC5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNEdBQWtGO0FBQ2xGLHdHQUE4RTtBQUM5RSw0R0FBa0Y7QUFDbEYsNEdBQWtGO0FBQ2xGLHdHQUE4RTtBQUM5RSxrREFBMEI7QUFDMUIsZ0VBQStCO0FBRS9CLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBRTNELE1BQU0sY0FBYztJQUNWLFFBQVEsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUN0RCxNQUFNLElBQUksR0FBRyxNQUFNLDJCQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDN0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQztLQUFBO0lBRUssV0FBVyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ3pELE1BQU0sSUFBSSxHQUFHLE1BQU0sMkJBQWUsQ0FBQyxPQUFPLENBQUM7Z0JBQ3ZDLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDcEMsQ0FBQyxDQUFDO1lBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQztLQUFBO0lBRUssVUFBVSxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7OztZQUN4RCxNQUFNLEtBQUssR0FBRyxNQUFBLEdBQUcsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLDBDQUFFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDbEUsSUFBRyxDQUFDLEtBQUssRUFBQztnQkFDTixHQUFHLENB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