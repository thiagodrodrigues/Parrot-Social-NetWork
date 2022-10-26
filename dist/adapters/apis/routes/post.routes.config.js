"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRoutes = void 0;
const common_routes_config_1 = require("./common.routes.config");
const post_controller_1 = __importDefault(require("../controllers/post.controller"));
class PostRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'PostRoutes');
    }
    configureRoutes() {
        this.app.route(`/feed/:idUser`)
            .get(post_controller_1.default.listPost) //listar todas as publicações no feed
            .post(post_controller_1.default.createPost); //postar nova publicação
        this.app.route(`/feed/:idPost`)
            .get(post_controller_1.default.getPostById) //pegar uma publicação específica
            .put(post_controller_1.default.updatePost) //atualizar uma publicação específica
            .delete(post_controller_1.default.removePost); //deletar uma publicação específica
        return this.app;
    }
}
exports.PostRoutes = PostRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL2FwaXMvcm91dGVzL3Bvc3Qucm91dGVzLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxpRUFBNEQ7QUFDNUQscUZBQTREO0FBSTVELE1BQWEsVUFBVyxTQUFRLHlDQUFrQjtJQUM5QyxZQUFZLEdBQXdCO1FBQ2hDLEtBQUssQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7YUFDMUIsR0FBRyxDQUFDLHlCQUFjLENBQUMsUUFBUSxDQUFDLENBQUMscUNBQXFDO2FBQ2xFLElBQUksQ0FBQyx5QkFBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsd0JBQXdCO1FBRTlELElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQzthQUMxQixHQUFHLENBQUMseUJBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxpQ0FBaUM7YUFDakUsR0FBRyxDQUFDLHlCQUFjLENBQUMsVUFBVSxDQUFDLENBQUMscUNBQXFDO2FBQ3BFLE1BQU0sQ0FBQyx5QkFBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsbUNBQW1DO1FBRTNFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDO0NBQ0o7QUFqQkQsZ0NBaUJDIn0=