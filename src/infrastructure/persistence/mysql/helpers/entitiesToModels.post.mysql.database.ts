import { PostEntity } from "../../../../domain/entities/post/socialnetwork.post.entity";

export default function (posts: PostEntity) {
    const post = {
        idPost: posts.idPost,
        content: posts.content,
        idUser: posts.idUser,
        created_At: posts.created_At,
        updated_At: posts.updated_At,
    }
    return {
        post: post,
    };
}