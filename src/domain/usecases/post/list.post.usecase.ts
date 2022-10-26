import { PostEntity } from "../../entities/post/socialnetwork.post.entity";
import { IPostRepository } from "../../repositories/post.repository.interface";
import PostRepository from "../../../adapters/repositories/post.repository";
import { IUseCase } from "../usecase.interface";

class ListPostUseCase implements IUseCase {
    constructor(private _repository: IPostRepository) {
    }
    async execute(): Promise<PostEntity[] | undefined> {
        return await this._repository.list();
    }
}

export default new ListPostUseCase(
    PostRepository
);