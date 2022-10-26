import { PostEntity } from "../../../../domain/entities/post/socialnetwork.post.entity";
import { IPostEntity } from "../../../../domain/entities/post/post.entity";

export default function (post: any): PostEntity | undefined {
    if(!post)
        return;

    let posts: IPostEntity = {
        idPost: post.idPost,
        content: post.content,
        idUser: post.idUser,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt
    };

    return (posts as PostEntity);
}