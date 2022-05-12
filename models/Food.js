const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Food extends Model {}

Food.init(
    {
        //define columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        food_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        keto_safe: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'food'
    }
);

module.exports = Food;