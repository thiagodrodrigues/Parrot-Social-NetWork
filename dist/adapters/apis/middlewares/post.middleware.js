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
const read_post_usecase_1 = __importDefault(require("../../../domain/usecases/post/read.post.usecase"));
const debug_1 = __importDefault(require("debug"));
const winston_logs_1 = __importDefault(require("../../../infrastructure/logs/winston.logs"));
const constants_config_1 = __importDefault(require("../../../infrastructure/config/constants.config"));
const log = (0, debug_1.default)('app:clients-middleware');
class PostMiddleware {
    validatePostExists(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield read_post_usecase_1.default.execute({
                idPost: Number(req.params.idPost)
            });
            if (post) {
                winston_logs_1.default.info(['Cliente encontrado: ', post]);
                next();
            }
            else {
                winston_logs_1.default.error(`Usuário ${req.params.idPost} não existe`);
                res.status(404).send({ error: constants_config_1.default.POST.MESSAGES.ERROR.POST_NOT_EXISTS.replace('{POST_ID}', req.params.idPost) });
            }
        });
    }
}
exports.default = new PostMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL2FwaXMvbWlkZGxld2FyZXMvcG9zdC5taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esd0dBQThFO0FBQzlFLGtEQUEwQjtBQUMxQiw2RkFBK0Q7QUFDL0QsdUdBQThFO0FBRTlFLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBRTdELE1BQU0sY0FBYztJQUdkLGtCQUFrQixDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjs7WUFDNUYsTUFBTSxJQUFJLEdBQUcsTUFBTSwyQkFBZSxDQUFDLE9BQU8sQ0FBQztnQkFDdkMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQzthQUNwQyxDQUFDLENBQUM7WUFDSCxJQUFJLElBQUksRUFBRTtnQkFDTixzQkFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzVDLElBQUksRUFBRSxDQUFDO2FBQ1Y7aUJBQU07Z0JBQ0gsc0JBQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sYUFBYSxDQUFDLENBQUM7Z0JBQ3hELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLDBCQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxDQUFDLENBQUM7YUFDOUg7UUFDTCxDQUFDO0tBQUE7Q0FDQTtBQUVELGtCQUFlLElBQUksY0FBYyxFQUFFLENBQUMifQ==