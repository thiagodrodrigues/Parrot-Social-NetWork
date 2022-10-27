import { IDatabaseModel } from "../../infrastructure/persistence/databasemodel.interface";
import { UserEntity } from "../../domain/entities/user/socialnetwork.user.entity";
import { MysqlDatabase } from "../../infrastructure/persistence/mysql/mysql.database";
import { IUserRepository } from "../../domain/repositories/user.repository.interface";
import * as Sequelize from 'sequelize'
import userModel from '../../infrastructure/persistence/mysql/models/user.models.mysql.database';
import modelsToEntities from '../../infrastructure/persistence/mysql/helpers/modelsToEntities.user.mysql.database';
import entitiesToModels from '../../infrastructure/persistence/mysql/helpers/entitiesToModels.user.mysql.database';

export class UserRepository implements IUserRepository {
    constructor(
        private _database: IDatabaseModel, 
        private _modelUser: Sequelize.ModelCtor<Sequelize.Model<any, any>>
        ){}

    async readById(resourceId: number): Promise<UserEntity | undefined> {
        try{
            const user = await this._database.read(this._modelUser, resourceId, {});
            
            return modelsToEntities(user);
        } catch(err){
            throw new Error((err as Error).message);
        }
    }

    async readByEmail(email: string): Promise<UserEntity | undefined> {
        try{
            const user = await this._database.readString(this._modelUser, {
                email: email
            });
            
            return modelsToEntities(user);
        } catch(err){
            throw new Error((err as Error).message);
        }
    }

    async readByWhere(email: string, password: string): Promise<UserEntity | undefined> {
        try{
            const users = await this._database.readByWhere(this._modelUser, {
                email: email,
                password: password
            });
            
            return modelsToEntities(users);
        } catch(err){
            throw new Error((err as Error).message);
        }
    }

    async create(resource: UserEntity): Promise<UserEntity> {
        const { users }  = entitiesToModels(resource);
        await this._database.create(this._modelUser, users);
        return resource;
    }

    async deleteById(resourceId: number): Promise<void> {
        await this._database.delete(this._modelUser, { idUser: resourceId });
    }

    async list(): Promise<UserEntity[]> {
        const user = await this._database.list(this._modelUser, {});
        const clients = user.map(modelsToEntities);
        return clients;
    }

    async updateById(resource: UserEntity): Promise<UserEntity | undefined> {
        console.log(resource)
        let userModel = await this._database.read(this._modelUser, resource.idUser);
        console.log(`User Model: ${userModel}`);
        const { users } = entitiesToModels(resource);
        console.log(users);
        await this._database.update(userModel, users);
        return resource;
    }
}

export default new UserRepository(
    MysqlDatabase.getInstance(),
    userModel
    );