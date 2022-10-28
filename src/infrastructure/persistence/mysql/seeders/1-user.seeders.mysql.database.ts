import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkInsert('users', [
            {
                "idUser": 1,
	            "name": "Thiago",
	            "email": "thiago@abc.com.br",
	            "password": "12345",
	            "apartment": 101,
	            "photo": "https://t.ctcdn.com.br/P7-_JvQTS4U7-if6zHyXjyMiNQ8=/400x400/smart/i606944.png"
            },
            {
                "idUser": 2,
	            "name": "Daniel",
	            "email": "Daniel@abc.com.br",
	            "password": "123456",
	            "apartment": 102,
	            "photo": "https://t.ctcdn.com.br/P7-_JvQTS4U7-if6zHyXjyMiNQ8=/400x400/smart/i606944.png"
            },
            {
                "idUser": 3,
	            "name": "Thiago Daniel",
	            "email": "thiagodaniel@abc.com.br",
	            "password": "12345675",
	            "apartment": 103,
	            "photo": "https://t.ctcdn.com.br/P7-_JvQTS4U7-if6zHyXjyMiNQ8=/400x400/smart/i606944.png"
            },
        ])
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkDelete('users', {});
    }
};