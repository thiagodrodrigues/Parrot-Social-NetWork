import { MysqlDatabase } from "../mysql.database";
import * as Sequelize from 'sequelize';

export default MysqlDatabase.getInstance().createModel('user', {
    idUser: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        field: 'idUser',
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    apartment: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    created_At: Sequelize.DataTypes.DATE,
    update_At: Sequelize.DataTypes.DATE,
    photo: Sequelize.DataTypes.STRING
});