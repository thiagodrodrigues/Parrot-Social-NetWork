import { PostEntity } from "../../entities/post/socialnetwork.post.entity";
import { IPostRepository } from "../../repositories/post.repository.interface";
import PostRepository from "../../../adapters/repositories/post.repository";
import { IUseCase } from "../usecase.interface";

class UpdatePostUseCase implements IUseCase {
    constructor(private _repository: IPostRepository) {
    }
    async execute(data: PostEntity): Promise<PostEntity | undefined> {
        return await this._repository.updateById(data);
    }
}

export default new UpdatePostUseCase(
    PostRepository
);