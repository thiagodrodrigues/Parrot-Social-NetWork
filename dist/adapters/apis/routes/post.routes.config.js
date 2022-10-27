"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRoutes = void 0;
const common_routes_config_1 = require("./common.routes.config");
const post_controller_1 = __importDefault(require("../controllers/post.controller"));
const post_middleware_1 = __importDefault(require("../middlewares/post.middleware"));
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
class PostRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'PostRoutes');
    }
    configureRoutes() {
        this.app.route(`/feed/:idUser`)
            .all(auth_middleware_1.default.checkAuth)
            .post(post_controller_1.default.createPost); //postar nova publicação
        this.app.route(`/feed/`)
            .get(post_controller_1.default.listPost); //listar todas as publicações no feed
        this.app.route(`/feed/:idPost`)
            .all(auth_middleware_1.default.checkAuth, post_middleware_1.default.validatePostExists)
            .get(post_controller_1.default.getPostById) //pegar uma publicação específica
            .put(post_controller_1.default.updatePost) //atualizar uma publicação específica
            .delete(post_controller_1.default.removePost); //deletar uma publicação específica
        return this.app;
    }
}
exports.PostRoutes = PostRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL2FwaXMvcm91dGVzL3Bvc3Qucm91dGVzLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxpRUFBNEQ7QUFDNUQscUZBQTREO0FBQzVELHFGQUE0RDtBQUM1RCxxRkFBOEQ7QUFHOUQsTUFBYSxVQUFXLFNBQVEseUNBQWtCO0lBQzlDLFlBQVksR0FBd0I7UUFDaEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQzthQUMxQixHQUFHLENBQUMseUJBQWdCLENBQUMsU0FBUyxDQUFDO2FBQy9CLElBQUksQ0FBQyx5QkFBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsd0JBQXdCO1FBRTlELElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUNuQixHQUFHLENBQUMseUJBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDLHFDQUFxQztRQUV2RSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7YUFDMUIsR0FBRyxDQUNBLHlCQUFnQixDQUFDLFNBQVMsRUFDMUIseUJBQWMsQ0FBQyxrQkFBa0IsQ0FDaEM7YUFDSixHQUFHLENBQUMseUJBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxpQ0FBaUM7YUFDakUsR0FBRyxDQUFDLHlCQUFjLENBQUMsVUFBVSxDQUFDLENBQUMscUNBQXFDO2FBQ3BFLE1BQU0sQ0FBQyx5QkFBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsbUNBQW1DO1FBRTNFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDO0NBQ0o7QUF4QkQsZ0NBd0JDIn0=