const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Projects extends Model {};

Projects.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        projectName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        projectCode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'projects',
    }
)

module.exports = Projects;