const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Plant extends Model { }

Plant.init(
    {
        //define columns

        plant_id: {
            type: DataTypes.INTEGER,
            allowNull:false,
            autoIncrement: true
        },
        plant_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
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