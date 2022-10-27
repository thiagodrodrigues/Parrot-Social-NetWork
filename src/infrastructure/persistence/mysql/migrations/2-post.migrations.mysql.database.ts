import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.createTable('posts', {
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
                        tableName: 'users'
                    },
                    key: 'idUser'
                }
            },
            createdAt: Sequelize.DataTypes.DATE,
            updatedAt: Sequelize.DataTypes.DATE
        });
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.dropTable('post');
    }
}