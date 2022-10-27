import express from 'express';
import readPostUsecase from '../../../domain/usecases/post/read.post.usecase';
import debug from 'debug';
import logger from '../../../infrastructure/logs/winston.logs';
import constantsConfig from '../../../infrastructure/config/constants.config';

const log: debug.IDebugger = debug('app:clients-middleware');

class PostMiddleware {


async validatePostExists(req: express.Request, res: express.Response, next: express.NextFunction) {
    const post = await readPostUsecase.execute({
        idPost: Number(req.params.idPost)
    });
    if (post) {
        logger.info(['Cliente encontrado: ', post]);
        next();
    } else {
        logger.error(`Usuário ${req.params.idPost} não existe`);
        res.status(404).send({error: constantsConfig.POST.MESSAGES.ERROR.POST_NOT_EXISTS.replace('{POST_ID}', req.params.idPost)});
    }
}
}

export default new PostMiddleware();