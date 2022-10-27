import express from 'express';
// import clientsService from '../../common/services/clients.service';
import LoginAuthUseCase from '../../../domain/usecases/user/login.post.usecase';
import debug from 'debug';
/* import multer from 'multer'; */
/* import path from 'path'; */
/* import xlsxFilesInterface from '../../../infrastructure/files/xlsx.files'; */
/* import logger from '../../../infrastructure/logs/winston.logs'; */
import constantsConfig from '../../../infrastructure/config/constants.config';
import jwt from 'jsonwebtoken';

const log: debug.IDebugger = debug('app:auth-middleware');

class AuthMiddleware {
    async checkAuth(req: express.Request, res: express.Response, next: express.NextFunction){
        try{
            const token = req.header(`Authorization`)?.replace(`Bearer `, ``);

            if(!token){
                res.status(401).send({
                    error: constantsConfig.USER.MESSAGES.ERROR.USER_UNAUTHENTICATED_USER
                });
            } else {
                const decoded = jwt.verify(token, String(process.env.SECRET_KEY));
                if(typeof decoded == `string`){
                    res.status(401).send({
                        error: constantsConfig.USER.MESSAGES.ERROR.USER_UNAUTHENTICATED_USER
                    });
                } else {
                    console.log(decoded.idUser);
                    next();
                }
            }

        } catch (err) {
            res.status(401).send({
                error: constantsConfig.USER.MESSAGES.ERROR.USER_UNAUTHENTICATED_USER
            });
        }
    }
}

export default new AuthMiddleware();