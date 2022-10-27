import express from 'express';
import createUserUsecase from '../../../domain/usecases/user/create.user.usecase';
import readUserUsecase from '../../../domain/usecases/user/read.user.usecase';
import updateUserUsecase from '../../../domain/usecases/user/update.user.usecase';
import deleteUserUsecase from '../../../domain/usecases/user/delete.user.usecase';
import listUserUsecase from '../../../domain/usecases/user/list.user.usecase';
import debug from 'debug';
import loginAuthUsecase from '../../../domain/usecases/user/login.post.usecase';

const log: debug.IDebugger = debug('app:users-controller');

class UserController {
    async listUser(req: express.Request, res: express.Response){
        const user = await listUserUsecase.execute();
        res.status(200).send(user);
    }

    async getUserById(req: express.Request, res: express.Response) {
        const user = await readUserUsecase.execute({
            idUser: Number(req.params.idUser)
        });
        res.status(200).send(user);
    }

    async createUser(req: express.Request, res: express.Response) {
        const user = await createUserUsecase.execute(req.body);
        log(user);
        res.status(201).send(user);
    }

    async updateUser(req: express.Request, res: express.Response) {
        const userModel = await updateUserUsecase.execute({
            name: req.body.name,
	        email: req.body.email,
	        password: req.body.password,
	        apartment: req.body.apartment,
	        photo: req.body.photo,
            idUser: Number(req.params.idUser)
        });
        log(userModel);
        res.status(200).send(userModel);
    }

    async removeUser(req: express.Request, res: express.Response) {
        const User = await deleteUserUsecase.execute({
            idUser: Number(req.params.idUser)
        });
        res.status(204).send();
    }

    async login(req: express.Request, res: express.Response){
        const user = await loginAuthUsecase.execute(req.body);
        if(user){
            res.status(200).send(user);
        } else {
            res.status(401).send({
                error: `Dados incorretos.`
            });
        }
        
    }

/*     async createClientBulk(req: express.Request, res: express.Response) {
        let countUsers = 0;
        for(countUsers = 0; countUsers < req.body.fileData.length; countUsers++){
            await createUserUsecase.execute(req.body.fileData[countUsers]);
        }
        res.status(201).send({
            createdUsers: countUsers
        });
    } */
}

export default new UserController();