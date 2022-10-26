import { MysqlDatabase } from "../mysql.database";
import * as Sequelize from 'sequelize';

export default MysqlDatabase.getInstance().createModel('posts', {
    idPost: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        field: 'idPost',
        autoIncrement: true,
        allowNull: false
    },
    content: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    idUser: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: {
                tableName: 'user'
            },
            key: 'idUser'
        }
    },
    createdAt: Sequelize.DataTypes.DATE,
    updatedAt: Sequelize.DataTypes.DATE
});