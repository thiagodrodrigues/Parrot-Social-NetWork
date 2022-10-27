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
const debug_1 = __importDefault(require("debug"));
/* import multer from 'multer'; */
/* import path from 'path'; */
/* import xlsxFilesInterface from '../../../infrastructure/files/xlsx.files'; */
/* import logger from '../../../infrastructure/logs/winston.logs'; */
const constants_config_1 = __importDefault(require("../../../infrastructure/config/constants.config"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const log = (0, debug_1.default)('app:auth-middleware');
class AuthMiddleware {
    checkAuth(req, res, next) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = (_a = req.header(`Authorization`)) === null || _a === void 0 ? void 0 : _a.replace(`Bearer `, ``);
                if (!token) {
                    res.status(401).send({
                        error: constants_config_1.default.USER.MESSAGES.ERROR.USER_UNAUTHENTICATED_USER
                    });
                }
                else {
                    const decoded = jsonwebtoken_1.default.verify(token, String(process.env.SECRET_KEY));
                    if (typeof decoded == `string`) {
                        res.status(401).send({
                            error: constants_config_1.default.USER.MESSAGES.ERROR.USER_UNAUTHENTICATED_USER
                        });
                    }
                    else {
                        console.log(decoded.idUser);
                        next();
                    }
                }
            }
            catch (err) {
                res.status(401).send({
                    error: constants_config_1.default.USER.MESSAGES.ERROR.USER_UNAUTHENTICATED_USER
                });
            }
        });
    }
}
exports.default = new AuthMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL2FwaXMvbWlkZGxld2FyZXMvYXV0aC5taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBR0Esa0RBQTBCO0FBQzFCLGtDQUFrQztBQUNsQyw4QkFBOEI7QUFDOUIsZ0ZBQWdGO0FBQ2hGLHFFQUFxRTtBQUNyRSx1R0FBOEU7QUFDOUUsZ0VBQStCO0FBRS9CLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBRTFELE1BQU0sY0FBYztJQUNWLFNBQVMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7OztZQUNuRixJQUFHO2dCQUNDLE1BQU0sS0FBSyxHQUFHLE1BQUEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsMENBQUUsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFFbEUsSUFBRyxDQUFDLEtBQUssRUFBQztvQkFDTixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFDakIsS0FBSyxFQUFFLDBCQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMseUJBQXlCO3FCQUN2RSxDQUFDLENBQUM7aUJBQ047cUJBQU07b0JBQ0gsTUFBTSxPQUFPLEdBQUcsc0JBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQ2xFLElBQUcsT0FBTyxPQUFPLElBQUksUUFBUSxFQUFDO3dCQUMxQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQzs0QkFDakIsS0FBSyxFQUFFLDBCQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMseUJBQXlCO3lCQUN2RSxDQUFDLENBQUM7cUJBQ047eUJBQU07d0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQzVCLElBQUksRUFBRSxDQUFDO3FCQUNWO2lCQUNKO2FBRUo7WUFBQyxPQUFPLEdBQUcsRUFBRTtnQkFDVixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDakIsS0FBSyxFQUFFLDBCQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMseUJBQXlCO2lCQUN2RSxDQUFDLENBQUM7YUFDTjs7S0FDSjtDQUNKO0FBRUQsa0JBQWUsSUFBSSxjQUFjLEVBQUUsQ0FBQyJ9