import { PostEntity } from "../../entities/post/socialnetwork.post.entity";
import { IPostRepository } from "../../repositories/post.repository.interface";
import PostRepository from "../../../adapters/repositories/post.repository";
import { IUseCase } from "../usecase.interface";

export class CreatePostUseCase implements IUseCase {
    constructor(private _repository: IPostRepository) {
    }
    async execute(data: { idUser: Number, content: string}): Promise<PostEntity | undefined> {
        return await this._repository.create({
            idUser: Number(data.idUser),
            content: data.content
        });
    }
}

export default new CreatePostUseCase(
    PostRepository
);