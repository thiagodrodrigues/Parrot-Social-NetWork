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
exports.PostRepository = void 0;
const mysql_database_1 = require("../../infrastructure/persistence/mysql/mysql.database");
const post_models_mysql_database_1 = __importDefault(require("../../infrastructure/persistence/mysql/models/post.models.mysql.database"));
const modelsToEntities_post_mysql_database_1 = __importDefault(require("../../infrastructure/persistence/mysql/helpers/modelsToEntities.post.mysql.database"));
const entitiesToModels_post_mysql_database_1 = __importDefault(require("../../infrastructure/persistence/mysql/helpers/entitiesToModels.post.mysql.database"));
class PostRepository {
    constructor(_database, _modelPost) {
        this._database = _database;
        this._modelPost = _modelPost;
    }
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            const { posts } = (0, entitiesToModels_post_mysql_database_1.default)(resource);
            yield this._database.create(this._modelPost, posts);
            return resource;
        });
    }
    deleteById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._database.delete(this._modelPost, { idPost: resourceId });
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield this._database.list(this._modelPost, {});
            const clients = post.map(modelsToEntities_post_mysql_database_1.default);
            return clients;
        });
    }
    readById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const post = yield this._database.read(this._modelPost, resourceId, {});
                return (0, modelsToEntities_post_mysql_database_1.default)(post);
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
    updateById(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            let postModel = yield this._database.read(this._modelPost, resource.idPost);
            const { posts } = (0, entitiesToModels_post_mysql_database_1.default)(resource);
            yield this._database.update(postModel, posts);
            return resource;
        });
    }
}
exports.PostRepository = PostRepository;
exports.default = new PostRepository(mysql_database_1.MysqlDatabase.getInstance(), post_models_mysql_database_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL3JlcG9zaXRvcmllcy9wb3N0LnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsMEZBQXNGO0FBR3RGLDBJQUFpRztBQUNqRywrSkFBbUg7QUFDbkgsK0pBQW1IO0FBRW5ILE1BQWEsY0FBYztJQUN2QixZQUNZLFNBQXlCLEVBQ3pCLFVBQTBEO1FBRDFELGNBQVMsR0FBVCxTQUFTLENBQWdCO1FBQ3pCLGVBQVUsR0FBVixVQUFVLENBQWdEO0lBQ2hFLENBQUM7SUFFRCxNQUFNLENBQUMsUUFBb0I7O1lBQzdCLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFBLDhDQUFnQixFQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzdDLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNwRCxPQUFPLFFBQVEsQ0FBQztRQUNwQixDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsVUFBa0I7O1lBQy9CLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQ3pFLENBQUM7S0FBQTtJQUVLLElBQUk7O1lBQ04sTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzVELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsOENBQWdCLENBQUMsQ0FBQztZQUMzQyxPQUFPLE9BQU8sQ0FBQztRQUNuQixDQUFDO0tBQUE7SUFFSyxRQUFRLENBQUMsVUFBa0I7O1lBQzdCLElBQUc7Z0JBQ0MsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFFeEUsT0FBTyxJQUFBLDhDQUFnQixFQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pDO1lBQUMsT0FBTSxHQUFHLEVBQUM7Z0JBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBRSxHQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDM0M7UUFDTCxDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsUUFBb0I7O1lBQ2pDLElBQUksU0FBUyxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsTUFBTyxDQUFDLENBQUM7WUFDN0UsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUEsOENBQWdCLEVBQUMsUUFBUSxDQUFDLENBQUM7WUFDN0MsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDOUMsT0FBTyxRQUFRLENBQUM7UUFDcEIsQ0FBQztLQUFBO0NBQ0o7QUF0Q0Qsd0NBc0NDO0FBRUQsa0JBQWUsSUFBSSxjQUFjLENBQzdCLDhCQUFhLENBQUMsV0FBVyxFQUFFLEVBQzNCLG9DQUFTLENBQ1IsQ0FBQyJ9