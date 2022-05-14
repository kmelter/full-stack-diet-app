const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class FoodDiet extends Model {}

FoodDiet.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        food_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'food',
                key: 'id'
            }
        },
        diet_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'diet',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'food_diet',
    }
);

module.exports = FoodDiet;