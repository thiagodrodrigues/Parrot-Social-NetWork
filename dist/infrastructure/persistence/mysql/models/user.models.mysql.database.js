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
const mysql_database_1 = require("../mysql.database");
const Sequelize = __importStar(require("sequelize"));
exports.default = mysql_database_1.MysqlDatabase.getInstance().createModel('users', {
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
    createdAt: Sequelize.DataTypes.DATE,
    updatedAt: Sequelize.DataTypes.DATE,
    photo: Sequelize.DataTypes.STRING
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2RlbHMubXlzcWwuZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvbXlzcWwvbW9kZWxzL3VzZXIubW9kZWxzLm15c3FsLmRhdGFiYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzREFBa0Q7QUFDbEQscURBQXVDO0FBRXZDLGtCQUFlLDhCQUFhLENBQUMsV0FBVyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRTtJQUM1RCxNQUFNLEVBQUU7UUFDSixJQUFJLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPO1FBQ2pDLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLEtBQUssRUFBRSxRQUFRO1FBQ2YsYUFBYSxFQUFFLElBQUk7UUFDbkIsU0FBUyxFQUFFLEtBQUs7S0FDbkI7SUFDRCxJQUFJLEVBQUU7UUFDRixJQUFJLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNO1FBQ2hDLFNBQVMsRUFBRSxLQUFLO0tBQ25CO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsSUFBSSxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTztRQUNqQyxTQUFTLEVBQUUsS0FBSztRQUNoQixNQUFNLEVBQUUsSUFBSTtLQUNmO0lBQ0QsU0FBUyxFQUFFO1FBQ1AsSUFBSSxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTTtRQUNoQyxTQUFTLEVBQUUsS0FBSztLQUNuQjtJQUNELFFBQVEsRUFBRTtRQUNOLElBQUksRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU07UUFDaEMsU0FBUyxFQUFFLEtBQUs7S0FDbkI7SUFDRCxTQUFTLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJO0lBQ25DLFNBQVMsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUk7SUFDbkMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTTtDQUNwQyxDQUFDLENBQUMifQ==