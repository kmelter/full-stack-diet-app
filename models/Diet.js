const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Diet extends Mode {}

Diet.init(
    {
        //define columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        diet_name: {
            
        }
    }
)