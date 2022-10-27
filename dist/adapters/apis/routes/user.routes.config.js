"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const common_routes_config_1 = require("./common.routes.config");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
class UserRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UserRoutes');
    }
    configureRoutes() {
        this.app.route(`/cadastro`)
            .post(user_controller_1.default.createUser); //cadastrar novo usuário
        this.app.route(`/perfil/:idUser`)
            .all(auth_middleware_1.default.checkAuth) // verifica se o usuário está logado e retorna o idUser
            .get(user_controller_1.default.getUserById) // perfil de um usuário específico
            .put(user_controller_1.default.updateUser) // atualizar um usuário específico
            .delete(user_controller_1.default.removeUser); // deletar um usuário específico
        this.app.route(`/login`)
            .post(user_controller_1.default.login); // logar um usuário
        return this.app;
    }
}
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL2FwaXMvcm91dGVzL3VzZXIucm91dGVzLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxpRUFBNEQ7QUFDNUQscUZBQTREO0FBQzVELHFGQUE4RDtBQUc5RCxNQUFhLFVBQVcsU0FBUSx5Q0FBa0I7SUFDOUMsWUFBWSxHQUF3QjtRQUNoQyxLQUFLLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO2FBQ3RCLElBQUksQ0FBQyx5QkFBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsd0JBQXdCO1FBRTlELElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDO2FBQzVCLEdBQUcsQ0FBQyx5QkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyx1REFBdUQ7YUFDdkYsR0FBRyxDQUFDLHlCQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsa0NBQWtDO2FBQ2xFLEdBQUcsQ0FBQyx5QkFBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGtDQUFrQzthQUNqRSxNQUFNLENBQUMseUJBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLGdDQUFnQztRQUV4RSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7YUFDbkIsSUFBSSxDQUFDLHlCQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxtQkFBbUI7UUFFcEQsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3BCLENBQUM7Q0FDSjtBQXBCRCxnQ0FvQkMifQ==