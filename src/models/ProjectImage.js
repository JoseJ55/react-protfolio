const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ProjectImage extends Model {};

ProjectImage.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        projectImage:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        projectId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "ProjectImage",
    }
)

module.exports = ProjectImage;