import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkInsert('posts', [
            {
                "content": "Reunião de Condomínio hoje",
                "idPost": 1,
                "idUser": 1
            },
            {
                "content": "Churrasco dos condôminos sábado",
                "idPost": 2,
                "idUser": 3 
            }
        ])
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkDelete('posts', {});
    }
};