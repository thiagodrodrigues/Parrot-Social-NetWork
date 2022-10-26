import { PostEntity } from "../../entities/post/socialnetwork.post.entity";
import { IPostRepository } from "../../repositories/post.repository.interface";
import PostRepository from "../../../adapters/repositories/post.repository";
import { IUseCase } from "../usecase.interface";

class ReadPostUseCase implements IUseCase {
    constructor(private _repository: IPostRepository) {
    }
    async execute(data: { idPost: number }): Promise<PostEntity | undefined> {
        return await this._repository.readById(data.idPost);
    }
}

export default new ReadPostUseCase(
    PostRepository
);