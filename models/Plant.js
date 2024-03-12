const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Plant extends Model { }

Plant.init(
    {
        //define columns

        plant_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     primaryKey: true,
        //     autoIncrement: true,
        //   },
        plant_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        // date_found: {
        //     type: DataTypes.DATE,
        //     allowNull: false,
        //     defaultValue: DataTypes.NOW
        // },
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