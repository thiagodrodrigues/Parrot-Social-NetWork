"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: (queryInterface) => {
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
        ]);
    },
    down: (queryInterface) => {
        return queryInterface.bulkDelete('pessoas_fisicas', {});
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi1wb3N0LnNlZWRlcnMubXlzcWwuZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvbXlzcWwvc2VlZGVycy8yLXBvc3Quc2VlZGVycy5teXNxbC5kYXRhYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLGtCQUFlO0lBQ1gsRUFBRSxFQUFFLENBQUMsY0FBd0MsRUFBRSxFQUFFO1FBQzdDLE9BQU8sY0FBYyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7WUFDckM7Z0JBQ0ksU0FBUyxFQUFFLFVBQVU7Z0JBQ3JCLFFBQVEsRUFBRSxDQUFDO2dCQUNYLFFBQVEsRUFBRSxDQUFDO2FBQ2Q7WUFDRDtnQkFDSSxTQUFTLEVBQUUsVUFBVTtnQkFDckIsUUFBUSxFQUFFLENBQUM7Z0JBQ1gsUUFBUSxFQUFFLENBQUM7YUFDZDtTQUNKLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDRCxJQUFJLEVBQUUsQ0FBQyxjQUF3QyxFQUFFLEVBQUU7UUFDL0MsT0FBTyxjQUFjLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzVELENBQUM7Q0FDSixDQUFDIn0=