const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class UserDiet extends Model {}

UserDiet.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
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
        modelName: 'user_diet',
    }
);

module.exports = UserDiet;