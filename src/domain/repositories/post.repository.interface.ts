import { PostEntity } from "../entities/post/socialnetwork.post.entity";

export interface IPostRepository {
    readById(resourceId: number): Promise<PostEntity | undefined>,
    create(resource: PostEntity): Promise<PostEntity>,
    deleteById(resourceId: number): Promise<void>,
    list(): Promise<PostEntity[] | undefined>,
    updateById(resource: PostEntity): Promise<PostEntity | undefined>
}