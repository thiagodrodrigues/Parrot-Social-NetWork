import { IDatabaseModel } from "../../infrastructure/persistence/databasemodel.interface";
import { PostEntity } from "../../domain/entities/post/socialnetwork.post.entity";
import { MysqlDatabase } from "../../infrastructure/persistence/mysql/mysql.database";
import { IPostRepository } from "../../domain/repositories/post.repository.interface";
import * as Sequelize from 'sequelize'
import postModel from '../../infrastructure/persistence/mysql/models/post.models.mysql.database';
import modelsToEntities from '../../infrastructure/persistence/mysql/helpers/modelsToEntities.post.mysql.database';
import entitiesToModels from '../../infrastructure/persistence/mysql/helpers/entitiesToModels.post.mysql.database';

export class PostRepository implements IPostRepository {
    constructor(
        private _database: IDatabaseModel, 
        private _modelPost: Sequelize.ModelCtor<Sequelize.Model<any, any>>
        ){}

    async readById(resourceId: number): Promise<PostEntity | undefined> {
        try{
            const post = await this._database.read(this._modelPost, resourceId, {});
            
            return modelsToEntities(post);
        } catch(err){
            throw new Error((err as Error).message);
        }
    }

    async create(resource: PostEntity): Promise<PostEntity> {
        const post = entitiesToModels(resource);
        await this._database.create(this._modelPost, post);
        return resource;
    }

    async deleteById(resourceId: number): Promise<void> {
        await this._database.delete(this._modelPost, { idPost: resourceId });
    }

    async list(): Promise<PostEntity[]> {
        const post = await this._database.list(this._modelPost, {});
        const clients = post.map(modelsToEntities);
        return clients;
    }

    async updateById(resource: PostEntity): Promise<PostEntity | undefined> {
        let postModel = await this._database.read(this._modelPost, resource.idPost!, {});
        const post = entitiesToModels(resource);
        await this._database.update(postModel, post);
        return resource;
    }
}

export default new PostRepository(
    MysqlDatabase.getInstance(),
    postModel
    );