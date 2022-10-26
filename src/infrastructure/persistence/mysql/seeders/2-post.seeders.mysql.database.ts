import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkInsert('post', [
            {
                "content": "sadafafa",
                "idPost": 1,
                "idUser": 1
            },
            {
                "content": "sadafafa",
                "idPost": 2,
                "idUser": 3 
            }
        ])
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkDelete('pessoas_fisicas', {});
    }
};