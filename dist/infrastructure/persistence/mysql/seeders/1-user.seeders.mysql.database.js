"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: (queryInterface) => {
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
        ]);
    },
    down: (queryInterface) => {
        return queryInterface.bulkDelete('users', {});
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS11c2VyLnNlZWRlcnMubXlzcWwuZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvbXlzcWwvc2VlZGVycy8xLXVzZXIuc2VlZGVycy5teXNxbC5kYXRhYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLGtCQUFlO0lBQ1gsRUFBRSxFQUFFLENBQUMsY0FBd0MsRUFBRSxFQUFFO1FBQzdDLE9BQU8sY0FBYyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDdEM7Z0JBQ0ksUUFBUSxFQUFFLENBQUM7Z0JBQ2QsTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLE9BQU8sRUFBRSxtQkFBbUI7Z0JBQzVCLFVBQVUsRUFBRSxPQUFPO2dCQUNuQixXQUFXLEVBQUUsR0FBRztnQkFDaEIsT0FBTyxFQUFFLCtFQUErRTthQUN4RjtZQUNEO2dCQUNJLFFBQVEsRUFBRSxDQUFDO2dCQUNkLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixPQUFPLEVBQUUsbUJBQW1CO2dCQUM1QixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsV0FBVyxFQUFFLEdBQUc7Z0JBQ2hCLE9BQU8sRUFBRSwrRUFBK0U7YUFDeEY7WUFDRDtnQkFDSSxRQUFRLEVBQUUsQ0FBQztnQkFDZCxNQUFNLEVBQUUsZUFBZTtnQkFDdkIsT0FBTyxFQUFFLHlCQUF5QjtnQkFDbEMsVUFBVSxFQUFFLFVBQVU7Z0JBQ3RCLFdBQVcsRUFBRSxHQUFHO2dCQUNoQixPQUFPLEVBQUUsK0VBQStFO2FBQ3hGO1NBQ0osQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNELElBQUksRUFBRSxDQUFDLGNBQXdDLEVBQUUsRUFBRTtRQUMvQyxPQUFPLGNBQWMsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Q0FDSixDQUFDIn0=