const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Plant extends Model { }

Plant.init(
    {
        plant_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        plant_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'plant',
    }
);

module.exports = Plant;