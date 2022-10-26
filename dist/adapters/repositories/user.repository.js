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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL3JlcG9zaXRvcmllcy91c2VyLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsMEZBQXNGO0FBR3RGLDBJQUFpRztBQUNqRywrSkFBbUg7QUFDbkgsK0pBQW1IO0FBRW5ILE1BQWEsY0FBYztJQUN2QixZQUNZLFNBQXlCLEVBQ3pCLFVBQTBEO1FBRDFELGNBQVMsR0FBVCxTQUFTLENBQWdCO1FBQ3pCLGVBQVUsR0FBVixVQUFVLENBQWdEO0lBQ2hFLENBQUM7SUFFRCxRQUFRLENBQUMsVUFBa0I7O1lBQzdCLElBQUc7Z0JBQ0MsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFFeEUsT0FBTyxJQUFBLDhDQUFnQixFQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pDO1lBQUMsT0FBTSxHQUFHLEVBQUM7Z0JBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBRSxHQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDM0M7UUFDTCxDQUFDO0tBQUE7SUFFSyxNQUFNLENBQUMsUUFBb0I7O1lBQzdCLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBSSxJQUFBLDhDQUFnQixFQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlDLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNwRCxPQUFPLFFBQVEsQ0FBQztRQUNwQixDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsVUFBa0I7O1lBQy9CLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQ3pFLENBQUM7S0FBQTtJQUVLLElBQUk7O1lBQ04sTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzVELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsOENBQWdCLENBQUMsQ0FBQztZQUMzQyxPQUFPLE9BQU8sQ0FBQztRQUNuQixDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsUUFBb0I7O1lBQ2pDLElBQUksU0FBUyxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsTUFBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2pGLE1BQU0sSUFBSSxHQUFHLElBQUEsOENBQWdCLEVBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEMsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDN0MsT0FBTyxRQUFRLENBQUM7UUFDcEIsQ0FBQztLQUFBO0NBQ0o7QUF0Q0Qsd0NBc0NDO0FBRUQsa0JBQWUsSUFBSSxjQUFjLENBQzdCLDhCQUFhLENBQUMsV0FBVyxFQUFFLEVBQzNCLG9DQUFTLENBQ1IsQ0FBQyJ9