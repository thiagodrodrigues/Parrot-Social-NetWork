import { IPostRepository } from "../../repositories/post.repository.interface";
import PostRepository from "../../../adapters/repositories/post.repository";
import { IUseCase } from "../usecase.interface";

class DeletePostUseCase implements IUseCase {
    constructor(private _repository: IPostRepository) {
    }
    async execute(data: { idPost: number }): Promise<void> {
        return await this._repository.deleteById(data.idPost);
    }
}

export default new DeletePostUseCase(
    PostRepository
);
