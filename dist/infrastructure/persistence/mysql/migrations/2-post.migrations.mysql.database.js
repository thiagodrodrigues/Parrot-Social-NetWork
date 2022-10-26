"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = __importStar(require("sequelize"));
exports.default = {
    up: (queryInterface) => {
        return queryInterface.createTable('post', {
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
    down: (queryInterface) => {
        return queryInterface.dropTable('post');
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi1wb3N0Lm1pZ3JhdGlvbnMubXlzcWwuZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvbXlzcWwvbWlncmF0aW9ucy8yLXBvc3QubWlncmF0aW9ucy5teXNxbC5kYXRhYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscURBQXVDO0FBRXZDLGtCQUFlO0lBQ1gsRUFBRSxFQUFFLENBQUMsY0FBd0MsRUFBRSxFQUFFO1FBQzdDLE9BQU8sY0FBYyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUU7WUFDdEMsTUFBTSxFQUFFO2dCQUNKLElBQUksRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU87Z0JBQ2pDLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixLQUFLLEVBQUUsUUFBUTtnQkFDZixhQUFhLEVBQUUsSUFBSTtnQkFDbkIsU0FBUyxFQUFFLEtBQUs7YUFDbkI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTTtnQkFDaEMsU0FBUyxFQUFFLEtBQUs7YUFDbkI7WUFDRCxNQUFNLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTztnQkFDakMsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLFVBQVUsRUFBRTtvQkFDUixLQUFLLEVBQUU7d0JBQ0gsU0FBUyxFQUFFLE9BQU87cUJBQ3JCO29CQUNELEdBQUcsRUFBRSxRQUFRO2lCQUNoQjthQUNKO1lBQ0QsU0FBUyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSTtZQUNuQyxTQUFTLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJO1NBQ3RDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxJQUFJLEVBQUUsQ0FBQyxjQUF3QyxFQUFFLEVBQUU7UUFDL0MsT0FBTyxjQUFjLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLENBQUM7Q0FDSixDQUFBIn0=