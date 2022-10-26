"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert('user', [
            {
                "idUser": 1,
                "name": "sadafafa",
                "email": "aabbcc@abc.com.br",
                "password": "12345",
                "apartment": 101,
                "photo": "https://t.ctcdn.com.br/P7-_JvQTS4U7-if6zHyXjyMiNQ8=/400x400/smart/i606944.png"
            },
            {
                "idUser": 2,
                "name": "saffffdafafa",
                "email": "aabbccdd@abc.com.br",
                "password": "123456",
                "apartment": 102,
                "photo": "https://t.ctcdn.com.br/P7-_JvQTS4U7-if6zHyXjyMiNQ8=/400x400/smart/i606944.png"
            },
            {
                "idUser": 3,
                "name": "sadafffadasfafa",
                "email": "aabbccddee@abc.com.br",
                "password": "12345675",
                "apartment": 103,
                "photo": "https://t.ctcdn.com.br/P7-_JvQTS4U7-if6zHyXjyMiNQ8=/400x400/smart/i606944.png"
            },
        ]);
    },
    down: (queryInterface) => {
        return queryInterface.bulkDelete('user', {});
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS11c2VyLnNlZWRlcnMubXlzcWwuZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvbXlzcWwvc2VlZGVycy8xLXVzZXIuc2VlZGVycy5teXNxbC5kYXRhYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLGtCQUFlO0lBQ1gsRUFBRSxFQUFFLENBQUMsY0FBd0MsRUFBRSxFQUFFO1FBQzdDLE9BQU8sY0FBYyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7WUFDckM7Z0JBQ0ksUUFBUSxFQUFFLENBQUM7Z0JBQ2QsTUFBTSxFQUFFLFVBQVU7Z0JBQ2xCLE9BQU8sRUFBRSxtQkFBbUI7Z0JBQzVCLFVBQVUsRUFBRSxPQUFPO2dCQUNuQixXQUFXLEVBQUUsR0FBRztnQkFDaEIsT0FBTyxFQUFFLCtFQUErRTthQUN4RjtZQUNEO2dCQUNJLFFBQVEsRUFBRSxDQUFDO2dCQUNkLE1BQU0sRUFBRSxjQUFjO2dCQUN0QixPQUFPLEVBQUUscUJBQXFCO2dCQUM5QixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsV0FBVyxFQUFFLEdBQUc7Z0JBQ2hCLE9BQU8sRUFBRSwrRUFBK0U7YUFDeEY7WUFDRDtnQkFDSSxRQUFRLEVBQUUsQ0FBQztnQkFDZCxNQUFNLEVBQUUsaUJBQWlCO2dCQUN6QixPQUFPLEVBQUUsdUJBQXVCO2dCQUNoQyxVQUFVLEVBQUUsVUFBVTtnQkFDdEIsV0FBVyxFQUFFLEdBQUc7Z0JBQ2hCLE9BQU8sRUFBRSwrRUFBK0U7YUFDeEY7U0FDSixDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0QsSUFBSSxFQUFFLENBQUMsY0FBd0MsRUFBRSxFQUFFO1FBQy9DLE9BQU8sY0FBYyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQztDQUNKLENBQUMifQ==