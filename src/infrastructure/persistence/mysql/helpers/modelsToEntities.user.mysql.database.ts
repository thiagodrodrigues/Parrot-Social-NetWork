import { UserEntity } from "../../../../domain/entities/user/socialnetwork.user.entity";
import { IUserEntity } from "../../../../domain/entities/user/user.entity";

export default function (user: any): UserEntity | undefined {
    if(!user)
        return;

    let users: IUserEntity = {
        idUser: user.idUser,
        name: user.name,
        email: user.email,
        apartment: user.apartment,
        password: user.password,
        confirmPassword: user.confirmPassword,
        created_At: user.created_At,
        updated_At: user.updated_At,
        photo: user.photo
        
    };

    return (users as UserEntity);
}