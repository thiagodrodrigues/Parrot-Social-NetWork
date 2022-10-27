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
const reademail_user_usecase_1 = __importDefault(require("../../../domain/usecases/user/reademail.user.usecase"));
const debug_1 = __importDefault(require("debug"));
const constants_config_1 = __importDefault(require("../../../infrastructure/config/constants.config"));
const log = (0, debug_1.default)('app:user-middleware');
class UserMiddleware {
    validateClientRepeated(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let dataWhere = req.body.email;
            const user = yield reademail_user_usecase_1.default.execute({
                email: dataWhere
            });
            if (!user) {
                next();
            }
            else {
                res.status(409).send({ error: constants_config_1.default.USER.MESSAGES.ERROR.USER_ALREADY_EXISTS.replace('{USER_ID}', String(dataWhere)) });
            }
        });
    }
}
exports.default = new UserMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL2FwaXMvbWlkZGxld2FyZXMvdXNlci5taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esa0hBQW9GO0FBQ3BGLGtEQUEwQjtBQUUxQix1R0FBOEU7QUFFOUUsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLHFCQUFxQixDQUFDLENBQUM7QUFFMUQsTUFBTSxjQUFjO0lBRVYsc0JBQXNCLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCOztZQUNoRyxJQUFJLFNBQVMsR0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN2QyxNQUFNLElBQUksR0FBRyxNQUFNLGdDQUFnQixDQUFDLE9BQU8sQ0FBQztnQkFDeEMsS0FBSyxFQUFFLFNBQVM7YUFDbkIsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDUCxJQUFJLEVBQUUsQ0FBQzthQUNWO2lCQUFNO2dCQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLDBCQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7YUFDbEk7UUFDTCxDQUFDO0tBQUE7Q0FFSjtBQUVELGtCQUFlLElBQUksY0FBYyxFQUFFLENBQUMifQ==