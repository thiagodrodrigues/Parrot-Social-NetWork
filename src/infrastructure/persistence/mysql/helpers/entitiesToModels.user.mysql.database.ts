import { UserEntity } from "../../../../domain/entities/user/socialnetwork.user.entity";

export default function (user: UserEntity) {
    const users = {
        idUser: user.idUser,
        name: user.name,
        email: user.email,
        apartment: user.apartment,
        password: user.password,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        photo: user.photo,
    };
    return {
        users: users,
    };
}