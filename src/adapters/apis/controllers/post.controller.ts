import express from 'express';
import createPostUsecase from '../../../domain/usecases/post/create.post.usecase';
import readPostUsecase from '../../../domain/usecases/post/read.post.usecase';
import updatePostUsecase from '../../../domain/usecases/post/update.post.usecase';
import deletePostUsecase from '../../../domain/usecases/post/delete.post.usecase';
import listPostUsecase from '../../../domain/usecases/post/list.post.usecase';
import debug from 'debug';
import jwt from 'jsonwebtoken';

const log: debug.IDebugger = debug('app:posts-controller');

class PostController {
    async listPost(req: express.Request, res: express.Response){
        const post = await listPostUsecase.execute();
        res.status(200).send(post);
    }

    async getPostById(req: express.Request, res: express.Response) {
        const post = await readPostUsecase.execute({
            idPost: Number(req.params.idPost)
        });
        res.status(200).send(post);
    }

    async createPost(req: express.Request, res: express.Response) {
        const token = req.header(`Authorization`)?.replace(`Bearer `, ``);  
        if(!token){
            res.status(401).send({
                error: `Usuario nao autenticado.`
            });
        } else {
            const decoded = jwt.verify(token, String(process.env.SECRET_KEY));
            if(typeof decoded == `string`){
                res.status(401).send({
                    error: `Usuario nao autenticado.`
                });
            } else {
            const post = await createPostUsecase.execute({
                content: req.body.content,
                idUser: decoded.idUser
            }); 
        log(post);
        res.status(201).send(post);
    }
}}

    async updatePost(req: express.Request, res: express.Response) {
        const post = await updatePostUsecase.execute(req.body);
        res.status(200).send(post);
    }

    async removePost(req: express.Request, res: express.Response) {
        const post = await deletePostUsecase.execute({
            idPost: Number(req.params.idPost)
        });
        res.status(204).send();
    }

/*     async createClientBulk(req: express.Request, res: express.Response) {
        let countUsers = 0;
        for(countUsers = 0; countUsers < req.body.fileData.length; countUsers++){
            await createPostUsecase.execute(req.body.fileData[countUsers]);
        }
        res.status(201).send({
            createdUsers: countUsers
        });
    } */
}

export default new PostController();