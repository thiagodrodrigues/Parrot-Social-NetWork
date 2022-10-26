import { PostEntity } from "../../../../domain/entities/post/socialnetwork.post.entity";

export default function (post: PostEntity) {
    const posts = {
        idPost: post.idPost,
        content: post.content,
        idUser: post.idUser,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
    }
    return {
        posts: posts,
    };
}