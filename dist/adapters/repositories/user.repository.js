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
exports.UserRepository = void 0;
const mysql_database_1 = require("../../infrastructure/persistence/mysql/mysql.database");
const user_models_mysql_database_1 = __importDefault(require("../../infrastructure/persistence/mysql/models/user.models.mysql.database"));
const modelsToEntities_user_mysql_database_1 = __importDefault(require("../../infrastructure/persistence/mysql/helpers/modelsToEntities.user.mysql.database"));
const entitiesToModels_user_mysql_database_1 = __importDefault(require("../../infrastructure/persistence/mysql/helpers/entitiesToModels.user.mysql.database"));
class UserRepository {
    constructor(_database, _modelUser) {
        this._database = _database;
        this._modelUser = _modelUser;
    }
    readById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this._database.read(this._modelUser, resourceId, {});
                return (0, modelsToEntities_user_mysql_database_1.default)(user);
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
    readByWhere(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this._database.readByWhere(this._modelUser, {
                    email: email,
                    password: password
                });
                return (0, modelsToEntities_user_mysql_database_1.default)(users);
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            const { users } = (0, entitiesToModels_user_mysql_database_1.default)(resource);
            yield this._database.create(this._modelUser, users);
            return resource;
        });
    }
    deleteById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._database.delete(this._modelUser, { idUser: resourceId });
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this._database.list(this._modelUser, {});
            const clients = user.map(modelsToEntities_user_mysql_database_1.default);
            return clients;
        });
    }
    updateById(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            let userModel = yield this._database.read(this._modelUser, resource.idUser, {});
            const user = (0, entitiesToModels_user_mysql_database_1.default)(resource);
            yield this._database.update(userModel, user);
            return resource;
        });
    }
}
exports.UserRepository = UserRepository;
exports.default = new UserRepository(mysql_database_1.MysqlDatabase.getInstance(), user_models_mysql_database_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL3JlcG9zaXRvcmllcy91c2VyLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsMEZBQXNGO0FBR3RGLDBJQUFpRztBQUNqRywrSkFBbUg7QUFDbkgsK0pBQW1IO0FBRW5ILE1BQWEsY0FBYztJQUN2QixZQUNZLFNBQXlCLEVBQ3pCLFVBQTBEO1FBRDFELGNBQVMsR0FBVCxTQUFTLENBQWdCO1FBQ3pCLGVBQVUsR0FBVixVQUFVLENBQWdEO0lBQ2hFLENBQUM7SUFFRCxRQUFRLENBQUMsVUFBa0I7O1lBQzdCLElBQUc7Z0JBQ0MsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFFeEUsT0FBTyxJQUFBLDhDQUFnQixFQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pDO1lBQUMsT0FBTSxHQUFHLEVBQUM7Z0JBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBRSxHQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDM0M7UUFDTCxDQUFDO0tBQUE7SUFFSyxXQUFXLENBQUMsS0FBYSxFQUFFLFFBQWdCOztZQUM3QyxJQUFHO2dCQUNDLE1BQU0sS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDNUQsS0FBSyxFQUFFLEtBQUs7b0JBQ1osUUFBUSxFQUFFLFFBQVE7aUJBQ3JCLENBQUMsQ0FBQztnQkFFSCxPQUFPLElBQUEsOENBQWdCLEVBQUMsS0FBSyxDQUFDLENBQUM7YUFDbEM7WUFBQyxPQUFNLEdBQUcsRUFBQztnQkFDUixNQUFNLElBQUksS0FBSyxDQUFFLEdBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMzQztRQUNMLENBQUM7S0FBQTtJQUVLLE1BQU0sQ0FBQyxRQUFvQjs7WUFDN0IsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFJLElBQUEsOENBQWdCLEVBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUMsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3BELE9BQU8sUUFBUSxDQUFDO1FBQ3BCLENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBQyxVQUFrQjs7WUFDL0IsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDekUsQ0FBQztLQUFBO0lBRUssSUFBSTs7WUFDTixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDNUQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyw4Q0FBZ0IsQ0FBQyxDQUFDO1lBQzNDLE9BQU8sT0FBTyxDQUFDO1FBQ25CLENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBQyxRQUFvQjs7WUFDakMsSUFBSSxTQUFTLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxNQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDakYsTUFBTSxJQUFJLEdBQUcsSUFBQSw4Q0FBZ0IsRUFBQyxRQUFRLENBQUMsQ0FBQztZQUN4QyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM3QyxPQUFPLFFBQVEsQ0FBQztRQUNwQixDQUFDO0tBQUE7Q0FDSjtBQW5ERCx3Q0FtREM7QUFFRCxrQkFBZSxJQUFJLGNBQWMsQ0FDN0IsOEJBQWEsQ0FBQyxXQUFXLEVBQUUsRUFDM0Isb0NBQVMsQ0FDUixDQUFDIn0=