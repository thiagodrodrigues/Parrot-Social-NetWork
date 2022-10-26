import { CommonRoutesConfig } from "./common.routes.config";
import PostController from "../controllers/post.controller";
/* import PostMiddleware from "../middlewares/post.middleware"; */
import express from "express";

export class PostRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'PostRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route(`/feed/:idUser`)
            .get(PostController.listPost) //listar todas as publicações no feed
            .post(PostController.createPost); //postar nova publicação

        this.app.route(`/feed/:idPost`)
            .get(PostController.getPostById) //pegar uma publicação específica
            .put(PostController.updatePost) //atualizar uma publicação específica
            .delete(PostController.removePost); //deletar uma publicação específica

        return this.app;
    }
}