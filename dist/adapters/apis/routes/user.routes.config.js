"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const common_routes_config_1 = require("./common.routes.config");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
const user_middleware_1 = __importDefault(require("../middlewares/user.middleware"));
class UserRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UserRoutes');
    }
    configureRoutes() {
        this.app.route(`/cadastro`)
            .all(user_middleware_1.default.validateClientRepeated) // valida se o email utilizado já existe
            .post(user_controller_1.default.createUser); //cadastrar novo usuário
        this.app.route(`/perfil/:idUser`)
            .all(auth_middleware_1.default.checkAuth) // verifica se o usuário está logado e retorna o idUser
            .get(user_controller_1.default.getUserById) // perfil de um usuário específico
            .put(user_middleware_1.default.validateClientRepeated, // Verifica se o email enviado já existe
        user_controller_1.default.updateUser // atualizar um usuário específico
        )
            .delete(user_controller_1.default.removeUser); // deletar um usuário específico
        this.app.route(`/login`)
            .post(user_controller_1.default.login); // logar um usuário
        this.app.route(`/perfil`)
            .get(user_controller_1.default.listUser); // lista todos os usuários
        return this.app;
    }
}
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL2FwaXMvcm91dGVzL3VzZXIucm91dGVzLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxpRUFBNEQ7QUFDNUQscUZBQTREO0FBQzVELHFGQUE4RDtBQUM5RCxxRkFBMkQ7QUFHM0QsTUFBYSxVQUFXLFNBQVEseUNBQWtCO0lBQzlDLFlBQVksR0FBd0I7UUFDaEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQzthQUN0QixHQUFHLENBQUMseUJBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLHdDQUF3QzthQUNuRixJQUFJLENBQUMseUJBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLHdCQUF3QjtRQUU5RCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQzthQUM1QixHQUFHLENBQUMseUJBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsdURBQXVEO2FBQ3ZGLEdBQUcsQ0FBQyx5QkFBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLGtDQUFrQzthQUNsRSxHQUFHLENBQ0EseUJBQWMsQ0FBQyxzQkFBc0IsRUFBRSx3Q0FBd0M7UUFDL0UseUJBQWMsQ0FBQyxVQUFVLENBQUMsa0NBQWtDO1NBQzNEO2FBQ0osTUFBTSxDQUFDLHlCQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxnQ0FBZ0M7UUFFeEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO2FBQ25CLElBQUksQ0FBQyx5QkFBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsbUJBQW1CO1FBRXBELElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQzthQUNwQixHQUFHLENBQUMseUJBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLDBCQUEwQjtRQUU3RCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztDQUNKO0FBM0JELGdDQTJCQyJ9