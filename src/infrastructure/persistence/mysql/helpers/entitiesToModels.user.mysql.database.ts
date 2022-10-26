import { UserEntity } from "../../../../domain/entities/user/socialnetwork.user.entity";

export default function (users: UserEntity) {
    const user = {
        idUser: users.idUser,
        name: users.name,
        email: users.email,
        apartment: users.apartment,
        password: users.password,
        created_At: users.created_At,
        updated_At: users.updated_At,
        photo: users.photo,
    };
    return {
        user: user,
    };
}